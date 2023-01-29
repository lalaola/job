import React from 'react';
import Navbar from '../component/navbar/navbar';
import Homepage from '../component/homepage/homepage';

const Index = () => {
    return (
        <div className='home'>
            {/* <JobSearch/> */}
            <Navbar/>
            <Homepage/>
            
        </div>
    );
}

export default Index;
