import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../asset/logo.png'
import { MenuApp } from 'react-bootstrap-icons';



const Navbar = () => {
    const { getLogin } = useSelector((state) => state.JobReducer)
    const [toggle, setToggle] = useState(false);

    console.log(toggle)
    const handleToggle = () => {
        setToggle(
            toggle ? false : true
        )
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
                <div className="col-10 mx-3 d-flex align-items-center justify-content-between mx-auto">
                    <NavLink to='/' className="navbar-brand col-lg-2" href="#">
                        <img src={logo} alt="" className="img-fluid" />
                    </NavLink>
                    <div className="toggle">
                        <button className="btn btn-yellow" onClick={handleToggle}>
                        <MenuApp />
                        </button>
                    </div>
                    <div style={toggle ? { right: '0' } : { right: '-25rem' }} className="sidebar">
                        <NavLink to='/list' className="nav-link active text-white pb-3" aria-current="page" href="/">Lowongan Kerja</NavLink>
                        {getLogin ? <a className="nav-link" href="#">Hai. olla</a>
                            : ''}
                        <NavLink to='/login' className="btn btn-dark" href="#">{
                            getLogin ? 'Logout' : 'Login'
                        }</NavLink>     
                    </div>
                    <div className="collapse  navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex justify-content-end col-12">
                            <NavLink to='/list' className="nav-link active" aria-current="page" href="/">Lowongan Kerja</NavLink>
                            {getLogin ? <a className="nav-link" href="#">Hai. olla</a>
                                : ''}
                            <NavLink to='/login' className="btn btn-yellow" href="#">{
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
