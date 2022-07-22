import React from "react";
import './note-worthy.styles.scss';

const NoteWorthy = () => (
    <div className="note-worthy">
        <h2 className="heading">New + noteworthy</h2>
        <div className="note">
            <div className="pro-student">
                <h3>Pro Student</h3>
                <p>Students can join <br /> Pro for 35% less</p>
            </div>
            <div className="pro-detail">
                <p>
                    With new Codecademy Pro Student memberships,<br />
                    eligible college students can get all the benefits of<br />
                    Pro for more than 35% off the regular price. Study,<br />
                    practice, and apply the coding skills you need to <br />
                    develop your own future.
                </p>
            </div>
        </div>

        <div className="course-card">
            <div className="card-1">
                <p className="c1">Course</p>
                <h3>Learn Tableau for Data<br/>Visualization</h3>
                <li><p className="c2">Beginner friendly,<b>2</b>Lessons</p></li>
            </div>

            <div className="card-2">
                <p className="c3">Course</p>
                <h3>Learn Microsoft Excel for<br/> Data Analysis</h3>
                <li><p className="c4">Beginner friendly,<b>4</b>Lessons</p></li>
            </div>

            <div className="card-3">
                <p className="c5"><span>Pro</span>Course</p>
                <h3>Learn Advanced React</h3>
                <li><p className="c6">Advanced,<b>4</b>Lessons</p></li>
            </div>

            <div className="card-4">
                <p className="c7">Course</p>
                <h3>Learn Go: Loops,Arrays,<br/>Maps,and Structs</h3>
                <li><p className="c8">Beginner friendly,<b>4</b>Lessons</p></li>
            </div>

            <div className="card-5">
                <p className="c9"><span>Pro</span> Skill Path</p>
                <h3>Data Science Foundations</h3>
                <li><p className="c10">Beginner friendly,<b>49</b>Lessons</p></li>
                <span className="b5">Job Essentials</span>
            </div>

            <div className="card-6">
                <p className="c11"><span>Pro</span> Career Path</p>
                <h3>Data Scientist: Analytics<br/>Specialist</h3>
                <li><p className="c12">Beginner friendly,<b>63</b>Lessons</p></li>
                <span className="b6">Job Essentials</span>
            </div>

        </div>
    </div>

)


export default NoteWorthy;

