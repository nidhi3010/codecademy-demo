import React from "react";

import './login-button.styles.scss';

import { Link } from "react-router-dom";

const LoginButton = () => (

    <div className="login-btn">
    <Link className='login' to="signin">
        Log In
    </Link>
    </div>
)
export default LoginButton;
