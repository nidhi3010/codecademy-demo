import React from "react";
import CsCareerPath from "../../components/cs-career-path/cs-career-path.component";
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
        <CsCareerPath/>
    </div>
)
export default CatalogResourcePage;