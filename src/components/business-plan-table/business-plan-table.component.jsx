import React from "react";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Table from 'react-bootstrap/Table';
import './business-plan-table.styles.scss';
import { BiCheck } from 'react-icons/bi';
import { FiAlertCircle } from 'react-icons/fi';

const BusinessPlanTable = () => (
    <div className="busi-table">
        <Table className="bu-plan-table" striped bordered hover>

            <tbody className="t-body">
                <tr className="tr-1">
                    <td>
                        <span>Seats</span>
                    </td>
                    <td>5 to 25</td>
                    <td>25+</td>
                </tr>
                <tr className="tr-2">
                    <td><span>Technical skills catalog</span>
                        <Tooltip title="
                     The Codecademy catalog includes interactive lessons, interactive articles, and quizzes.
                     The Skillsoft catalog includes on-demand video,certification prep, and digital and audio books.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /><span style={{ "paddingLeft": "1.5rem" }}>Codecademy</span></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /><span style={{ "paddingLeft": "1.5rem" }}>Codecademy & Skillsoft</span></td>
                </tr>
                <tr className="tr-3">
                    <td>
                        <span>Projects, labs, and workspaces</span>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /><span style={{ "paddingLeft": "1.5rem" }}>Basic</span></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /><span style={{ "paddingLeft": "1.5rem" }}>Advanced</span></td>
                </tr>
                <tr className="tr-4">
                    <td>
                        <span>Certificates of completion</span>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-5">
                    <td>
                        <span> Mobile practice</span>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-6">
                    <td>
                        <span>Peer support</span></td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-7">
                    <td><span>Account dashboard</span>
                        <Tooltip title="
                    Manage learners, seat assignment, billing, and reporting all in one place.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-8">
                    <td><span>Progress and usage reporting</span>
                        <Tooltip title="
                    Track progress and get insights on how effectively your team is learning.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-9">
                    <td><span>Learner groups</span>
                        <Tooltip title="
                    Manage multiple training programs
                     by assigning team members to
                      different groups.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-10">
                    <td><span>Content assignment</span>
                        <Tooltip title="
                    Browse our full course catalog and assign content that fits your team's needs.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td><BiCheck style={{ "color": "#10162F", "fontSize": "1.5rem" }} /></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-11">
                    <td><span>Learning path customization</span>
                        <Tooltip title="
                    Curate content from our catalog to build your own custom learning paths.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-12">
                    <td><span>Skills benchmarking</span>
                        <Tooltip title="
                    Assessments are designed to support skill acquisition and deliver personalized content recommendations.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-13">
                    <td><span>Reporting API</span>
                        <Tooltip title="
                    Integrate new data into your main dashboards to easily track your team's progress.
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>
                    </td>
                    <td></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-14">
                    <td><span>Single sign-on</span></td>
                    <td></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-15">
                    <td><span>Onboarding</span></td>
                    <td></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
                <tr className="tr-16">
                    <td><span>LMS and LXP integrations</span>
                        <Tooltip title="
                    See the full list here
                   "  arrow style={{ "fontSize": "1.5rem" }}>
                            <Button ><FiAlertCircle style={{ "fontSize": "1rem", "color": "#000000", "marginLeft": "-3rem" }} /></Button>
                        </Tooltip>

                    </td>
                    <td></td>
                    <td><BiCheck style={{ "color": "#3A10E5", "fontSize": "1.5rem" }} /></td>
                </tr>
            </tbody>
        </Table>
    </div>
)
export default BusinessPlanTable;