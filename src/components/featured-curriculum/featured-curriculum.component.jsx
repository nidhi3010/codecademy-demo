import React from "react";
import './featured-curriculum.styles.scss';

const FeaturedCurriculum = () => (
    <div className="featured-curriculum">
        <h2>Featured curriculum</h2>
        <p>We have courses that span dozens of domains and all different levels of<br />commitment. Here are three of our most popular ones for students, but there<br />are plenty more where they came from.<a href="#"><b>All courses</b></a> </p>
        <div className="curriculum">
            <div className="learn-js">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/3snqQu1GBmydCNkLt2ggoC/fcfa34fde345cd1821166a99b09f1a1c/js_card_image.svg" />
                <h3>Learn JavaScript</h3>
                <p>Learn the fundamentals of this flexible programming<br />language in no time. <b><a href="#">Start now</a></b></p>
            </div>
            <div className="html-css-github">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/3WuMcrH56eXAsydLVSt4P6/b7757428e8c010c21a29679c93075e43/buildwebsites_card_image.svg" />
                <h3>Build Websites with HTML, CSS, and Github Pages</h3>
                <p>Master the languages and concepts required for this<br />skill. <b><a href="#">Start now</a></b></p>
            </div>
            <div className="data-scientist">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/2u6z5cPG1QGsgqEFKZepfh/52c4de333dd4a2a4999d6b69f415a8a5/datascience_card_image.svg" />
                <h3>Data Scientist</h3>
                <p>Gain the broad skills and experience needed to start<br />a career as a Data Scientist. <b><a href="#">Start now</a></b></p>
            </div>
        </div>
    </div>
)
export default FeaturedCurriculum;