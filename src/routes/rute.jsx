import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages';
import Detail from '../pages/detail';
import Job from '../pages/job';
import Login from '../pages/login';

const Rute = () => {
    return (
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/home" element={<Index/>}/>
            <Route path="/list" element={<Job/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
    );
}

export default Rute;
