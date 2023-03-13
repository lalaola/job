import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rute from './rute';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'

const Index = () => {
    return (
        <BrowserRouter>
          <Rute/>
        </BrowserRouter>
    );
}

export default Index;
