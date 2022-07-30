import React from "react";
import CareerSkillPath from "../../components/career-skill-path/career-skill-path.component";
import CatalogCareerPath from "../../components/catalog-career-path/catalog-career-path.component";
import CatalogCourse from "../../components/catalog-course/catalog-course.component";
import LanguageAccordion from "../../components/language-accordion/language-accordion";
import SubjectAccordion from "../../components/subject-accordion/subject-accordion.component";
import Pricing from "../pricing-page/pricing-page.component";

import './full-catalog.styles.scss';

const FullCatalog = () => (
    <div className="full-catalog">
        <LanguageAccordion />
        <SubjectAccordion />
        <a className="cata-title" href="#">Full Catalog</a>
        <a className="where-do-begin" href="#">Where do I begin</a>

        <div className="righ-content">
            <h1>Full Catalog</h1>
            <h2>Career Paths</h2>
            <CatalogCareerPath />
            <CareerSkillPath />
            <h2>Courses</h2>
            <CatalogCourse/>
            <Pricing/>
        </div>
    </div>
)
export default FullCatalog;
