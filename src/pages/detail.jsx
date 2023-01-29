import React from 'react';
import DetailComponent from '../component/detail/detail';
import Navbar from '../component/navbar/navbar';
import { motion } from "framer-motion"

const Detail = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 18 }}
            >
                <Navbar />
                <DetailComponent />
            </motion.div>

        </div>
    );
}

export default Detail;
