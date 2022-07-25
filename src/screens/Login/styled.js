import styled from "styled-components";

export const MainSection = styled.div``;

export const SubSection1 = styled.div`
    height: 35vh;
    display: flex;
    justify-content: center;
    background-color: #303F60;
    position: relative;
`;

export const SubSection2 = styled.div`
    height: 55vh;
    background-color: #EDF6FF;
    position: relative;
`;

export const LoginBox = styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 30px 36px #557DA526;
    border-radius: 20px;
    opacity: 1;
    padding: 1%;    
    position: fixed;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 28rem;
    height: auto;
    margin-top: 5%;
    z-index: 1;
    h3 {
        margin-top: 2%;
        margin-left: 5%;
        margin-bottom: 5%;
    }
    label {
        margin-left: 5%;
        font: normal normal normal 14px/16px Helvetica Neue;
    }
    button {
        width: 6rem;
        cursor: pointer;
        height: 2rem;
        border: 1px solid var(--unnamed-color-43afff);
        background: #43AFFF 0% 0% no-repeat padding-box;
        border: 1px solid #43AFFF;
        border-radius: 5px;
        opacity: 1;
        text-align: center;
        font: normal normal medium 16px/19px Helvetica Neue;
        letter-spacing: 0px;
        color: #FFFFFF;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
    p {
        text-align: right;
        font: normal normal normal 12px/14px Helvetica Neue;
        letter-spacing: 0px;
        color: #FF0000;
        opacity: 0.8;
        padding-right: 5%;
        margin-top: -1%;
    }
`;

export const Input = styled.input`
    background: #E8E8E833 0% 0% no-repeat padding-box;
    border: ${({ error }) => (error ? '1px solid #FF333380' : '1px solid #43AFFF')};
    border-radius: 5px;
    opacity: 1;
    width: 90%;
    height: 2rem;
    margin-left: 5%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    placeholer {
        text-align: left;
        font: normal normal normal 14px/16px Helvetica Neue;
        letter-spacing: 0px;
        font-color: #303f60;
        opacity: 0.4;
    }
`;