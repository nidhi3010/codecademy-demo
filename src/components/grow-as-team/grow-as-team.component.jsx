import React from "react";
import './grow-as-team.styles.scss';

const GrowAsTeam = () => (
    <div className="grow-asteam">
        <h2>Grow as a team</h2>
        <div className="team">
            <div className="interective">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/3OoV2Ljy9pR8ve23es9ho3/d7b070c136c713d45c788fce7b9cd660/Interactive_learning.jpg" />
                <h3>Interactive learning </h3>
                <p>Write real code from day one and get real-time<br />feedback to quickly improve code quality.</p>
            </div>
            <div className="practice">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/ufFW944OlYWMWO0NiFHLX/c97bcec5d3e621490d6393b43b1831e2/Practice_and_apply.jpg" />
                <h3>Practice and apply</h3>
                <p>Choose bite-sized<a href="#">code challenges</a> or full, shareable<br />projects with <a href="#">workspaces</a> or our <a href="#">project library</a>.</p>
            </div>
            <div className="step-by-step">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/1damsdMIZO02Blkjt37ckS/878b88b6a8bf0a7df3f1346f3007a464/map.png" />
                <h3>Step-by-step guidance</h3>
                <p>Level up specific concepts with skill paths and promote<br /> or hire from within with career paths.</p>
            </div>
            <div className="learner">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/1t4EeWoqlXrAxbKkHXhaj8/ceed0fe2e0b7f6e7d0b706d8288e5938/Learner_groups.jpg" />
                <h3>Learner groups</h3>
                <p>Manage multiple training programs with ease by<br />assigning team members to different groups.</p>
            </div>
            <div className="content">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/5K5Gyi9jrjtPQCMOyGTIHl/cc5799850c43859695da4244a3353369/Content_assignment.jpg" />
                <h3>Content assignment</h3>
                <p>Get access to our full course catalog and only assign<br />content that fits your team's needs.</p>
            </div>
            <div className="reporting">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/62yRPEMNVu0VVkfJ7P8I8L/65a0e343f3b983d3e92f11eebec0f79d/Reporting.jpg" />
                <h3>Reporting</h3>
                <p>Track team progress and get insights on how effectively<br />individuals and groups are learning.</p>
            </div>
        </div>
    </div>
)

export default GrowAsTeam;