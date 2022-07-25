import styled from 'styled-components';

export const MainHeader = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #303F60;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`;

export const Logo = styled.div`
    img {
        height: 1.6rem;
        width: 5.1rem;
        margin-left: 3.8rem;
        margin-top: 1.1rem;
        margin-bottom: 1.1rem;      
    }
`;

export const Login = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #43AFFF;
    border-radius: 5px;
    background-color: #43AFFF33;
    height: 2.8rem;
    width: 9.2rem;
    color: white;
    font-size: 1rem;
    white-space: nowrap;
    opacity: 1;
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
    margin-right: 3.8rem;   
    cursor: pointer;
`;

export const Profile = styled.div`
    display: flex;  
    justify-content: center;
    img {
        height: 0.7rem;
        width: 1rem;
        align-self: center;
        padding-left:0.3rem;
        cursor: pointer;
    }  
    margin-right: 3.6rem;
    position: relative;
`;

export const Icon = styled.div`
    background: #D9EFFF 0% 0% no-repeat padding-box;
    border-radius: 50%;
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

export const LogOut = styled.div`
    width: 6rem;
    height: 2rem;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1; 
    position: absolute;
    margin-right:3.6px;
    display: flex;
    justify-content: flex-start;    
    cursor: pointer;
    margin-top: 3.4rem;
    margin-left: 88.2%;
`;

export const Text = styled.span`
    padding: 0.5rem;
    font: normal normal normal 14px/16px Helvetica Neue;
    letter-spacing: 0px;
    color: #303F60;
    opacity: 1;
`;