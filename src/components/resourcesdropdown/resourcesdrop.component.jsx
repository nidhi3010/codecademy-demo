import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IoMdArrowDropdown } from "react-icons/io";

export default function ResourceMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
         style={{"margin":"-4px","color":"black","lineHeight":"1.5rem"}}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        
      >
        Resources
        <IoMdArrowDropdown/>
      </Button>
    
      <Menu 
      
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Challenges</MenuItem>
        <MenuItem onClick={handleClose}>Docs</MenuItem>
        <MenuItem onClick={handleClose}>Cheatsheets</MenuItem>
        <MenuItem onClick={handleClose}>Articles</MenuItem>
        <MenuItem onClick={handleClose}>Videos</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
        <MenuItem onClick={handleClose}>Carrer Center</MenuItem>
      </Menu>
    </div>
  );
}






































// import React from 'react';

// import './resourcesdrop.styles.scss';

// import { Dropdown } from 'semantic-ui-react';

// const ResourceDropdown = ({dropdown}) => {
//   return(
//     <div className='drop-down'>
//   {dropdown &&  (
   
//       <Dropdown.Menu className='menu'>
//        <Dropdown.Item text='Projects' description='New' href="#"/>
//       <Dropdown.Item text='Challenges'/>
//         <Dropdown.Item text='Docs' />
//         <Dropdown.Item text='Cheatsheets' />
//         <Dropdown.Item text='Articles' />
//         <Dropdown.Item text='Videos' />
//         <Dropdown.Item text='Blog' />
//         <Dropdown.Item text='Carrer Center' />
//       </Dropdown.Menu>
   
//     )
//   }
//   </div>
//   )}
//   export default ResourceDropdown;
  

