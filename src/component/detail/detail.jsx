import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailJobList } from '../../redux/action/jobAction';
import {NavLink, useParams} from 'react-router-dom';
import parse from 'html-react-parser'

const DetailComponent = (props) => {
    // const [id, setId] = useState('');
    const dispatch = useDispatch()
    const {id} = useParams();
    const { detailListJob, detailListJobLoading, detailListJobError  } = useSelector((state) => state.JobReducer)
 
    useEffect(() => {
        // paggil
        dispatch(detailJobList(id))
    }, [dispatch])
    
    const desc = detailListJob.description
    const newDesc = `${desc}`
    return (
        <div>
            <div className="col-10 mx-auto my-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to='/'>Home</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to='/list'>Jobs List</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <h1>Details</h1>
                {detailListJob ? 
                    (
                        <div className="div">
                            <p>{detailListJob.title}</p>
                            {parse(newDesc)}
                        </div>
                    )
                : "loading"
                 }

            </div>
        </div>
    );
}

export default DetailComponent;
