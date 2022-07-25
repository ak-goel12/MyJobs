import React from 'react';
import { Link } from 'react-router-dom';

import { HomeSection, Banner, Text, Image, MainSection, CardSection, Icons} from './styled';

//importing components
import SubCard from './Card';
import Header from '../components/Header/Header'

//importing images
import BannerImage from '../../images/Banner.png';
import Solaytic from '../../images/solaytic.png';
import Kanba from '../../images/kanba.png';
import Lighting from '../../images/lighting.png';
import Ztos from '../../images/ztos.png';
import Goldline from '../../images/goldline.png';
import Ideaa from '../../images/ideaa.png';
import Liva from '../../images/liva.png';
import Velocity from '../../images/velocity-9.png';


const HomePage = () => {
    return(
        <>
        <Header>
        <hr/>
        </Header>
        <HomeSection>
            <Banner>
                <Text>
                    <p>Welcome to My<span style={{color:'#43AFFF'}}>Jobs</span></p>
                    <Link to='/login'><button>Get Started</button></Link>
                </Text>
                <Image>
                    <img src={BannerImage} alt="BannerImage"/>
                </Image>
            </Banner>
            <MainSection>
                <h3 className='heading'>Why Us</h3>
                <CardSection>
                    <SubCard heading= {`Get More \n Visibility`} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                    <SubCard heading={`Organize Your \n Candidates`} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                    <SubCard heading={`Verify Their \n Abilities`} data='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'/>
                </CardSection>
                <h3 className='heading' style={{paddingTop:'3.5rem'}}>Companies Who Trust Us</h3>
                <Icons>
                    <img src={Solaytic} alt="solaytic"/>    
                    <img src={Kanba} alt="kanba"/>    
                    <img src={Lighting} alt="LightAI"/>    
                    <img src={Ztos} alt="ztos"/>    
                    <img src={Kanba} alt="kanba"/>    
                    <img src={Goldline} style={{marginLeft:'5rem'}} alt="goldline"/>    
                    <img src={Ideaa} alt="ideaa"/>    
                    <img src={Liva} alt="liva"/>    
                    <img src={Velocity} alt="velocity"/>    
                </Icons>
            </MainSection>
        </HomeSection>
        </>
    )
}

export default HomePage;    