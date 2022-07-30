import React from "react";

import './quiz.styles.scss';

const Quiz = () => (

  <div className="quiz">
    <h2>Not sure where <br />to start?</h2>
    <p>This short quiz will sort you out. Answer a <br />few simple questions to get personal career <br />advice and course recommendations.</p>
    <a className="quiz-btn" href="#">Take the quiz</a>
    <img className="pic" src="https://www.codecademy.com/webpack/7f8fd6dd32aa8afc918a5cf6a9fe2933.svg" />
  </div>
)

export default Quiz;