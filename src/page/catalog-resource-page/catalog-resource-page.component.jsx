import React from "react";
import BlogPosts from "../../components/blog-posts-resource-page/blog-posts.component";
import CheatSheets from "../../components/cheatsheets-resource-page/cheatsheets.component";
import CommunityChapters from "../../components/community-chapters/community-chapters.component";
import CsCareerPath from "../../components/cs-career-path/cs-career-path.component";
import FeaturedCurriculum from "../../components/featured-curriculum/featured-curriculum.component";
import PersonalityQuiz from "../../components/personality-quiz-resource-page/personality-quiz.component";
import ProStudentMembership from "../../components/pro-student-membership/pro-student-membership.component";
import './catalog-resource-page.styles.scss';

const CatalogResourcePage = () => (
    <div className="catalog-resource-page">
        <div className="student-center">
            <span>Student Center</span>
            <h1>Learn what you love</h1>
            <p>Codecademy Pro Student gives you the tools you need to discover and pursue<br />your passions through programming — all for just  <b>$149.99/year.</b></p>
            <a className="freetrial" href="#">Start a free trial</a>
            <img src="https://images.ctfassets.net/kcw3l04aboxk/2xOPR9Sap9ZT5PQG7EUEkp/55d5d0bc453e715d5b7a3298d5c0802f/hero_final.png" />
        </div>

        <ProStudentMembership />
        <CsCareerPath />
        <CommunityChapters />
        <FeaturedCurriculum />
        <PersonalityQuiz />
        <CheatSheets />
        <BlogPosts />

    </div>
)
export default CatalogResourcePage;