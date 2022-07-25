import React, { useState } from "react";

import { Main } from "./styled";

//importing images
import Next from '../../../images/Nex.svg';
import Prev from '../../../images/Prev.svg';

const Pagination = ({noOfPages,setPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    const handleClick = (type) => {
        if(type === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage-1);
            setPage(currentPage-1);
        }   
        else if(type === 'next' && currentPage < noOfPages) {
            setCurrentPage(currentPage+1);
            setPage(currentPage+1);
        } 
    }

    return(
        <Main>
            <img src={Prev} onClick={() => handleClick('prev')} alt="prev"/>
            <span style={{padding:'0.4rem'}}>{currentPage}</span>
            <img src={Next} onClick={() => handleClick('next')} alt="next"/>
        </Main>
    )
}

export default Pagination;