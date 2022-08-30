import React from "react";
import LanguageAccordion from "../../components/language-accordion/language-accordion.component";
import StaffPicks from "../../components/staff-picks/staff-picks.component";
import SubjectAccordion from "../../components/subject-accordion/subject-accordion.component";
import './resource-project-page.styles.scss';

const ResourceProjectPage = () => (
    <div className="resource-project-page">
        <LanguageAccordion />
        <SubjectAccordion />
        <div className="projects">
            <div className="pro-exclusive">
                <p className="pe1"><span>Pro</span> exclusive</p>
                <p className="unlock">Unlock full access </p>
                <a className="join-pro" href="#">Join Pro</a>
            </div>
            <h1>Projects</h1>
            <p className="h1p1">Projects let you apply what you're learning. Practice new skills, connect<br />concepts, or put it all together to create something of your own.</p>

            <StaffPicks />

            <div className="most-popular">
                <h2>Most popular</h2>
                <div className="popular-cards">
                    <div className="pc1">
                        <p className="pc1-p1">Practice Project</p>
                        <h3>Kelvin Weather</h3>
                        <p className="pc1-p2">Web Development • JavaScript</p>
                        <p className="pc1-p3">It's time to build fluency in JavaScript<br />fundamentals. In this next Pro Project,<br />we're going to practice variables and...</p>
                        <p className="pc1-p4">More guidance, 39 min</p>
                    </div>
                    <div className="pc2">
                        <p className="pc2-p1">Practice Project</p>
                        <h3>Receipts for Lovely<br />Loveseats</h3>
                        <p className="pc2-p2">Data Science • Math • Python</p>
                        <p className="pc2-p3">Keep receipts for your lovely loveseats.<br />Programming is a treat with this sweet<br />suite of feats! Use strings and numbers...</p>
                        <p className="pc2-p4">More guidance, 50 min</p>
                    </div>
                    <div className="pc3">
                        <p className="pc3-p1">Practice Project</p>
                        <h3>Wine Festival Schedule</h3>
                        <p className="pc3-p2">HTML & CSS • Web Development • Web<br />Design</p>
                        <p className="pc3-p3">It's time to build fluency in HTML<br />Tables. In this next Pro Project, we're<br />going to practice tabular organization...</p>
                        <p className="pc3-p4">More guidance, 33 min</p>
                    </div>
                </div>
            </div>

            <div className="get">
                <h2>Get inspired</h2>
                <div className="g-parts">
                    <div className="g1">
                        <img src="https://images.ctfassets.net/go6kr6r0ykrq/3SoNoVh00vAY9mDj1XYin9/0d698bb7f83518a3e86778a2aa0fc00f/Which-Type-of-Project-is-Right-for-Me-.png" />
                        <p>Blog</p>
                        <h3>Which Type of Project is<br />Right for Me?</h3>
                    </div>
                    <div className="g2">
                        <img src="https://images.ctfassets.net/go6kr6r0ykrq/3Fi2ifKGxv4syuBLp7LLG5/54246930d468811ec2a40f820db0c766/6-Inspiring-Projects-From-the-Codecademy-Community-1.png" />
                        <p>Blog</p>
                        <h3>6 Inspiring Projects From<br />the Codecademy<br />Community</h3>
                    </div>
                    <div className="g3">
                        <img src="https://images.ctfassets.net/go6kr6r0ykrq/7vNQFUo8mAPWmG8GVoXxMS/e5fbb1dac84eabebe699878b4a0238a6/technical-portfolio-tips.png" />
                        <p>Blog</p>
                        <h3>Technical portfolio guide:<br />What to include in your<br />portfolio</h3>
                    </div>
                </div>
            </div>

        </div>

    </div>
)
export default ResourceProjectPage;