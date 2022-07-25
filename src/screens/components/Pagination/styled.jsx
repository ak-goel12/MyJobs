import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: center; 
    margin-top: 2rem;
    padding-bottom: 2rem;
    gap: 0.4%;
    span {
        width: 1.1rem;
        height: 1.1rem; 
        font: normal normal bold 13px/16px Helvetica Neue;
        color: #303F60;
        text-align: center;
        background: #43AFFF33 0% 0% no-repeat padding-box;
        border-radius: 5px;
    }
    img {
        cursor: pointer;
    }
`;