import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobList } from '../../redux/action/jobAction';
import Index from '../pagin';


const ListJob = () => {
    const dispatch = useDispatch()
    const { getListJob, getListJobLoading, getListJobError, searchListJob, searchListJobLoading, searchListJobError } = useSelector((state) => state.JobReducer)

    useEffect(() => {
        // paggil
        console.log('komponen didmount')
        dispatch(jobList())
    }, [dispatch])


    var total = 0
    for (const property in searchListJob) {
        total = total + 1
    }

    return (
        <div className='container mt-4'>
            <h3 className='pb-3'>{searchListJob ? `Lowongan Pekerjaan yang tersedia ${total}/18 pekerjaan` : ''}</h3>
            
            {searchListJob ? <Index items={searchListJob}/>: getListJob ? (
                <Index items={getListJob}/>
            ) : 'loading'}
        </div>
    );
}

export default ListJob;
