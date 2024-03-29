import React from "react";

import { Link } from "react-router-dom";

import AllLevelsMenu from "../../components/all-levels-dropdown/all-levels-dropdown.component";
import Course from "../../components/course/course.component";
import GetInspired from "../../components/get-inspired/get-inspired.component";
import LanguageAccordion from "../../components/language-accordion/language-accordion.component";
import NoteWorthy from "../../components/note-worthy/note-worthy.component";
import ProCourseMenu from "../../components/pro-courses-dropdown/pro-courses-dropdown.component";
import SubjectAccordion from "../../components/subject-accordion/subject-accordion.component";
import SubLangCarousel from "../../components/subject-lang-carousel/subject-lang-carousel.component";

import './catalog-page.styles.scss';


const CatalogPage = () => (
    <div className="catalog-page">
        <LanguageAccordion />
        <SubjectAccordion />
        <a className="catalog-title" href="#">Full Catalog</a>
        <a className="where-do-i-begin" href="#">Where do I begin</a>
        <div className="take-quize">
            <p>Not sure where to begin? <span>Take our quiz →</span></p>
        </div>
        <h2>Explore the catalog</h2>
        <h3>Popular subjects and languages</h3>
        <SubLangCarousel />
        <h3 className="courses">Most popular courses</h3>
        <ProCourseMenu />
        <AllLevelsMenu />
        <Course />
        <NoteWorthy />
        <GetInspired />
        <Link className='catalog-link' to="all">
            See Full Catalog
        </Link>
    </div>
)

export default CatalogPage;