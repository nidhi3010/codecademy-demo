import React from "react";
import { SiCodecademy } from 'react-icons/si';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import ArticleLangAccordion from "../../components/article-lang-accordion/article-lang-accordion.component";
import ArticleSubAccordion from "../../components/article-subject-accordion/article-subject-accordion.component";
import './article-page.styles.scss';

const ArticlePage = () => (
  <div className="article-page">
    <ArticleLangAccordion />
    <ArticleSubAccordion />
    <div className="right-side">
      <div className="design-while">
        <div className="icons-title">
          <SiCodecademy className="si-icon" />
          <span>Codecademy Team</span>
          <RiCheckboxCircleFill className="check-icon" />
        </div>
        <h1>Consider Design While You<br />Build</h1>
        <p>5 Steps to leverage design practices and tools while you build websites</p>
        <div className="logo-fti">
          <RiFacebookCircleLine className="ri-fb" />
          <TiSocialTwitterCircular className="ti-twitter" />
          <TiSocialLinkedinCircular className="ti-linkedin" />
        </div>
      </div>
      <div className="step-1">
        <h3>Step 1: Consider your users</h3>
        <p>Whatever you are setting out to build will be used by real people—a minimum of one (you) and a<br />maximum of billions around the world! When you write the first few lines of code you should have an<br />answer to the question - who is this website for? Is it just for you, your friend, a client, or a<br />community of strangers? The answer will impact how you approach the design and development of<br />the project. Just a note—if the answer is everyone, that can be ok but you've got your work cut out<br />for you - that's 10+ languages, support for disabilities, consideration of different needs across<br />cultural norms in all 196 countries. </p>
        <h5>Exercise to get started:</h5>
        <p className="list1">Write some information on who you are making for. List out the following:</p>
        <ul>
          <li>Who they are (demographics, characteristics)</li>
          <li>Why they would use your site/app</li>
          <li>What you want them to take away from using it</li>
        </ul>
      </div>

      <div className="step-2">
        <h3>Step 2: Consider the environment</h3>
        <p>When you build a website or app it may live on a server but it will be accessed and used in a ton of<br />different environments. Sure you may build it on a Macbook and test it in Chrome, but rest assured<br />someone will load your site on an outdated version of Internet Explorer, mirror it to their living room<br />flatscreen TV, or pull it up on a terrible 3G network in the woods. It's your job to anticipate these<br />different environments your website will be in and design it in a way that can adapt. </p>
        <h5>Exercise to get started:</h5>
        <p className="list2">Jot down some environmental considerations you'd like to include in your project—starters below:</p>
        <ul>
          <li>Will your project respond to browser size (work on mobile and big screens)</li>
          <li>What browsers do you want to ensure your site works on? To make this decision think about<br />who you said you are making this for.</li>
        </ul>
      </div>

      <div className="step-3">
        <h3>Step 3: Wireframing</h3>
        <p>Wireframes are the blueprint for what you are going to build. Much like an architect lays out the full<br />plans and building structure before any cement is laid, you will want to plan out how your website or<br />app will be structured before you begin coding. If you're working with other people or a client this<br />step is a critical communication vehicle to make sure everyone agrees on the general functionality<br />and structure of the project before investing hour and hours building it. </p>
        <h5>Exercise to get started:</h5>
        <p className="list3-1">Before you start wireframing you should have an understanding of who will use the website, a list that<br />describes the core features of your website (user stories) and any environmental considerations<br />you've decided to factor in. If you did the 5 minute exercises for steps 1 and 2 they should<br />accomplish this. </p>
        <p className="list3-2">Ok ready set.. Wireframe!
          Websites are comprised of content arranged in different ways. Get a piece<br />of paper and a pencil. Think about the following core elements of your site—grid, navigation,<br />heading, footer, and main content areas like a hero image or gallery. Start sketching out different<br />ways of laying out each page. Below are a few steps you can take.</p>
        <p className="list3-3">Draw the base grid on each page. If you are using something like bootstrap this has a predefined grid<br />you can use. If you've decided to build a responsive site each full page you wireframe should also<br />have a mobile version. </p>
        <p className="list3-4">Add the main content in blocked out containers. Images, text, movies, etc whatever the content is<br />add general containers in places that match the user needs and stories you defined earlier.  Add all<br />main buttons and other UI (user interface) elements such as icons, dropdowns, input fields. </p>
      </div>

      <div className="step-4">
        <h3>Step 4: UI & Visual Design</h3>
        <p>Before reading any of this you may have heard or thought 'design just makes things pretty' So far<br />we've only been talking about the design behind the scenes—no pretty involved. This step is about<br />designing the details of how people see and use your website or app. Now you'll get to make things<br />beautiful using CSS. </p>
        <h5>Example: Style Guide</h5>
        <p className="list4-1">The best way of showing you the different elements of visual design involved in building a website is<br />to look at a few examples of open source website style guides. These encompass the core UI & Visual<br />Design elements and usually give explanations about how and why the elements should be used.<a href="#">https://ux.mailchimp.com/patterns</a>
          Exercise to get started:
          Read this great Medium article by Erik<br />Kennedy. It's a good overview of UI design.<a href="#">https://medium.com/@erikdkennedy/7-rules-for-creating-<br />gorgeous-ui-part-1-559d4e805cda</a></p>
        <p className="list4-2">Then do the following:</p>
        <p className="list4-3">Find inspiration and creative direction from other sites. If it's on a site, don't forget you can find the<br />fonts, colors, by looking at their code! Dribble amd SiteInspire are good places to start. </p>
        <ul>
          <li>Choose a typeface - if you need help, use google fonts.</li>
          <li>Choose a color theme - if you need help, use the adobe library</li>
        </ul>
        <p className="list4-4">When you are setting padding and margin, add more white space than you think you should. </p>
      </div>

      <div className="step-5">
        <h3>Step 5: Testing and Iterating</h3>
        <p>As a site or app is being built it's important to test and validate before you ship it. This can be as<br />simple as asking a friend to use an early prototype and give feedback, or going to a coffee shop and<br />buying strangers coffee in exchange for 10 minutes of their time while you ask them to use your site<br />and give feedback. This step is an important tie back to all previous steps. You can ask the following<br />questions:</p>
        <h5>Exercise to get started:</h5>
        <p className="list5">Find a few people who are willing to test your project (ideally 5) This can be as simple as taking your<br />laptop with a local build of your website and going to a coffee shop. Read this example of coffee<br />shop testing. Then ask people a few questions, and ask them to start using your website. You don't<br />need a script of questions, at it's simplest form this activity is about you watching real people<br />interact with your site—at a minimum as them to think out loud so you know what parts of your site<br />are confusing. After you do this review your notes and decide what you'd like to change based on the<br />feedback - maybe a button placement, a content area, or general navigation. </p>
      </div>

      <div className="learn-more-on-codecademy">
        <h2>Learn More on Codecademy</h2>
        <div className="career-skill">
          <div className="learn-path-1">
            <p className="p1"><span>Pro</span> Skill Path</p>
            <h3>Code Foundations</h3>
            <li><p>Beginner friendly,<b>15</b>Lessons</p></li>
          </div>
          <div className="learn-career-path">
            <p className="cp1"><span>Pro</span> Career Path</p>
            <h3>Full-Stack Engineer</h3>
            <li><p>Beginner friendly,<b>168</b>Lessons</p></li>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default ArticlePage;