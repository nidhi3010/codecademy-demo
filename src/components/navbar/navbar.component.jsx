import React, { useState } from 'react';
import ResourceDropdown from '../resourcesdropdown/resourcesdrop.component';

import { IoMdArrowDropdown } from "react-icons/io";
import './navbar.styles.scss';
import FadeMenu from '../community-dropdown/communitydrop.component';

import SearchModal from '../search-model/search-model.component';
import ResourceMenu from '../resourcesdropdown/resourcesdrop.component';
import { Link, useHistory } from 'react-router-dom';



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
     
       <SearchModal/>
     
      <Link className='login' to="signin">
      Log In
      </Link>
      
    </ul>

  </div>)
}
export default NavBar;