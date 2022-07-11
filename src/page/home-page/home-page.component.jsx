import React from 'react';

import SignUp from '../../components/sign-up /sign-up.component.jsx';
//import NavBar from '../../components/navbar/navbar.component.jsx';


import './home-page.component.jsx';
import Goal from '../../components/goal/goal.component.jsx';
import SkillPath from '../../components/skill-path/skill-path.component.jsx';
import BeginnerWelcome from '../../components/beginner-welcome/beginner-welcome.component.jsx';
import CodeDrawer from '../../components/code-drawer/code-drawer.component.jsx';
import Quiz from '../../components/quiz/quiz.component.jsx';
import StoriesPeople from '../../components/stories-people/stories-people.component.jsx';
import JoinIn from '../../components/join-in/join-in.component.jsx';
import TeamSkill from '../../components/team-skill/team-skill.component.jsx';
import StartForFree from '../../components/start-for-free/start-for-free.component.jsx';


const HomePage = () => (
    <div className='home-page'>

        <SignUp />
        <Goal />
        <SkillPath />
        <CodeDrawer />
        <BeginnerWelcome />
        <Quiz />
        <StoriesPeople />
        <JoinIn />
        <TeamSkill />
        <StartForFree />
    </div>
)
export default HomePage;