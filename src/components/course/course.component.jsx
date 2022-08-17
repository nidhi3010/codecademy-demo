import React from "react";
import { useState } from "react";

import CoursePagination from "../course-pagination/course-pagination.component";

import './course.styles.scss';

function Course() {
    const [posts, setPosts] = useState([
        {
            id: "1",
            pretitle: "Course",
            title: "Learn JavaScript",
            body: "Beginner friendly",
            num: "11",
            less: "Lessons",
            bottom: "Language Fluency"

        },
        {
            id: "2",
            pretitle: "Course",
            title: "Learn HTML",
            body: "Beginner friendly",
            num: "6",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "3",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Python 3",
            body: "Beginner friendly",
            num: "14",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "4",
            pretitle: "Course",
            title: "Learn Python 2",
            body: "Beginner friendly",
            num: "20",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "5",
            pretitle: "Course",
            title: "Learn Java",
            body: "Beginner friendly",
            num: "16",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "6",
            pretitle: "Course",
            title: "Learn SQL",
            body: "Beginner friendly",
            num: "4",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "7",
            pretitle: "Course",
            title: "Learn C++",
            body: "Beginner friendly",
            num: "13",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "8",
            pretitle: "Course",
            title: "Learn C#",
            body: "Beginner friendly",
            num: "20",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "9",
            pretitle: "Course",
            title: "Learn CSS",
            body: "Intermediate",
            num: "8",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "10",
            pretitle: "Course",
            title: "Learn React",
            body: "Intermediate",
            num: "18",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "11",
            pretitle: "Course",
            title: "Learn How to Code",
            body: "Beginner friendly",
            num: "7",
            less: "Lessons",
            bottom: "Welcome Series"
        },
        {
            id: "12",
            pretitle: "Course",
            title: "Learn C",
            body: "Beginner friendly",
            num: "10",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "13",
            pretitle: "Course",
            title: "Learn PHP",
            body: "Intermediate",
            num: "17",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "14",
            pretitle: "Course",
            title: "Learn R",
            body: "Beginner friendly",
            num: "16",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "15",
            pretitle: "Course",
            title: "Welcome To Codecademy",
            body: "Beginner friendly",
            num: "1",
            less: "Lessons",
            bottom: "Welcome Series"
        },
        {
            id: "16",
            pretitle: "Course",
            title: "Learn Ruby",
            body: "Beginner friendly",
            num: "19",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "17",
            pretitle: "Course",
            title: "Learn Intermediate JavaScript",
            body: "Intermediate",
            num: "6",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "18",
            pretitle: "Course",
            title: "Learn TypeScript",
            body: "Intermediate",
            num: "7",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "19",
            pretitle: "Course",
            title: "Learn Swift",
            body: "Beginner friendly",
            num: "11",
            less: "lessons",
            bottom: "Language Fluency"
        },
        {
            id: "20",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn the Command Line",
            body: "Beginner friendly",
            num: "4",
            less: "Lessons"
        },
        {
            id: "21",
            pretitle: "Course",
            title: "Learn Go",
            body: "Beginner friendly",
            num: "6",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "22",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Git & GitHub",
            body: "Beginner friendly",
            num: "5",
            less: "Lessons"
            //   bottom: "Language Fluency"
        },
        {
            id: "23",
            pretitle: "Course",
            title: "Introduction to Cybersecurity",
            body: "Beginner friendly",
            num: "2",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "24",
            pretitle: "Course",
            title: "Learn Intermediate CSS",
            body: "Intermediate",
            num: "10",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "25",
            pretitle: "Course",
            title: "Learn Intermediate Python 3",
            body: "Intermediate",
            num: "11",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "26",
            pretitle: "Course",
            title: "Python for Programmers",
            body: "Intermediate"
            //num: "11",
            // less: "lessons",
            // bottom: "Language Fluency"
        },
        {
            id: "27",
            pretitle: "Course",
            title: "Learn Node.js",
            body: "Intermediate",
            num: "4",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "28",
            pretitle: "Course",
            title: "Learn Game Development with Phaser.js",
            body: "Intermediate",
            num: "6",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "29",
            pretitle: "Course",
            title: "Learn Kotlin",
            body: "Beginner friendly",
            num: "11",
            less: "Lessons",
            bottom: "Language Fluency"
        },
        {
            id: "30",
            pretitle: "Course",
            title: "How to Make a Website with NameCheap",
            body: "Beginner friendly",
            num: "5",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "31",
            pretitle: "Course",
            title: "Learn Intermediate Java",
            body: "Intermediate",
            num: "8",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "32",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Bash Scripting",
            body: "Intermediate",
            num: "1",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "33",
            pretitle: "Course",
            title: "Introduction to IT",
            body: "Beginner friendly",
            num: "6",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "34",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Bootstrap",
            body: "Intermediate",
            num: "2",
            less: "Lessons"
            //   bottom: "Language Fluency"
        },
        {
            id: "35",
            pretitle: "Course",
            title: "Learn React Native",
            body: "Intermediate",
            num: "5",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "36",
            pro: "Pro",
            pretitle: "Course",
            title: "Building Interactive JavaScript Websites",
            body: "Intermediate",
            num: "5",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "37",
            pretitle: "Course",
            title: "Learn Vue.js",
            body: "Beginner friendly",
            num: "4",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "38",
            pretitle: "Course",
            title: "Learn Angular JS 1.X",
            body: "Intermediate",
            num: "4",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "39",
            pretitle: "Course",
            title: "Learn What to Learn",
            body: "Beginner friendly",
            num: "6",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "40",
            pretitle: "Course",
            title: "Introduction to UI and UX Design",
            body: "Beginner friendly",
            num: "3",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "41",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn jQuery",
            body: "Beginner friendly",
            num: "5",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "42",
            pretitle: "Course",
            title: "Getting Started Off-Platform for Data Science",
            body: "Beginner friendly",
            num: "1",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "43",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Web Scraping with Beautiful Soup",
            body: "Intermediate",
            num: "1",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "44",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Ruby on Rails",
            body: "Intermediate",
            num: "4",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "45",
            pretitle: "Course",
            title: "Learn Redux",
            body: "Intermediate",
            num: "7",
            less: "Lessons"
            //   bottom: "Language Fluency"
        },
        {
            id: "46",
            pretitle: "Course",
            title: "Learn the Basics of Regular Expressions",
            body: "Beginner friendly",
            num: "1",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "47",
            pretitle: "Course",
            title: "Introduction to DevOps",
            body: "Beginner friendly",
            num: "6",
            less: "Lessons"
            // bottom: "Language Fluency"
        },
        {
            id: "48",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Data Analysis with Pandas",
            body: "Intermediate",
            num: "4",
            less: "Lessons"
            //  bottom: "Language Fluency"
        },
        {
            id: "49",
            pro: "Pro",
            pretitle: "Course",
            title: "Introduction to Linux",
            body: "Intermediate",
            num: "7",
            less: "Lessons"
            //bottom: "Language Fluency"
        },
        {
            id: "50",
            pro: "Pro",
            pretitle: "Course",
            title: "Learn Asynchronous JavaScript",
            body: "Intermediate",
            num: "2",
            less: "Lessons"
            //   bottom: "Language Fluency"
        },


    ]);

    const [showPerPage, setShowPerPage] = useState(9);

    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        //  console.log(start,end);
        setPagination({ start: start, end: end });
    };

    return (
        <div className="course">
            <div className="container">
                {posts.slice(pagination.start, pagination.end).map((post) => (
                    <div className="colm" key={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <p className="pro-title" style={{ "fontSize": "1rem" }}><span>{post.pro}</span>{post.pretitle}</p>
                                <h3>{post.title}</h3>
                                <li><p className="num-body">{post.body},<b>{post.num}</b>{post.less}</p></li>
                                <span className="bottm">{post.bottom}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CoursePagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={posts.length}
            />
        </div>
    );
}

export default Course;