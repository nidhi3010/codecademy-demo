import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ArticleSubAccordion() {
    return (
        <div className='article-subject-accordion'>
            <Accordion style={{ "width": "10%", "marginLeft": "17%", "backgroundColor": "#F5FCFF", "textDecoration": "none" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ "fontWeight": "700", "color": "#10162F" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ "fontSize": "1.25rem", "fontWeight": "700", "color": "#10162F" }}>Subjects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul className='article-subject-accor'>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Cloud Computing</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Code Foundations</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Computer Science</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Cybersecurity</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Data Analytics</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Data Science</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Data Visulization</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Developer Tools</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">DevOps</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Game Development</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Interview Prep</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#"></a>IT</li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Machine Learning</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Math</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Mobile Development</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Web Design</a></li>
                            <li style={{ "listStyleType": "none", "textAlign": "left", "marginLeft": "-34%" }}><a style={{ "textDecoration": "none", "color": "#10162F", "line-height": "2" }} href="#">Web Development</a></li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}