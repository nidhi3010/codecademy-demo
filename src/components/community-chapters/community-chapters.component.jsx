import React from "react";
import './community-chapters.styles.scss';

const CommunityChapters = () => (
    <div className="community-chapters">
        <h2>Community Chapters</h2>
        <p>We know learning online can get a little lonely. So this year, we're starting<br />community-led local Chapters where students can meet up online or in<br />person and support each other. Join an existing Chapter or create your own.<br />Then start a conversation, get some motivation, or encourage someone else to<br />keep going.<a href="#"><b>Explore Chapters</b></a> </p>
        <div className="chapters">
            <div className="cuny">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/3vz2JzniNuyCM9kwa4ow75/1120ead85605d0e23b5d878b460d8fd6/cuny_illo.svg" />
                <h3>CUNY</h3>
            </div>
            <div className="notre">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/6H6oHGvE566yjwezeUHfLJ/e290601f7c9f5b9036b4de1ca4d07a3e/drexel_illo.svg" />
                <h3>Notre Dame</h3>
            </div>
            <div className="silicon">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/1mGm4Q0DXIHn3Sxtcof9LV/8d56ca2829328dd61f52e85478cf8611/caltech_illo.svg" />
                <h3>Silicon Valley</h3>
            </div>
            <div className="toronto">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/42x7wH5Pbr0lI1fol1RlVv/e53a157a2fde98b1072e0f78e2dc131f/brandeis_illo.svg" />
                <h3>Toronto</h3>
            </div>
            <div className="andmore">
                <img src="https://images.ctfassets.net/kcw3l04aboxk/2j7PAWmDhyL2F4DXMY0Cmk/e9803465be4b6d9800b216aa6a9eb42c/more_illo.svg" />
                <h3>And more</h3>
            </div>
        </div>
    </div>
)
export default CommunityChapters;