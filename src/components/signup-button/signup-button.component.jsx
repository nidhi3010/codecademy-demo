import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


import './signup-button.styles.scss';

const SignUpButton = () => {

const {pathname} = useLocation();

console.log(pathname);

return (
    <div>
   { pathname !== '/' && pathname !== '/signup' && (<div className="signup-btn">
    
        <Link className='sign-up' to="signup">
            Sign Up
        </Link>
    </div>)}
    </div>
)
}
export default SignUpButton;