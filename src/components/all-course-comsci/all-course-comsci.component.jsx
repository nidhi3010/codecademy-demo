import React from "react";
import CoursesSeeCourse from "../courses-see-course/courses-see-course.component";
import SelectMenu from "../select-menu/select-menu.component";
import './all-course-comsci.styles.scss';

const AllCourseCS = () => (
    <div className="all-course-cs">
        <h2>All courses in Computer Science</h2>
        <SelectMenu />
        <div className="all-skill-paths">
            <div className="all-skill-paths-1">
                <p className="asp-1"><span>Pro</span> Skill Path</p>
                <h3>Pass the Technical Interview with Java</h3>
                <li><p className="asp-2">Intermediate,<b>36</b>Lessons</p></li>
                <img src="https://static-assets.codecademy.com/components/curriculum/path/pass-the-technical-interview-with-java/curriculum-card.svg" />
                <span className="bsp1">With Final Project</span>
            </div>
            <div className="all-skill-paths-2">
                <p className="asp-3"><span>Pro</span> Skill Path</p>
                <h3>Pass the Technical Interview with JavaScript</h3>
                <li><p className="asp-4">Intermediate,<b>36</b>Lessons</p></li>
                <img src="https://static-assets.codecademy.com/components/curriculum/path/pass-the-technical-interview-with-javascript/curriculum-card.svg" />
                <span className="bsp2">With Final Project</span>
            </div>
            <div className="all-skill-paths-3">
                <p className="asp-5"><span>Pro</span> Skill Path</p>
                <h3>Pass the Technical Interview with Python</h3>
                <li><p className="asp-6">Intermediate,<b>43</b>Lessons</p></li>
                <img src="https://static-assets.codecademy.com/components/curriculum/path/pass-the-technical-interview-with-python/curriculum-card.svg" />

            </div>
        </div>
        <CoursesSeeCourse/>
    </div>
)
export default AllCourseCS;