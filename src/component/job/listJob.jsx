import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jobList } from '../../redux/action/jobAction';
import Index from '../pagin';


const ListJob = () => {
    const dispatch = useDispatch()
    const { getListJob, getListJobLoading, searchListJob, searchListJobLoading ,cari} = useSelector((state) => state.JobReducer)

    useEffect(() => {
        // paggil
        dispatch(jobList())
        
    }, [dispatch])


  
    return (
        <div className='container mt-4'>
            {/* <h3 className='pb-3'>{cari ? `Lowongan Pekerjaan yang tersedia 9/18 pekerjaan` : ''}</h3> */}
            {getListJob ? <Index items={getListJob} /> : getListJobLoading ? 'loaading' : 'Data Tidak Tersedia'}
        </div>
    );
}

export default ListJob;
