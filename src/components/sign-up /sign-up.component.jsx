import React, { useEffect, useState } from 'react';

import {FiAlertCircle} from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

import './sign-up.styles.scss';

const SignUp = () => {
   const initialValues = { email: "", password: "" };
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});
   const [isSubmit, setIsSubmit] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
      //    console.log(formValues);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
   };

   useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
         console.log(formValues);
      }
   }, [formErrors])

   const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
         errors.email = "Please enter a valid email address.";
      } else if (!regex.test(values.email)) {
         errors.email = "Please enter a valid email address.";
      }
      if (!values.password) {
         errors.password = "Password must include at least 8 characters.";
      } else if (values.password.length < 8) {
         errors.password = "Password must include at least 8 characters.";
      }
      return errors;
   };

   return (
      <div className='sign-up'>
         <img src='https://www.codecademy.com/webpack/73cf4baedce567ebc4ec4b42d0df1927.jpg' />
         <div className='signup-part'>
            <form onSubmit={handleSubmit}>
               <h1>Join the millions learning to code <br />
                  with Codecademy for free<br />
               </h1>

               <div className='email'>
                  <label htmlFor='email'>Email</label>
                  <input
                     type="text"
                     name="email"
                     id="email"
                     value={formValues.email}
                     onChange={handleChange}
                  />

               </div>
               <p>{formErrors.email}</p>
               <div className='paswrd'>
                  <label htmlFor='password'>Password <FiAlertCircle className='alert-icon'/></label>
                  <input
                     type="text"
                     name="password"
                     id="password"
                     value={formValues.password}
                     onChange={handleChange}
                  />
               </div>
               <p>{formErrors.password}</p>
               <button type='submit' className='signup'>Sign Up</button>
               <small className='by-signing'>By signing up for Codecademy, you agree to Codecademy's   </small>

               <small className='ser-pol'>
                  <a className='terms-of-service' href='#'>Terms of Service  </a> & <a className='privacy' href='#'>Privacy Policy </a>
               </small>



               <div className='other'>
                  <h3>Or Sign Up using:</h3>
                  <div className='other-btn'>
                     <button type='submit' className='linkdin'><BsLinkedin /></button>
                     <button type='submit' className='google'><FcGoogle /></button>
                     <button type='submit' className='facebook'><GrFacebook /></button>
                     <button type='submit' className='github'><BsGithub /></button>
                    
                  </div>

               </div>
            </form>
         </div>

      </div>
   )
}
export default SignUp;

