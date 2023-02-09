import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../asset/logo.png'
import { MenuApp } from 'react-bootstrap-icons';



const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState(false)
    const navigate = useNavigate()
    const handleToggle = () => {
        setToggle(
            toggle ? false : true
        )
    }
    const handleLogout = () => {
        const auth = getAuth();
        if(user){
            signOut(auth).then(() => {
                localStorage.clear()
                navigate('/')
            }).catch((error) => {
            });
        }else{
            navigate('/login')
        }
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, []);
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
                        {user ? <a className="nav-link" href="#">Hai. olla</a>
                            : ''}
                        <a onClick={handleLogout} className="btn btn-dark" href="#">{
                            user ? 'Logout' : 'Login'
                        }</a>
                    </div>
                    <div className="collapse  navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex justify-content-end col-12">
                            <NavLink to='/list' className="nav-link active" aria-current="page" href="/">Lowongan Kerja</NavLink>
                            {user ? <a className="nav-link" href="#">{user.displayName}</a>
                                : ''}
                            <a onClick={handleLogout} className="btn btn-yellow" href="#">{
                                user ? 'Logout' : 'Login'
                            }</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
