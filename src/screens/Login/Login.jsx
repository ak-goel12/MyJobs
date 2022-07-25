import React ,{ useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MainSection, SubSection1, SubSection2, LoginBox, Input} from './styled';
import Header from '../components/Header/Header';
import { login } from '../api/login';

const Login = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    
    const [error,setError] = useState(false);
    
    const handleSubmit = () => {
        try {
            login(email,password)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("loggedIn", true);
                console.log(res.data)
                navigate('/jobs')
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })  
        } catch(err) {
             console.log(err);
             setError(true);
        }
    }

    return(
        <>
        <Header>
            <hr/>
        </Header>
        <MainSection>
            <SubSection1>
                <LoginBox>
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="emailId"><b>Email address</b></label>
                        <Input type="text" id="emailId" placeholder='Enter your email' error={error} onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="password"><b>Password</b></label>
                        <Input type="password" id="password" placeholder='Enter your password' error={error} onChange={(e) => setPassword(e.target.value)}/>
                        {error && <p>Incorrect email address or password</p>}
                        <center><button type="submit" disabled={ email === '' || password === ''}>Login</button></center>
                    </form>
                </LoginBox>
            </SubSection1>
            <SubSection2/>
        </MainSection>
        </>
    )
}

export default Login;