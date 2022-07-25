import React from "react";

import "./Modal.css";
import { CardSection,Card,Icon, Profile, Title, Name, Email, Skills } from "./styled";
import Curriculum from '../../../images/curriculum.svg';

const Modal = ({ setOpenModal,applicants }) => {
  console.log(applicants)
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <span >
            Applicants for this job
          </span>
          <button onClick={() => setOpenModal(false)}
          >
            X
          </button>
        </div>
        <div className="boundary"><hr></hr></div>
        <div className="applicants-title">
          <span>
            {applicants.length > 0 ? `Total ${applicants.length} applications`: `${applicants.length} applications`}
          </span>
        </div>
        <div className="applicants-container">
          {
            applicants.length === 0 ?
            <>
                <img src={Curriculum} alt="No applications available" style={{opacity:'1'}}/> 
                <center><p>No applications available</p></center>
            </> : 
            <CardSection> 
            {applicants.map((data,index) => 
              
              <Card>
              <Profile><Icon><span>{data.name[0].toUpperCase()}</span></Icon><Title><Name>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Name><Email>{data.email}</Email></Title></Profile>
              <h4>Skills</h4>
              <div style={{display:'flex',paddingRight:'1rem'}}><Skills>{data.skills}</Skills></div>
              </Card> 
            )
 }             </CardSection>
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
