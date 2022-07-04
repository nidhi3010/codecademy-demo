import React, { useState } from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';



import './sign-in-page.styles.scss';
import { useHistory } from 'react-router-dom';
import NavBar from '../../components/navbar/navbar.component';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };

    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  const history = useHistory("");


  return (
    <div className='signin'>
    <NavBar />
      <h1>Log in to Codecademy</h1>
      <form action='' onSubmit={submitForm}>
        <div className='email-username'>
          <label htmlFor='email'>Email or Username</label>
          <input type="text" name="email" id="email" autoComplete='off'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='password'>
          <label htmlFor='password'>Password</label>
          <input type="text" name="password" id="password" autoComplete='off'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a className='forgot-pswrd' href='#'>I forgot my password</a>
        <button type='submit' className='btn'>Log in</button>

        <div className='other-option'>
          <h3>Or log in using:</h3>
          <div className='otherbtn'>
            <button type='submit' className='linkdin'><BsLinkedin /></button>
            <button type='submit' className='google'><FcGoogle /></button>
            <button type='submit' className='facebook'><GrFacebook /></button>
            <button type='submit' className='github'><BsGithub /></button>
            <button type='submit' className='twitter'><BsTwitter /></button>
          </div>
          <span>Not a member yet? </span>
          <div className='free-signup' onClick={() => history.push("/")}>Sign up for free</div>
        </div>


      </form>
    </div>
  )
}

export default SignIn; 