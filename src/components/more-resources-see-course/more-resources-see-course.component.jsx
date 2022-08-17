import React from "react";

import './more-resources-see-course.styles.scss';

const MoreResources = () => (
    <div className="more-resources">
        <div className="more-resources-blog">
            <h2>More resources</h2>
            <div className="glo">
                <a href="#">Glossary</a>
                <h3>Back-End Web Architecture</h3>
            </div>
            <div className="bw">
                <a href="#">Blog</a>
                <h3>Why Learn C#?</h3>
            </div>
            <div className="arti">
                <a href="#">Article</a>
                <h3>Why Data Structures?</h3>
            </div>
            <div className="bwg">
                <a href="#">Blog</a>
                <h3>Women in Tech</h3>
            </div>
        </div>

        <div className="glossary">
            <img src="https://static-assets.codecademy.com/assets/components/resources/article/standard/group-7.svg" />
            <p>Glossary</p>
            <h3>Command Line Commands</h3>
        </div>

        <div className="bolg-cards">
            <div className="blog-card1">
                <img src="https://static-assets.codecademy.com/assets/components/resources/blog/standard/group-60.svg" />
                <p>Blog</p>
                <h3>Facebook Messenger<br />Analysis</h3>
            </div>

            <div className="blog-card2">
                <img src="https://images.ctfassets.net/go6kr6r0ykrq/12jJ3cWg6gTfZFfGZZZxM8/ff0e4bd1d60c86f8580a067e2f267854/image__7_.png" />
                <p>Resource</p>
                <h3>Our best resources for<br />students</h3>
            </div>
            <div className="blog-card3">
                <img src="https://static-assets.codecademy.com/assets/components/resources/project/standard/group-104.svg" />
                <p>Project</p>
                <h3>Build a Text Adventure</h3>
            </div>
        </div>

        <div className="project-tic-toe">
            <img src="https://static-assets.codecademy.com/assets/components/resources/project/standard/group-104.svg" />
            <p>Project</p>
            <h3>Tic-Tac-Toe</h3>
        </div>
        <div className="project-blog">
            <div className="spaceman">
                <a href="#">project</a>
                <h3>Sapceman</h3>
            </div>
            <div className="console-game">
                <a href="#">project</a>
                <h3>Console Game</h3>
            </div>
        </div>

    </div>
)
export default MoreResources;