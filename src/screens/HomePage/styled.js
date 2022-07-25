import styled from "styled-components";

export const HomeSection = styled.div``;

export const Banner = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    background-color: #303F60;
`;

export const Text = styled.div`
    margin-left: 11rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    p {
        font: 3.3rem Roboto;
        text-align: left;
        letter-spacing: 0px;
        opacity: 1;
        color: #fff;
        margin-bottom:2.5rem;
    }
    button {
        border: 1px solid #43AFFF;
        border-radius: 5px;
        background: #43AFFF 0% 0% no-repeat padding-box;    
        height: 2.5rem;
        width: 8rem;
        font: normal normal bold 1rem Helvetica Neue;
        letter-spacing: 0px;
        color: #FFFFFF;
        cursor: pointer;
    }
`;

export const Image = styled.div`
    img{
        position: absolute;
        margin-left: 3rem;
        width: 40rem;
        height: 26rem;
        margin-top: 1rem;
    }
`;

export const MainSection = styled.div`
    background-color: #43AFFF33;
    .heading {
        color: #303F60;
        margin: 0;
        padding-top: 6rem;
    }
    padding-left: 11rem;
    bottom: 0;
`;

export const CardSection = styled.div`
    display: flex;
    gap: 4rem;
    margin-top: 2rem;
`;

export const Card = styled.div`
    width: 18rem;
    min-height: 10rem;
    border-radius: 5px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    p {
        margin-top: 1.5rem;
        margin-left: 1.2rem;
        color: #303F60;
        font: normal normal normal 14px/20px Helvetica Neue;
    }
`;

export const Heading = styled.h3`
    color: #43AFFF;
    margin-top: 1.5rem;
    margin-left: 1.2rem;
    white-space: pre-line;
`;

export const Icons = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 1rem;
    gap: 1rem 4rem;
    align-items: center;
`;