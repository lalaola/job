import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from '../loading';
import { searchJobList } from '../../redux/action/jobAction';
import hero from '../../asset/hero.jpg'
import { motion } from "framer-motion"

const Homepage = () => {
    const dispatch = useDispatch()
    const [description, setDescription] = useState('');
    const { searchListJob, searchListJobLoading, searchListJobError } = useSelector((state) => state.JobReducer)

    const handleSubmit = () => {
        dispatch(searchJobList({ description: description, location: '', type: '' }))
    }

    return (
        <div className="col-md-10 mx-auto konten-hero animate__lightSpeedInLeft">
            {
                searchListJob ? <Navigate to='/list' /> : searchListJobLoading ? <Loading /> : searchListJobError ? <Navigate to='/list' />  : ''
            }
            <div className="row ">

                <div className=' p-4 col-md-6  d-flex  flex-column justify-content-center '>
                    <motion.div
                        initial={{x: -1000}}
                        animate={{x: 0 }}
                        transition={{delay:0.2, type:'spring', stiffness:35}}
                    >
                        <h1>Your dream job is just a click away</h1>
                        <h5 className=''>The simplest way to career opportunities starts here</h5>
                        <div className="search d-flex mt-3">
                            <input
                                onChange={((e) => {
                                    setDescription(e.target.value)
                                })}
                                value={description}
                                className="form-control" type="text" aria-label="readonly input example" placeholder='Lowongan apa yang anda cari ?' />
                            <a onClick={handleSubmit} className="btn btn-yellow ms-2">Seacrh</a>
                        </div>
                    </motion.div>

                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-end">
                    <div className="col-10 img-wrap">
                        <img src={hero} alt="hero" className="img-fluid" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Homepage;
