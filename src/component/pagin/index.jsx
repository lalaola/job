import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import Card from '../card/card';
import { motion } from 'framer-motion';

const Index = (props) => {
    const { getListJob, getListJobLoading, getListJobError, searchListJob, searchListJobLoading, searchListJobError } = useSelector((state) => state.JobReducer)
    const items = props.items

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((getListJob) => (
                        <div key={getListJob.id}>
                            {console.log(getListJob)}
                            <Card id={getListJob.id} title={getListJob.title} type={getListJob.type} company={getListJob.company} location={getListJob.location} />
                        </div>
                    ))}
            </>
        );
    }
    const itemsPerPage = 6
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className='pagination'
            />
        </>
    );
}

export default Index;
