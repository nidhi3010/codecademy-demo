import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { BiChevronDown } from 'react-icons/bi';
//import './pro-courses-dropdown.styles.scss';

export default function ProCourseMenu() {
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
                style={{"backgroundColor":"yellow","marginLeft":"-17.7%","color":"#10162F"}}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            >
                Free + Pro courses
                <BiChevronDown style={{"fontSize":"1.5rem"}} />
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
                <MenuItem  style={{"backgroundColor":"darkcyan"}} onClick={handleClose}>Free + Pro courses</MenuItem>
                <MenuItem onClick={handleClose}>Free courses</MenuItem>
                <MenuItem onClick={handleClose}>Pro courses</MenuItem>
            </Menu>
        </div>
    );
}

