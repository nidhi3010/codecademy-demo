import React from "react";

import './beginner-welcome.styles.scss';

const BeginnerWelcome = () => (

    <div className="beginner-welcome">
        <div className="content">
            <span>Beginners welcome</span>
            <h2>Start coding in <br />seconds</h2>
            <p>Go ahead, give it a try. Our hands-on learning<br /> environment means you'll be writing real code from your<br /> very first lesson.</p>
            <div className="lesson-course">
                <a className="continue-lesson" href="#" >Continue Lesson</a>
                <a className="beginner-course" href="#">More Beginner Courses</a>
            </div>
        </div>


    </div>
)
export default BeginnerWelcome;