import React from "react";
import './free-trial-business.styles.scss';

const FreeTrial = () => (
    <div className="freetrial">
        <div className="freetrial-detail">
            <p>Codecademy from Skillsoft</p>
            <h1>Build a tech-forward <br />team with training <br />that sticks</h1>
            <p className="info">Codecademy for Business has helped hundreds of companies level up and <br />level set their technical skills.</p>
            <a className="start-freetrial" href="/teamfreetrial" >Start a free trial</a>
        </div>
        <div className="freetrial-img">
            <img src="https://images.ctfassets.net/kcw3l04aboxk/XyafZfCww8TbtnqY8w76G/7f9712e000276a05d650a29db074f9f0/BLP_Main_Image.png" />
        </div>
    </div>
)

export default FreeTrial;