import React from "react";
import { useState } from "react";
import Switch from '@mui/material/Switch';

import { Link } from "react-router-dom";
import { BiCheck } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';
import Table from 'react-bootstrap/Table';
import './price-table.styles.scss';

const PriceTable = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true);
    }



    return (
        <div className="price-table">
            <Table className="table" striped bordered hover>
                <thead className="thr">
                    <tr className="tr1">
                        <th className="th1">
                            <h1>Our <br />plans</h1>
                        </th>
                        <th className="th2">
                            <h2>BASIC</h2>
                            <span>₹0</span>
                            <p>Interactive lessons & <br /> daily practice.</p>
                            <Link className="lisi" to="signup">
                                Sign Up
                            </Link>
                        </th>


                        <th className="toggle-th3">
                            <div className="toggle-switch">
                                <p>Pay Annually</p>
                                <Switch {...label} onClick={toggler} />
                                <p>Pay Monthly</p>
                            </div>
                            {toggle ?
                                <div className="on">
                                    <h2>PRO</h2>
                                    <p><span>₹999</span> a month</p>
                                </div>
                                :

                                <div className="off">
                                    <h2>PRO</h2>
                                    <p className="save">Save ₹7,000!</p>
                                    <p className="billed-yearly"><span>₹416</span><b>.58</b>  month,<br /> billed yearly</p>
                                </div>
                            }
                            <p className="learn">Learn, practice & <br /> apply job-ready skills.</p>
                            <a href="#" className="upgrade">Upgrade Now</a>
                        </th>


                        <th className="th4">
                            <img src="https://www.codecademy.com/_portal/_next/static/images/teams.21ef45b14a2bbf35d31013ef6a8af43e.svg" />
                            <h2>TEAMS</h2>
                            <p>Get Codecademy for<br />your whole team.</p>
                            <a href="#">Get a Quote</a>
                        </th>
                    </tr>
                </thead>

                <tbody className="tb1">
                    <tr className="tb1tr-1">
                        <th className="tb1th-1">
                            <span>Learning</span>
                        </th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                    </tr>
                    <tr className="tb1tr-2">
                        <th className="tb1th-2">
                            <span>Basic Courses</span>
                        </th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>

                    </tr>
                    <tr className="tb1tr-3">
                        <th className="tb1th-3">
                            <span>Members-Only Content</span>
                        </th>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                </tbody>

                <tbody className="tb2">
                    <tr className="tb2tr-1">
                        <th className="tb2th-1">
                            <span>Practice & Application</span>
                        </th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                    </tr>
                    <tr className="tb2tr-2">
                        <th className="tb2th-2">Mobile Practice</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}>Limited</td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><b>Unlimited</b></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><b>Unlimited</b></td>
                    </tr>
                    <tr className="tb2tr-3">
                        <th className="tb2th-3">Peer Support</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                    <tr className="tb2tr-4">
                        <th className="tb2th-4">Real-world Projects</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                    <tr className="tb2tr-5">
                        <th className="tb2th-5">Step-by-step Guidance</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                    <tr className="tb2tr-6">
                        <th className="tb2th-6">Certificates of Completion</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                </tbody>
                <tbody className="tb3">
                    <tr className="tb3tr-1">
                        <th className="tb3th-1">
                            <span>Team Support</span>
                        </th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                    </tr>
                    <tr className="tb3tr-2">
                        <th className="tb3th-2">Team Performance Reports</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                    <tr className="tb3tr-3">
                        <th className="tb3th-3">Unlimited License Switching</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                    <tr className="tb3tr-4">
                        <th className="tb3th-4">Flexible Start Dates</th>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BsX style={{ "color": "#9E9E9E", "fontSize": "1.5rem" }} /></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><BiCheck style={{ "color": "#1557FF", "fontSize": "1.5rem" }} /></td>
                    </tr>
                </tbody>
                <tbody className="tb4">
                    <tr className="tb4tr-1">
                        <td style={{ "borderRight": "1px solid #E0E0E0" }}></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><Link className="sili" to="signup">Sign Up</Link></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><a href="#" className="upgrade">Upgrade Now</a></td>
                        <td style={{ "borderRight": "1px solid #E0E0E0", "borderBottom": "1px solid #E0E0E0" }}><a href="#">Get a Quote</a></td>

                    </tr>

                </tbody>
            </Table>
        </div>
    )
}
export default PriceTable;