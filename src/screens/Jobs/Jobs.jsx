import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import components
import { MainSection, SubSection1, SubSection2, Openings, Card, Heading, Description, Location, Footer, Application } from "./styled";
import Pagination from "../components/Pagination/pagination";
import Header from "../components/Header/Header";
import Modal from "../components/Modal/Modal";

import useFetchJobs from './fetchJobs';
import { fetchApplicant } from "../api/fetchApplicant";

//importing images.
import Home from '../../images/home.svg';
import Map from '../../images/location.svg';

const Jobs = () => {
    const [ page, setPage] = useState(1);

    const [modalOpen, setModalOpen] = useState(false);
    console.log(modalOpen)
    const handleSetPage = (no) => setPage(no);
    
    const [jobs,count,limit] = useFetchJobs(page);

    const [applicants,setApplicants] = useState([]);

    const handleApplicants = (id) => {
        try{
            fetchApplicant(id).then((data) => { 
                setApplicants(data);
                setModalOpen(true);
            });
          }
          catch(err) {
              console.log(err);
          }
    }

    return(
        <>
        <Header>
            <hr/>
        </Header>
        <MainSection>
            <SubSection1>
                <Link to= "/jobs"><p><img src={Home} alt="home"></img><span>Home</span></p></Link>
                <h2>Jobs posted by you</h2>
            </SubSection1>
            <SubSection2>   
                <Openings>
                    {
                        jobs && jobs.map((job,index) => 
                        <Card>
                                <Heading><b>{job.title}</b></Heading>
                                <Description>{job.description}</Description>
                                <Footer>
                                    <Location>
                                        <img src={Map} alt="Location"/>
                                        <p>{job.location}</p>                                
                                    </Location>
                                    <Application>
                                        <button onClick={() => handleApplicants(job.id)}>View Applications</button>
                                    </Application>
                                </Footer>
                            </Card>
                        )
                    }
                    {modalOpen && <Modal setOpenModal={setModalOpen} applicants={applicants}/>} 
                </Openings>
                {count > 0 && <Pagination noOfPages={count/limit} setPage={handleSetPage}/>}
            </SubSection2>  
        </MainSection>
        </>
    )
}

export default Jobs;