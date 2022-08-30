import React from "react";
import './staff-picks.styles.scss';

const StaffPicks = () => (
    <div className="staff-picks">
        <h2>Staff picks</h2>
        <div className="portfolio">
            <div className="pf1">
                <p className="pf1-p1">Portfolio Project</p>
                <h3>Biodiversity in National<br />Parks</h3>
                <p className="pf1-p2">Python • Data Visualization • Data<br />Science • Data Analytics</p>
                <p className="pf1-p3">Analyze and interpret data from the<br />National Parks Service on the status of<br />endangered species in some of the...</p>
                <p className="pf1-p4">Independent, 20<br />hrs</p>
                <p className="pfb1">Portfolio Ready</p>
            </div>
            <div className="pf2">
                <p className="pf2-p1">Practice Project</p>
                <h3>Honey Production</h3>
                <p className="pf2-p2">Data Science • Machine Learning •<br />Python</p>
                <p className="pf2-p3">Fit a line to data about the honeybee<br />population decline in the United States.</p>
                <p className="pf2-p4">More guidance, 42 min</p>
            </div>
            <div className="pf3">
                <p className="pf3-p1">Portfolio Project</p>
                <h3>Portfolio Website</h3>
                <p className="pf3-p2">HTML & CSS • JavaScript • Web<br />Development • Developer Tools</p>
                <p className="pf3-p3">Build your own portfolio website to<br />showcase the projects that you make<br />on Codecademy!</p>
                <p className="pf3-p4">Independent, 5 hrs</p>
                <p className="pfb3">Portfolio Ready</p>
            </div>
            <div className="pf4">
                <p className="pf4-p1">Practice Project</p>
                <h3>Codey's Counting<br />Conundrum</h3>
                <p className="pf4-p2">Web Development • Game<br />Development • JavaScript</p>
                <p className="pf4-p3">Create a game that includes scene<br />transitions, animations, and tweens! </p>
                <p className="pf4-p4">More guidance, 60 min</p>
            </div>
            <div className="pf5">
                <p className="pf5-p1">Practice Project</p>
                <h3>2D Arrays: Image<br />Manipulation Project</h3>
                <p className="pf5-p2">Computer Science • Java</p>
                <p className="pf5-p3">This project uses your knowledge of 2D<br />arrays to create an image processing<br />application.</p>
                <p className="pf5-p4">More guidance, 120 min</p>
            </div>
            <div className="pf6">
                <p className="pf6-p1">Portfolio Project</p>
                <h3>Recommendation<br />Software Project</h3>
                <p className="pf6-p2">Code Foundations • Computer Science<br />• Python</p>
                <p className="pf6-p3">In this project, you'll use your<br />understanding of data structures and<br />algorithms (specifically searching...</p>
                <p className="pf6-p4">Independent, 5 hrs</p>
                <p className="pfb6">Portfolio Ready</p>
            </div>
        </div>
    </div>
)
export default StaffPicks;