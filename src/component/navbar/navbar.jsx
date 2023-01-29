import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/logo.png'

const Navbar = () => {
    const dispatch = useDispatch()
    const { getLogin } = useSelector((state) => state.JobReducer)


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
                <div className="col-10 mx-3 d-flex align-items-center justify-content-between mx-auto">
                    <NavLink to='/' className="navbar-brand col-2" href="#">
                        <img src={logo} alt="" className="img-fluid" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex justify-content-end col-12">
                            <NavLink to='/list' className="nav-link active" aria-current="page" href="/">Lowongan Kerja</NavLink>
                            {getLogin ? <a className="nav-link" href="#">Hai. olla</a>
                                : ''}
                            <NavLink to='/login' className="btn" href="#">{
                                getLogin ? 'Logout' : 'Login'
                            }</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
