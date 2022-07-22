import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { BiChevronDown } from 'react-icons/bi';
//import './pro-courses-dropdown.styles.scss';

export default function AllLevelsMenu() {
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
                style={{ "color": "#10162F", "border": "1px solid #10162F", "backgroundColor": "#ffffff", "marginTop": "-3%", "marginLeft": "3%" }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            >
                All levels
                <BiChevronDown style={{ "fontSize": "1.5rem" }} />
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
                <MenuItem onClick={handleClose}>All levels</MenuItem>
                <MenuItem onClick={handleClose}>Beginner</MenuItem>
                <MenuItem onClick={handleClose}>Intermediate</MenuItem>
            </Menu>
        </div>
    );
}
