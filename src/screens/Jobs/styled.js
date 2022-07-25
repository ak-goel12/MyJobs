import styled from "styled-components";

export const MainSection = styled.div``;

export const SubSection1 = styled.div`
    height: 22vh;
    background-color: #303F60;
    padding-left: 9rem;
    padding-top: 0.1%;
    h2{
         letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    span{
        font: normal normal medium Helvetica Neue;
        font-size: 12px;        
        letter-spacing: 0px;
        color: #FFFFFF;
        padding: 0.3rem;
        opacity: 0.8;
    }
    p {
        cursor: pointer;
    }
`;

export const SubSection2 = styled.div`
    height: 100%;
    min-height: 68vH;
    background-color: #EDF6FF;
`;

export const Openings = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 3rem;
    padding-left: 9rem;
    padding-right: 9rem;
`;

export const Card = styled.div`
    width: 13.1rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #557DA526;
    border-radius: 5px;
    opacity: 1;
    padding-left: 1.2rem;
    z-index: 1;
    margin-top: -3%;
`;

export const Heading = styled.p`
    text-align: left;
    font: normal normal 20px Helvetica Neue;
    letter-spacing: 0px;
    color: #303F60;
    sopacity: 1;
`;

export const Description = styled.p`
    text-align: left;
    font: normal normal normal 14px/16px Helvetica Neue;
    letter-spacing: 0px;
    color: #303F60;
    opacity: 0.8;
`;
    
export const Footer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding-bottom: 0.5rem;
`;

export const Location = styled.div`
    display: flex;
    flex-direction: column nowrap;
    flex: 1 1;
    gap: 0.2rem;        
    align-items: center;
    p{
        font: normal normal normal 14px/16px Helvetica Neue;
        letter-spacing: 0px;
        color: #303F60;
        opacity: 0.8;
        padding-top: - 1%;   
    }
`;

export const Application = styled.div`
    display: flex;
    align-self: center;
    button{
        border: none;
        background: #43AFFF33 0% 0% no-repeat padding-box;
        border-radius: 5px;
        cursor: pointer;
        font: normal normal normal 12px Helvetica Neue;
        letter-spacing: 0px;
        col or: #303F60;
        text-transform: capitalize;
        opacity: 1;
        padding-top:0.5rem;
        padding-bottom:0.5rem;
    }
    padding-right: 0.5rem;
`;