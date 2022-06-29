import React, { useState } from 'react';
import ResourceDropdown from '../resourcesdropdown/resourcesdrop.component';
import { BsSearch } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import './navbar.styles.scss';
import FadeMenu from '../community-dropdown/communitydrop.component';
import searchModal from '../search-model/search-model.component';
import SearchModal from '../search-model/search-model.component';



const NavBar = ({toggleModal}) => {

const [Dropdown,setDropdown] = useState(false)

const toggleDropdown = () => {
  setDropdown(!Dropdown)
}

  return (
    <div className="navbar">

    <ul>
      <li><a className="logo" href='#'>Codecademy</a></li>
      <li><a href='#'>Catalog</a></li>
      <li onClick={toggleDropdown}>Resources<IoMdArrowDropdown/><ResourceDropdown dropdown={Dropdown}/></li>
      <li><FadeMenu/></li>
      <li><a href='#'>Pricing</a></li>
      <li><a href='#'>Business Solutions</a></li>
     
      <BsSearch className='search_icon' onClick = {toggleModal} />
      
      <a className='login' href='#'>Log In</a>
      
    </ul>

  </div>)
}
export default NavBar;