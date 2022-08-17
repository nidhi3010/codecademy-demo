import React from "react";
import TeamFreeTrialForm from "../../components/team-free-trial-form/team-free-trial-form.component";

import './teams-free-trial-page.styles.scss';

const TeamsFreeTrail = () => (
    <div className="teams-freetrial">
        <div className="side-part">
            <h2>Unlock Your Team's<br /> Potential</h2>
            <div className="ip-1">
                <img src="https://images.ctfassets.net/go6kr6r0ykrq/21KkYrPIZ17Ja66j7FGEfi/dfd4dd462e09cd98d814c665de41292a/icon--interactive-learning.svg" />
                <div className="para1">
                    <p className="pa1">Interactive learning</p>
                    <p className="pa2">When your team learns by doing, they<br />stay more engaged in their work.</p>
                </div>
            </div>

            <div className="ip-2">
                <img src="https://images.ctfassets.net/go6kr6r0ykrq/42oaEPBtgPe9yEy5tco7OC/84e3fe4e1496619970a4ede4b7851361/maps_mark.svg" />
                <div className="para2">
                    <p className="pa3">Step-by-step guidance </p>
                    <p className="pa4">Structured Skill Paths let your team<br /> take control of their own journey.</p>
                </div>
            </div>

            <div className="ip-3">
                <img src="https://images.ctfassets.net/go6kr6r0ykrq/5ouR6EWsr5v6NYgh911aIR/7f8330c879a34c74627bc95ef1891db2/certified_diploma_1.svg" />
                <div className="para3">
                    <p className="pa5">Proof of progress</p>
                    <p className="pa6">Monitor team or individual growth with<br />customized reports and analytics.</p>
                </div>
            </div>

            <div className="ip-4">
                <img src="https://images.ctfassets.net/go6kr6r0ykrq/wrRDVWF8PwyJxEYJggZeQ/abdb951a94ee176f6639356001a58d86/diamond.svg" />
                <div className="para4">
                    <p className="pa7">Cutting-edge courses</p>
                    <p className="pa8">Our growing catalog ensures your team<br />has the most in-demand skills.</p>
                </div>
            </div>
        </div>
        <TeamFreeTrialForm/>
    </div>
)
export default TeamsFreeTrail;