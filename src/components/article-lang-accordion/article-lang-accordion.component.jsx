import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ArticleLangAccordion() {
    return (
        <div className='article-lang-accordion'>
            <Accordion className='article-accordion' style={{ "width": "10%", "marginLeft": "17%", "backgroundColor": "#F5FCFF", "textDecoration": "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ "fontWeight": "700", "color": "#10162F" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ "fontSize": "1.25rem", "fontWeight": "700", "color": "#10162F" }}>Languages</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Bash/Shell</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">C#</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">C++</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Go</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">HTML & CSS</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Java</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Java Script</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Kotlin</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">PHP</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Python</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">R</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Ruby</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">SQL</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Swift</a></li>
                        </ul>

                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}