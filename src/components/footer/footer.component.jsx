import React from "react";

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { AiFillYoutube } from 'react-icons/ai';
import { GiHearts } from 'react-icons/gi';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-left">
      <div className="logo">
        <p>Code_Cademy</p>
        <small>from skillsoft</small>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Affiliates</a></li>
        </ul>
        <div className="icons">
          <AiOutlineTwitter style={{ "fontSize": "1.5rem" }} className="twi" />
          <FaFacebookF style={{ "fontSize": "1.2rem" }} className="fabook" />
          <ImInstagram style={{ "fontSize": "1.2rem" }} className="insta" />
          <AiFillYoutube style={{ "fontSize": "1.5rem" }} className="utube" />
        </div>
      </div>

      <div className="resources">
        <h2>Resources</h2>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Interview Challenges</a></li>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Cheatsheets</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Career Center</a></li>
        </ul>
      </div>

      <div className="community">
        <h2>Community</h2>
        <ul>
          <li><a href="#">Forums</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Chapters</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Lerner Stories</a></li>
          <li><a href="#">Refer a friend</a></li>
        </ul>
      </div>

      <div className="individual-plans">
        <h2>Individual Plans</h2>
        <ul>
          <li><a href="#">Pro Membership</a></li>
          <li><a href="#">For Students</a></li>
        </ul>
      </div>

      <div className="enterprise-plans">
        <h2>Enterprise Plans</h2>
        <ul>
          <li><a href="#">Business Solutions</a></li>
        </ul>
      </div>

      <div className="mobile">
        <h2>MOBILE</h2>
        <img className="app-store" src="https://www.codecademy.com/webpack/88f2b695da0acbecad60ed9ea386b6b5.svg" />
        <img className="google-play" src="https://www.codecademy.com/webpack/c2cb3310b4be600e8b5974fb025e84f1.png" />
      </div>

      <div className="support">
        <h2>Support</h2>
        <ul>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-right">
      <h2>Course Catalog</h2>
      <div className="subjects">
        <h3>Subjects</h3>
        <ul>
          <li><a href="#">Web Development</a></li>
          <li><a href="#">Data Science</a></li>
          <li><a href="#">Computer Science</a></li>
          <li><a href="#">Developer Tools</a></li>
          <li><a href="#">Machine Learning</a></li>
          <li><a href="#">Code Foundations</a></li>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">-</a></li>
          <li><a href="#">Full Catalog</a></li>
          <li><a href="#">Beta Content</a></li>
          <li><a href="#">Roadmap</a></li>
        </ul>
      </div>

      <div className="languages">
        <h3>Languages</h3>
        <ul>
          <li><a href="#">HTML & CSS</a></li>
          <li><a href="#">Python</a></li>
          <li><a href="#">Java Script</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">SQL</a></li>
          <li><a href="#">Bash/Shell</a></li>
          <li><a href="#">Ruby</a></li>
        </ul>
        <ul className="lang">
          <li><a href="#">C++</a></li>
          <li><a href="#">R</a></li>
          <li><a href="#">C#</a></li>
          <li><a href="#">PHP</a></li>
          <li><a href="#">Go</a></li>
          <li><a href="#">Swift</a></li>
          <li><a href="#">Kotlin</a></li>
        </ul>
      </div>
    </div>

    <div className="lower-footer">
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Cookie Policy</a></li>
        <li><a href="#">Do Not Sell My Personal Information</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
      <p>Made with <GiHearts style={{"color":"rgb(207, 67, 67)"}}/> in NYC © 2022 Codecademy</p>
    </div>
  </div>
)

export default Footer;