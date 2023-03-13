import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import Card from '../card/card';

const Index = (props) => {
    const { cari, getListJobLoading, getListJobError, searchListJob, searchListJobLoading, searchListJobError } = useSelector((state) => state.JobReducer)
    const items = props.items
    console.log("casti", cari)

    function Items({ currentItems }) {
        return (
            <>
            
                {cari ? 
                currentItems &&
                    currentItems.filter(product => product.description.toLowerCase().includes(cari.desc)&&product.location.toLowerCase().includes(cari.location)&&product.type.includes(cari.type)).map((getListJob)  => (
                        <div key={getListJob.id}>
                            <Card id={getListJob.id} title={getListJob.title} type={getListJob.type} company={getListJob.company} location={getListJob.location} />
                        </div>
                    ))
                :
                currentItems &&
                currentItems.map((getListJob)  => (
                    <div key={getListJob.id}>
                        <Card id={getListJob.id} title={getListJob.title} type={getListJob.type} company={getListJob.company} location={getListJob.location} />
                    </div>
                ))
                }
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
