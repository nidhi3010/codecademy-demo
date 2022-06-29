import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IoMdArrowDropdown } from "react-icons/io";

export default function FadeMenu() {
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
        Community
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
        <MenuItem onClick={handleClose}>Forums</MenuItem>
        <MenuItem onClick={handleClose}>Discord</MenuItem>
        <MenuItem onClick={handleClose}>Chapters</MenuItem>
        <MenuItem onClick={handleClose}>Events</MenuItem>
        <MenuItem onClick={handleClose}>Learner Stories</MenuItem>
      </Menu>
    </div>
  );
}