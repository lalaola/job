import React from 'react';
import JobSearch from '../component/cari/jobSearch';
import ListJob from '../component/job/listJob';
import Navbar from '../component/navbar/navbar';
import { motion } from "framer-motion"

const Job = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 18 }}
            >
                <Navbar />
                <JobSearch />
                <ListJob />
            </motion.div>

        </div>
    );
}

export default Job;
