import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//importing images
import MyJobs from '../../../images/MyJobs.svg';
import Down from '../../../images/down.svg';

import { MainHeader, Logo, Login, Profile, Icon, PopUp,Text, LogOut } from './styled';

const Header = ({children}) => {
    
    const navigate = useNavigate();

    const [loggedIn,setLoggedIn] = useState(false);
    const [logout,setLogOut] = useState(false);
    
    useEffect(() => {
        setLoggedIn(window.location.href.includes('jobs'));
    },[]);

    const handleLogOut = () => {
        localStorage.removeItem("token");
        navigate('/')
    }

    return(
        <>
            <MainHeader>
                <Logo>
                    <Link to='/'>
                        <img src={MyJobs} alt="MyJobs"/>
                    </Link>
                </Logo>
                { loggedIn ? 
                    <Profile><Icon><span>R</span></Icon><img src={Down} alt="Profile" onClick={() => setLogOut(true)}/></Profile>:
                    <Link to='/login'>
                        <Login>
                            Login/Signup
                        </Login>
                    </Link>
                    
                }
                {
                    logout && 
                    <LogOut>
                        <Text onClick={handleLogOut}>Logout</Text>
                    </LogOut>
                }
            </MainHeader>
            {children}
                
        </>
    )
}

export default Header;