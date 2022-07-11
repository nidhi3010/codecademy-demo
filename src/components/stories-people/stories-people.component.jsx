import React from "react";

import './stories-people.styles.scss';


const StoriesPeople = () => (

    <div className="stories-of-people">
        <div className="heading">
            <h2>Stories from real people</h2>
            <p>Watch and read stories from the Codecademy community.</p>
            <a href="#">Explore more stories →</a>
        </div>

        <div className="people-profile">
            <div className="profile1">
                <img className="img1" src="https://images.ctfassets.net/go6kr6r0ykrq/1HRZqDGLeXXKvgDDvCLMtb/d93f59bd74c075a79788a0c46335553c/GiacomoSorbi.jpeg" />
                <h3>Taking a different path:<br /> One Team Lead's story</h3>
                <p>Giacomo S., Team Lead, London</p>
            </div>

            <div className="profile2">
                <img className="img2" src="//images.ctfassets.net/go6kr6r0ykrq/7EnAeoXDH50HmJG1BVJHFs/d8a3620dd34a336c2e1464d677b9052b/AlisonVoghel.jpg" />
                <h3>See how this Architect<br/> switched to UX Design</h3>
                <p>Alison V., Senior UX Designer<br/> @ Acquia, Columbus</p>
            </div>

            <div className="profile3">
                <img className="img3" src="//images.ctfassets.net/go6kr6r0ykrq/PsoQ94ZyA6wDGnzSr4CjF/f94e1023dc2fd8a146b1bcccc72879e6/ManuelSousa.jpg" />
                <h3>Lessons from a Chef turned <br/> Deputy CTO</h3>
                <p>Manuel S., Deputy CTO @<br/> PaxFamilia, Brussels</p>
            </div>

            <div className="profile4">
                <img className="img4" src="//images.ctfassets.net/go6kr6r0ykrq/3ObHLUqjmfzpkrQLuMzF2n/ec9ad9ff4f6cea017a3057c8336eec3f/Rosita.jpg" />
                <h3>How one Developer <br/> learned to code with her <br/>disability</h3>
                <p>Rosita R., Front-End <br/>Developer, Brummen</p>
            </div>

        </div>
    </div>
)
export default StoriesPeople;