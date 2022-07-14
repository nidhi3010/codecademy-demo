import React, { useState } from 'react';
import ResourceDropdown from '../resourcesdropdown/resourcesdrop.component';


import './navbar.styles.scss';
import FadeMenu from '../community-dropdown/communitydrop.component';

import SearchModal from '../search-model/search-model.component';
import ResourceMenu from '../resourcesdropdown/resourcesdrop.component';
import { Link, useHistory } from 'react-router-dom';
import LoginButton from '../login-button/login-button.component';



const NavBar = ({}) => {

const [Dropdown,setDropdown] = useState(false);
const history = useHistory("")

const toggleDropdown = () => {
  setDropdown(!Dropdown)
}

  return (
    <div className="navbar">

    <ul>
      <li><div className="logo" onClick={() => history.push("/")}>Codecademy</div></li>
      <li><a href='#'>Catalog</a></li>
      <li><ResourceMenu/></li>
      <li><FadeMenu/></li>
      <li onClick={() => history.push("/")}>Pricing</li>
      
      <li><a href='#'>Business Solutions</a></li>
     
      
    </ul>
   
    <SearchModal/>
     
    <LoginButton/>
    
  </div>
  )
}
export default NavBar;