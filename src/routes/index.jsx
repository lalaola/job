import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rute from './rute';
import 'bootstrap/dist/css/bootstrap.min.css'
import {motion} from 'framer-motion'

const Index = () => {
    return (
        <BrowserRouter>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 18 }}
            >
                <Rute />
            </motion.div>
        </BrowserRouter>
    );
}

export default Index;
