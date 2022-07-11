import React from "react";

import './start-for-free.styles.scss';

const StartForFree = () => (

    <div className="start-for-free">
        <div className="image">
            <img src="https://www.codecademy.com/webpack/ddf8093de30c567fdb0de6e275fc21c9.png" />
        </div>
        <div className="detail-for-start">
           <h3>Start for free</h3>
           <p>If you've made it this far, you must be at least<br/> a little curious. Sign up and take the first step <br/>toward your goals.</p>
           <a href="#">Sign Up</a>
        </div>
    </div>
)

export default StartForFree;