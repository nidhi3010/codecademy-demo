import React from 'react';

import SignUp from '../../components/sign-up /sign-up.component.jsx';
//import NavBar from '../../components/navbar/navbar.component.jsx';


import './home-page.component.jsx';
import Goal from '../../components/goal/goal.component.jsx';
import SkillPath from '../../components/skill-path/skill-path.component.jsx';
import BeginnerWelcome from '../../components/beginner-welcome/beginner-welcome.component.jsx';


const HomePage = () => (
    <div className='home-page'>
    
        <SignUp />
        <Goal />
        <SkillPath/>
        <BeginnerWelcome />
    </div>
)
export default HomePage;