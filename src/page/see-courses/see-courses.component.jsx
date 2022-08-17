import React from "react";
import AllCourseCS from "../../components/all-course-comsci/all-course-comsci.component";
import LanguageAccordion from "../../components/language-accordion/language-accordion.component";
import MoreResources from "../../components/more-resources-see-course/more-resources-see-course.component";
import SubjectAccordion from "../../components/subject-accordion/subject-accordion.component"

import './see-courses.styles.scss';

const SeeCourses = () => (
    <div className="seecourses">
        <LanguageAccordion />
        <SubjectAccordion />
        <a className="catalog-title" href="#">Full Catalog</a>
        <a className="where-do-i-begin" href="#">Where do I begin</a>

        <div className="computer-sci">
            <a href="/catalog">Catalog</a>
            <p className="csci">/ Computer Science</p>
            <h1>Computer Science</h1>
            <p className="csdetail">Computer Science, often referred to as “CS,” is a broad term that covers many sub-<br />disciplines, including the worlds of software <em>and</em>  hardware. It can be found in every piece of <br />technology you use, from a smartphone or gaming console to a car or ATM. With so many<br /> applications for Computer Science, there's a space for everyone!</p>
            <div className="related-resources">
                <h2>Related resources</h2>
                <ul>
                    <li>Docs:<a href="#">Python</a>    <a href="#">C++</a>      <a href="#">Java</a></li>
                    <li><a href="#">Cheatsheets</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
        </div>

        <div className="new-to-cs">
            <h2>New to Computer Science? Start here</h2>
            <div className="py3">
                <p className="co">Course</p>
                <h3>Learn Python 3</h3>
                <li><p className="ppy">Beginner friendly,<b>121</b>Lessons</p></li>
                <p className="ppydetail">Free through August 9: Learn Python 3, the latest and greatest version of the most popular<br />programming language in the world. </p>
                <span>Language Fluency</span>
            </div>
            <div className="blog-post">
                <p className="bp">Blog Post</p>
                <h3 className="whatiscs">What is Computer Science?</h3>
                <p className="march">1 March 2022</p>
            </div>
        </div>

        <AllCourseCS />
        <MoreResources />
    </div>

)
export default SeeCourses;