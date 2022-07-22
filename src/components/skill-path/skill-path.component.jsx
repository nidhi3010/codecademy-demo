import React from "react";


import { useHistory } from 'react-router-dom';

import { BiRightArrowAlt } from 'react-icons/bi';

import './skill-path.styles.scss';

const SkillPath = () => {

    const history = useHistory("");

    return (
        <div className="skill-path">
            <div className="path1-2">
                <div className="path-1">
                    <p className="p1"><span>Pro</span> Skill Path</p>
                    <h3>Code Foundations</h3>
                    <li><p className="p2">Beginner friendly,<b>15</b>Lessons</p></li>
                    <span className="s1">Welcome Series</span>
                </div>

                <div className="path-2">
                    <p className="p3"><span>Pro</span> Skill Path</p>
                    <h3>Analyze Data with Python</h3>
                    <li><p className="p4">Beginner friendly,<b>28</b>Lessons</p></li>
                    <span className="s2">With Final Project</span>
                </div>
            </div>


            <div className="path3-4">
                <div className="path-3">
                    <p className="p5"><span>Pro</span> Skill Path</p>
                    <h3>Build a Website with HTML, CSS, and Github Pages</h3>
                    <li><p className="p6">Beginner friendly,<b>18</b>Lessons</p></li>
                    <span className="s3">With Final Project</span>
                </div>

                <div className="path-4">
                    <p className="p7"><span>Pro</span> Skill Path</p>
                    <h3>Analyze Data with SQL</h3>
                    <li><p className="p8">Beginner friendly,<b>15</b>Lessons</p></li>
                    <span className="s4">With Final Project</span>
                </div>
            </div>
            <div className='catalog-btn' onClick={() => history.push("/")}>Browse Catalog<BiRightArrowAlt className="arrow" /></div>


        </div>
    )
}

export default SkillPath;