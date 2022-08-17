import React from "react";

import './skill-you-need.styles.scss';

const SkillYouNeed = () => (
    <div className="skill-need">
        <h2> Build the skills you need</h2>
        <p>Created by industry experts, our course catalog covers all of the most sought-<br />after technical skills and languages (like Python, React, and SQL).</p>
        <div className="diff-skills">
            <div className="com-sci">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/6KVu08ASZW6omabCiW1JGV/83bd90aaa955bfe5474d3e66bcb8fcb2/Computer_science.jpg" />
                <h3>Computer science</h3>
                <p>Improve your onboarding to bring new  <br />team members up to speed quicker</p>
                <a href="/seecourses" target="_blank">See courses</a>
            </div>
            <div className="data-sci">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/3YTYsmVWz0ylEcDeE1VHEQ/2b5fa015b1e00b227e3e5c32e727d5e2/Data_science_and_analytics.jpg" />
                <h3>Data science</h3>
                <p>Develop the skills needed to make better<br />data-driven business decisions</p>
                <a href="/seecourses" target="_blank">See courses</a>
            </div>
            <div className="web-deve">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/25ECEOVD4R1wtQ1GT6fXYs/f179043277037aae347c1a5e41de6774/Web_development.jpg" />
                <h3>Web development</h3>
                <p>Empower teams to build and manage<br />websites and web applications</p>
                <a href="/seecourses" target="_blank">See courses</a>
            </div>
            <div className="code-found">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/6l1MMdM0A2Dm1kYyR9AZ2X/c8e8c0fb1ee84670725e7205cded93df/Code_foundations.jpg" />
                <h3>Code foundations</h3>
                <p>Create a technical baseline and scale<br />digital literacy for your company</p>
                <a href="/seecourses" target="_blank">See courses</a>
            </div>
        </div>
    </div>
)
export default SkillYouNeed;