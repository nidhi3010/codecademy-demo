import React from "react";
import './cs-career-path.styles.scss';

const CsCareerPath = () => (
    <div className="cs-career-path">
        <h2>Computer Science Career Path</h2>
        <p>This new Path is designed with students in mind. Get a strong foundation in all<br />the skills and languages that are typically taught in a 4-year college CS degree.<br /> In addition to learning the abstract concepts that are fundamental to all of<br />programming, you'll also get hands-on experience that will help you problem-<br />solve like a real programmer.  </p>
        <p className="you-will-learn">You'll learn: </p>
        <ul>
            <li>Python, data structures, and algorithms</li>
            <li>Database fundamentals using PostgreSQL</li>
            <li>The math and architecture of computer science</li>
        </ul>
        <a className="learnmore" href="#">Learn more</a>
        <img src="https://images.ctfassets.net/kcw3l04aboxk/3U4vT6JJeexmcBrRN92xoi/af40054005b9c1d2973e6991505b73b0/cs_feature_v2.png" />
    </div>
)
export default CsCareerPath;