import styled from "styled-components";

export const CardSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
    margin-bottom: 0.5rem;
    padding-left: 0.5rem; 
    padding-top: 0.5rem;
    gap: 4%;
    max-width: 100%;
`;

export const Card = styled.div`
  width: 47%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #303F6080;
  border-radius: 5px;
  margin-bottom: 1rem;
  opacity: 1;
  h4 {
    color: black;
    padding-left: 1rem;
    margin-bottom: 0.2rem;
  }  
`;

export const Profile = styled.div`
    display: flex;
    padding-left: 1rem;   
    img {
        height: 0.7rem;
        width: 1rem;
        align-self: center;
        padding-left:0.3rem;
        cursor: pointer;
    }  
    position: relative;
`;

export const Icon = styled.div`
    background: #D9EFFF 0% 0% no-repeat padding-box;
    border-radius: 50%;
    width: 50%;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    
    span {
        font: normal normal normal 18px/22px Helvetica Neue;
        letter-spacing: 0px;
        color: #303F60;
        opacity: 0.8;
    }
`; 

export const Title = styled.div`
    justify-content: center;
    display: flex;
    width: 70%;
    flex-flow: column wrap;
    padding-left: 1rem;
`;

export const Name = styled.span`
    text-align: left;
    font: normal normal bold 15px/18px Helvetica Neue;
    letter-spacing: 0px;
    color: black;
    word-break: break-all;
    opacity: 1;
`;

export const Email = styled.span`
    text-align: left;
    padding-right: 1rem;
    font: normal normal 15px/18px Helvetica Neue;
    letter-spacing: 0px;
    word-break: break-all;
    color: black;
    opacity: 0.8;
`;

export const Skills = styled.span`
    padding-left: 1rem;
    margin-bottom: 1rem;
    word-break: break-all;
    text-align: left;
    opacity: 0.8;
    font: normal normal normal 15px/18px Helvetica Neue;
    letter-spacing: 0px;
    color: #303F60;
`;
