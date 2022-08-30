import React from "react";
import './personality-quiz.styles.scss';

const PersonalityQuiz = () => (
    <div className="personality-quiz">
        <div className="programmers-quiz">
            <div className="programming-quiz">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/5LzffrPhevNhDcU72v7R3A/4bcda69632c32ea5bd723725c59024b3/Mask_Group.png" />
                <h2>Programming personality quiz</h2>
                <p>No matter how your brain works, this quiz will help you find a programming<br />language, course, and career that clicks.<b><a href="#">Start quiz</a></b></p>
            </div>
            <div className="programmers-do">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/3wnfwyXxkGvcHfGM3M8pPB/3d6acdd50b61d53a9f8007adf3de82dd/article_thumbnail.svg" />
                <h2>What do programmers do?</h2>
                <p>This video explores popular programming domains and gives you a glimpse into the daily life of a programmer. <b><a href="#">Watch Now</a></b></p>
            </div>
        </div>
        <div className="tyler-v">
        <div className="photo-name">
        <img src="https://images.ctfassets.net/kcw3l04aboxk/oDFt4n2C9eO6KQFD5ED3X/18ab775e06eddf5101290ea1fdcd9b08/tyler.jpg"/>
        <p>Tyler V.<br/>Student</p>
        </div>

        <div className="img-detail">
        <img src="https://www.codecademy.com/_portal/_next/static/images/navyQuotes.5a25a55eb864bcb8e7156e4d9cb55246.svg"/>
        <p className="ty-de">I'm pursuing a Computer Science degree. I decided to sign up for Codecademy in<br/>order to get my foot in the door and get a little experience before I go headfirst into<br/>the classes in college. I'm so excited to see where this will go!</p>
        </div>
        </div>
    </div>
)
export default PersonalityQuiz;