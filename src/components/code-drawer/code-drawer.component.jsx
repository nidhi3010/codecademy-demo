import React from "react";

import { SiCodecademy } from 'react-icons/si';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

import TextAreaWithLineNumber from 'text-area-with-line-number';

import './code-drawer.styles.scss';

const CodeDrawer = () => (

    <div className="code-drawer">
        <div className="line1">
            <SiCodecademy size={30} style={{ "marginLeft": "-37rem", "color": "white", "marginTop": "0.5rem" }} />
        </div>

        <div className="line2-left">
            <MdOutlineArrowBackIosNew size={25} style={{ "marginLeft": "-17rem", "color": "white", "marginTop": "0.7rem" }} />
            <p>Code</p>
        </div>

        <div className="line2-right">
            <MdArrowForwardIos size={25} style={{ "marginLeft": "17rem", "color": "white", "marginTop": "0.7rem" }} />
            <p>Output</p>
        </div>

        <div className="co-ou">
            <div className="code">
                <TextAreaWithLineNumber />
            </div>
            <pre className="output">output</pre>
        </div>

        <div className="line3">
          <button className="run">Run</button>
        </div>
    </div>
)
export default CodeDrawer;
