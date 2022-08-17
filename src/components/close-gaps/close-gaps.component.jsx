import React from "react";

import './close-gaps.styles.scss';

const CloseGaps = () => (
    <div className="close-gaps">
        <div className="close-gaps-detail">
            <h2>Close the gaps</h2>
            <p>Nearly 50% of engineers say a lack of training is causing skill gaps within their<br />teams. Codecademy helps you:</p>
            <ul>
                <li>Onboard people up to <b>50% faster</b></li>
                <li>Level set technical skills with interactive learning</li>
                <li>Keep people engaged and growing within your company</li>
                <li>Retain team members up to<b> 88% more effectively</b></li>
                <li>Empower your team to be more agile and more self-sufficient</li>
                <li>Stay up-to-date in the fast-paced world of tech</li>
            </ul>
        </div>
        <div className="gaps-img">
            <img src="https://images.ctfassets.net/kcw3l04aboxk/5vqwg2TLiwY9vD6CPHrv66/a34c9b24d429f7ee7172051fe5e3dbef/market_driver_section.png" />
        </div>
    </div>
)
export default CloseGaps;