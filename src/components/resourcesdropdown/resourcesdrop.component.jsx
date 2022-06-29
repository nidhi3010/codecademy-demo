import React from 'react';

import './resourcesdrop.styles.scss';

import { Dropdown } from 'semantic-ui-react';

const ResourceDropdown = ({dropdown}) => {
  return(
    <div className='drop-down'>
  {dropdown &&  (
   
      <Dropdown.Menu className='menu'>
       <Dropdown.Item text='Projects' description='New' href="#"/>
      <Dropdown.Item text='Challenges'/>
        <Dropdown.Item text='Docs' />
        <Dropdown.Item text='Cheatsheets' />
        <Dropdown.Item text='Articles' />
        <Dropdown.Item text='Videos' />
        <Dropdown.Item text='Blog' />
        <Dropdown.Item text='Carrer Center' />
      </Dropdown.Menu>
   
    )
  }
  </div>
  )}
  export default ResourceDropdown;
  