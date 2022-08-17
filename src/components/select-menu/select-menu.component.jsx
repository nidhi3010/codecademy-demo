import React from "react";
import { CFormSelect } from '@coreui/react'

import './select-menu.styles.scss';
import { setRef } from "@mui/material";
import { style } from "@mui/system";

const SelectMenu = () => (
    <div className="select-menu">
    <CFormSelect 
    className="procorse"
    style={{"height":"2rem"}}
  aria-label="Default select example"
  options={[
    'Free + Pro courses',
    { label: 'Free + Pro courses', value: '1' },
    { label: 'Free Courses', value: '2' },
    { label: 'Pro Courses', value: '3'}
  ]}
/> 
<CFormSelect 
className="alllevel"
style={{"height":"2rem","marginLeft":"3rem"}}
aria-label="Default select example"
options={[
  'All Levels',
  { label: 'All Levels', value: '1' },
  { label: 'Beginner', value: '2' },
  { label: 'Intermediate', value: '3'},
  { label: 'Advanced', value: '4'}
]}
/> 
      <span>32 courses</span>


    </div>
)
export default SelectMenu;