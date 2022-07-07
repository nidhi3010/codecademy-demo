import React from "react";

import './goal.styles.scss';

const Goal = () => (

    <div className="goal">
        <h2>What's your goal?</h2>
        <div className="goal-option">
            <div className="g-1">
                <h3>Gain a skill</h3>
                <p>Skill Paths focus on what's needed to pick up a specific, applicable skill.</p>
            </div>
            <div className="g-2">
                <h3>Learn a language</h3>
            </div>
            <div className="g-3">
                <h3>Explore a subject</h3>
            </div>
        </div>
    </div>
)

export default Goal;
