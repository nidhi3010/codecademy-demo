import React, { useState } from 'react';
import ResourceDropdown from '../resourcesdropdown/resourcesdrop.component';

import { IoMdArrowDropdown } from "react-icons/io";
import './navbar.styles.scss';
import FadeMenu from '../community-dropdown/communitydrop.component';

import SearchModal from '../search-model/search-model.component';
import ResourceMenu from '../resourcesdropdown/resourcesdrop.component';



const NavBar = ({}) => {

const [Dropdown,setDropdown] = useState(false)

const toggleDropdown = () => {
  setDropdown(!Dropdown)
}

  return (
    <div className="navbar">

    <ul>
      <li><a className="logo" href='#'>Codecademy</a></li>
      <li><a href='#'>Catalog</a></li>
      <li><ResourceMenu/></li>
      <li><FadeMenu/></li>
      <li><a href='#'>Pricing</a></li>
      <li><a href='#'>Business Solutions</a></li>
     
       <SearchModal/>
     
      <a className='login' href='#'>Log In</a>
      
    </ul>

  </div>)
}
export default NavBar;