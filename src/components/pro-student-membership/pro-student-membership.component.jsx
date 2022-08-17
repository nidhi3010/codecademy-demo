import React from "react";
import './pro-student-membership.styles.scss';

const ProStudentMembership = () => (
    <div className="prostudent-membership">
        <h2>Codecademy Pro Student membership</h2>
        <p>With student pricing on Codecademy Pro, eligible college students can get<br />complete access to our interactive curriculum for <b>more than 35% off the<br />regular price.</b> Study, practice, and apply the coding skills you need to build the<br />future you want.</p>
        <a className="freetrial-btn" href="#">Start a free trial</a>

        <div className="membership-fetures">
            <div className="step">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/R1t9dvVtkvUgmJl7FjJwL/0dfaefa7d09d7acded88c32aae474e42/roadmap-16bb65e3ee658ec94a50252a92e78e22__1_.svg" />
                <h3>Step-by-step guidance</h3>
                <p>Pro includes Career Paths and Skill Paths that tell you what to learn and in what order.<br />So you won't waste time learning the wrong thing.</p>
            </div>
            <div className="retention">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/2xu00jdYOIpaVqTeFtdgQh/bb2e7b4481ee4bed8c95fa2e61b1c211/growth-7c7b03f7d2faffcfcf04628f5d3dba19__1_.svg" />
                <h3>Better knowledge retention</h3>
                <p>Our lessons are designed to work in tandem with Pro's practice packs and quizzes.<br /> Which means you'll actually remember what you've learned.</p>
            </div>
            <div className="real-world">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/VLuG0Hb3OfZ9VRkeL037A/a05e513b36e231e02545f64efae16dde/experience-3b3e97304c92896d707057356095afe9__1_.svg" />
                <h3>Real-world experience</h3>
                <p>Getting things wrong is an important part of learning. That's why Pro has unique<br />projects that let you try on your own, then explain where you made a mistake.</p>
            </div>
            <div className="unlimited-access">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/nFSZ6cZBDoBl47nPZHvYA/16cdd2f3b1fe4f2a20fb9be9b1a14eb3/certified-diploma-ab20237eb37395b03dc583817bebe7ab.svg" />
                <h3>Unlimited access to everything</h3>
                <p>With Pro, you can make use of our entire catalog of curriculum and content. Plus earn<br />certificates of completion for each course you finish.</p>
            </div>
        </div>
    </div>
)
export default ProStudentMembership;