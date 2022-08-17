import React from "react";
import './business-plan.styles.scss';

const BusinessPlan = () => (
    <div className="business-plan">
        <div className="title-team-enterprise">
            <h2>Pick your<br /> business plan</h2>
            <div className="teams-card">
                <h3>Teams</h3>
                <p className="peruser"><span>₹22112</span>per user, yearly</p>
                <p className="smaller-team">Interactive, self-paced technical <br />training for smaller teams</p>
                <a href="#" className="free-trial">Start free trial</a>
            </div>
            <div className="enterprise-card">
                <h3>Enterprise</h3>
                <p className="recomed">Recommended</p>
                <p className="custom-price">Custom Price</p>
                <p className="infor">Enterprise-level technical training <br />with an expanded course library <br />and advanced training capabilities</p>
                <a href="#" className="demo">Request a demo</a>
            </div>
        </div>
    </div>
)
export default BusinessPlan;