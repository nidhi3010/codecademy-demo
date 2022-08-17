import React from "react";

import './asked-questions.styles.scss';

const AskedQue = () => (
    <div className="asked-que">
        <h2>Frequently Asked Questions</h2>
        <div className="que-part">
            <div className="left-part">
                <h3>What is the difference between Basic and Pro?</h3>
                <p>Codecademy Pro contains everything in Basic, plus all the advanced tools and <br />
                    content that you need to make your learning faster and more efficient. Pro provides<br />
                    you with hundreds of additional exercises, practice packs, and quizzes to help you <br />
                    sharpen your coding skills. Pro also contains real-world projects that train you to<br />
                    apply the skills you are learning in realistic scenarios. </p>
                <h3>Why should I upgrade to Codecademy Pro?</h3>
                <p>We built Codecademy Pro based on the lessons we've learned from teaching <br />over 45
                    million people to code since 2011. If you're ready to accelerate your learning and,<br />
                    apply those skills to real-world scenarios,he Codecademy Pro is for you. Pro not <br />
                    only teaches you coding skills, but how to use those skills. </p>
                <h3>How do I cancel my subscription?</h3>
                <p>You can <a href="#">cancel your Codecademy Pro account</a> anytime, by visiting the “Account <br />
                    Settings” page (<a href="#">policy</a>).You can also pause your subscription if you need to take a
                    break. </p>
            </div>
            <div className="right-part">
                <h3>Do I need to know how to code before signing up?</h3>
                <p>No, most of our users have zero experience when they sign up.  Our curriculum is <br />
                    designed to teach anyone to learn to code. </p>
                <h3>What is a Path?</h3>
                <p>Paths are structured curriculum roadmaps that show you exactly where to start and<br />
                    what to learn next. Paths contain everything you need to accomplish a specific task<br />
                    or goal.</p>
                <h3>Is Codecademy suitable for children?</h3>
                <p>Yes. Codecademy is suitable for children who can read and type. Coding is just like<br />
                    learning a new language or studying math. Children who learn to code when they're<br />
                    young can set themselves up for a lifetime of opportunities for success.</p>
                <p>Users under the age of 13 must receive parental permission before creating an <br />
                    account as per our<a href="#">Terms of Service.</a> </p>
                <h3>Do you offer a student discount?</h3>
                <p>Yes! Eligible college students can join Codecademy Pro Student. It's an annual <br />
                    membership with all the same features as Codecademy Pro, but for over 35% off the <br />
                    regular price (that's $149.99/year in the U.S.).<a className="#">Click here to join Codecademy Pro Student.</a> </p>
            </div>
        </div>
    </div>
)

export default AskedQue;