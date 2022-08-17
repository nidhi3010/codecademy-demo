import React from "react";
import BusinessPlanTable from "../../components/business-plan-table/business-plan-table.component";
import BusinessPlan from "../../components/business-plan/business-plan.component";
import CloseGaps from "../../components/close-gaps/close-gaps.component";
import FreeTrial from "../../components/free-trial-business/free-trial-business.component";
import GrowAsTeam from "../../components/grow-as-team/grow-as-team.component";
import ResourcesBusiness from "../../components/resources-business/resources-business.component";
import SkillYouNeed from "../../components/skill-you-need/skill-you-need.component";
import ToolTip from "../../components/tooltip/tooltip.component";

import './business-solution-page.styles.scss';

const BusinessSolution = () => (
    <div className="business-solution-page">
        <FreeTrial />
        <div className="way-to-learn">
            <h2>A more engaging way to learn</h2>
            <p>Our interactive platform makes learning active and engaging. Your team<br /> members don't just watch or read about someone else coding — they write <br />and edit their own code live, practicing and applying what they learn in real-<br />world situations. </p>
            <img className="busi-gif" src="https://images.ctfassets.net/kcw3l04aboxk/1WNcRwZXE3T6KRVGrLgsmK/6bddf8fd7c6626cff0a2c08d5554b751/Business_Landing_Page.gif" />
        </div>
        <SkillYouNeed />
        <GrowAsTeam />
        <div className="elevate">
            <div className="ele-inf">
                <h2>Elevate at scale </h2>
                <p>For larger teams, Codecademy for Enterprise makes it easy to create scalable<br /> training programs for your entire organization.</p>
            </div>
            <div className="enterprise">
                <a href="#"> Learn about Enterprise</a>
            </div>
        </div>
        <CloseGaps />
        <BusinessPlan />
        <BusinessPlanTable />
        <ResourcesBusiness />

    </div>
);
export default BusinessSolution;