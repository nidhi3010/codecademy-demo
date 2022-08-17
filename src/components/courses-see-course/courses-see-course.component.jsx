import React from "react";
import './courses-see-course.styles.scss';
import { useState } from "react";


const CoursesSeeCourse = () => {
    const [cards, setCards] = useState([
        {
            id: "1",
            cardpretitle: "Course",
            cardtitle: "Learn Python 3",
            cardbody: "Beginner friendly",
            cardnum: "14",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "2",
            cardpretitle: "Course",
            cardtitle: "Learn Python 2",
            cardbody: "Beginner friendly",
            cardnum: "20",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "3",
            cardpretitle: "Course",
            cardtitle: "Learn Java",
            cardbody: "Beginner friendly",
            cardnum: "16",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "4",
            cardpretitle: "Course",
            cardtitle: "Learn C++",
            cardbody: "Beginner friendly",
            cardnum: "13",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "5",
            cardpretitle: "Course",
            cardtitle: "Learn C#",
            cardbody: "Beginner friendly",
            cardnum: "20",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "6",
            cardpretitle: "Course",
            cardtitle: "Learn C",
            cardbody: "Beginner friendly",
            cardnum: "10",
            cardless: "Lessons"
        },
        {
            id: "7",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Intermediate Python 3",
            cardbody: "Intermediate",
            cardnum: "11",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "8",
            cardpretitle: "Course",
            cardtitle: "Python for Programmers",
            cardbody: "Intermediate"
        },
        {
            id: "9",
            cardpretitle: "Course",
            cardtitle: "Learn Intermediate Java",
            cardbody: "Intermediate",
            cardnum: "8",
            cardless: "Lessons"
        },
        {
            id: "10",
            cardpretitle: "Course",
            cardtitle: "Introduction to IT",
            cardbody: "Beginner friendly",
            cardnum: "6",
            cardless: "Lessons"
        },
        {
            id: "11",
            cardpretitle: "Course",
            cardtitle: "Learn the Basics of Regular Expressions",
            cardbody: "Beginner friendly",
            cardnum: "1",
            cardless: "Lessons"
        },
        {
            id: "12",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Introduction to Linux",
            cardbody: "Intermediate",
            cardnum: "7",
            cardless: "Lessons"
        },
        {
            id: "13",
            cardpretitle: "Course",
            cardtitle: "Learn the Basics of Artificial Intelligence (AI) with Minimax",
            cardbody: "Advanced",
            cardnum: "2",
            cardless: "Lessons"
        },
        {
            id: "14",
            cardpretitle: "Course",
            cardtitle: "Java for Programmers",
            cardbody: "Intermediate"
        },
        {
            id: "15",
            cardpretitle: "Course",
            cardtitle: "Discrete Math",
            cardbody: "Intermediate",
            cardnum: "8",
            cardless: "Lessons"

        },
        {
            id: "16",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Advanced Python 3",
            cardbody: "Advanced",
            cardnum: "5",
            cardless: "Lessons",
            cardbottom: "Language Fluency"
        },
        {
            id: "17",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn the Basics of Blockchain with Python",
            cardbody: "Beginner friendly",
            cardnum: "3",
            cardless: "Lessons"
        },
        {
            id: "18",
            cardpretitle: "Course",
            cardtitle: "Learn Raspberry Pi",
            cardbody: "Beginner friendly",
            cardnum: "4",
            cardless: "Lessons"

        },
        {
            id: "19",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Computer Architecture",
            cardbody: "Intermediate",
            cardnum: "8",
            cardless: "Lessons"
        },
        {
            id: "20",
            cardpretitle: "Course",
            cardtitle: "Learn Object Oriented Programming with Python & Project-Based Learning",
            cardbody: "Beginner friendly",
        },
        {
            id: "21",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Technical Interview Practice with Python",
            cardbody: "Intermediate",
            cardnum: "4",
            cardless: "Lessons"
        },
        {
            id: "22",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Recursion with Python",
            cardbody: "Intermediate",
            cardnum: "3",
            cardless: "Lessons"
        },
        {
            id: "23",
            cardpretitle: "Course",
            cardtitle: "Fundamentals of Operating Systems",
            cardbody: "Beginner friendly",
            cardnum: "8",
            cardless: "Lessons"

        },
        {
            id: "24",
            cardpretitle: "Course",
            cardtitle: "Introduction to Open Source",
            cardbody: "Beginner friendly",
            cardnum: "1",
            cardless: "Lesson"

        },
        {
            id: "25",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Complex Data Structures",
            cardbody: "Intermediate",
            cardnum: "8",
            cardless: "Lessons"
        },
        {
            id: "26",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Sorting Algorithms with Python",
            cardbody: "Intermediate",
            cardnum: "8",
            cardless: "Lessons"
        },
        {
            id: "27",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Advanced Algorithms and Data Structures with Python",
            cardbody: "Advanced",
            cardnum: "8",
            cardless: "Lessons"
        },
        {
            id: "28",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "How to Implement Search Algorithms with Python",
            cardbody: "Intermediate",
            cardnum: "4",
            cardless: "Lessons"
        },
        {
            id: "29",
            cardpro: "Pro",
            cardpretitle: "Course",
            cardtitle: "Learn Hardware Programming with CircuitPython",
            cardbody: "Beginner friendly",
            cardnum: "2",
            cardless: "Lessons"
        },
    ])
    return (
        <div className="courses-see-course">
            {
                cards.map((card) => (
                    <div className="clm" key={card.id}>
                        <div className="course-card">
                            <div className="course-card-body">
                                <p className="course-pro-title" style={{ "fontSize": "1rem" }}><span>{card.cardpro}</span>{card.cardpretitle}</p>
                                <h3>{card.cardtitle}</h3>
                                <li><p className="course-num-body">{card.cardbody},<b>{card.cardnum}</b>{card.cardless}</p></li>
                                <span className="course-bottm">{card.cardbottom}</span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default CoursesSeeCourse;