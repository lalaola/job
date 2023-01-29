import React, { useState } from 'react';
import Form from '../component/card/form';
import FormRegis from '../component/card/formRegis';
import LoginKontent from '../component/login/login';
import Regis from '../component/login/regis';
import img from '../asset/job.png'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Loading from '../component/loading';
import { motion } from "framer-motion"


const Login = () => {
    const [login, setLogin] = useState(true);
    const handleSign = () => {
        login ? setLogin(false) : setLogin(true)
    }
    const { getLogin, getLoginLoading } = useSelector((state) => state.JobReducer)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 18 }}
        >
            <div className='d-flex justify-content-center wrap-login' >
                {getLogin ? <Navigate to='/list' /> : getLoginLoading ? <Loading /> : ''}
                <div className="login  col-md-8 d-flex ">
                    <div className="col-md-6 col-sm-10 d-flex align-items-center">
                        <div className="col-10 mx-auto d-flex flex-column">
                            {login ? <LoginKontent /> : <Regis />}
                            <div className="d-flex align-items-center mx-auto mt-3">
                                {login ? 'Dont Have Account' : 'Go to'}
                                <button onClick={handleSign} className=" btn-regis">{login ? 'Sign-Up' : 'Sign-in'}</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 gambar  align-items-center">
                        <div className="col-10 mx-auto d-flex flex-column text-center text-white">
                            <div className="col-10 mx-auto  mb-3">
                                <img src={img} alt="job" className="img-fluid rounded" />
                            </div>
                            <h3>Meet Job with easly</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eveniet temporibus recusandae hic? Animi amet modi quibusdam explicabo dicta</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>


    );
}

export default Login;
