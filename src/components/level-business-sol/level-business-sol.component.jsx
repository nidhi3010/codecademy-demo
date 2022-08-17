import React from "react";
import './level-business-sol.styles.scss';

const Level = () => (
  <div className="level">
    <img src="https://images.ctfassets.net/go6kr6r0ykrq/3wGbhSHrOnSK8s8cXkiVLS/1f1a6c08a4cce48c8d3080833da826f9/hexagon.svg" />
    <div className="level-detail">
      <p className="logo">Code_Cademy</p>
      <p className="skillsoft">from skillsoft</p>
      <h1>Level up and level <br />set your team's skills </h1>
      <p>Thousands of companies and millions of learners have advanced their<br /> technical skills with Codecademy. Make your team next.</p>
      <ul>
        <li>Reduce onboarding time by up to 50%</li>
        <li>Retain your employees for up to 13 months longer</li>
      </ul>
     <a className="contactus" href="#">Contact us </a>
     <a className="free-trial" href="#">Start free trial</a>
     <div className="logos">
     <img src="https://images.ctfassets.net/go6kr6r0ykrq/1L6zeEEcvkVXW9uJ9uH3Yr/7196b6a2b7040af6ab6893253eab35bf/logos.svg"/>
     </div>
     </div>

     <div className="team-illu-img">
       <img src="https://images.ctfassets.net/go6kr6r0ykrq/5YI2UToXwszRhkJunVXfFo/99577cd726cb3cdd82a0474fb2704cd9/teams-illustration.svg"/>
     </div>
  </div>
)
export default Level;