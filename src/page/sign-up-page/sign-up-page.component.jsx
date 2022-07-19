import React, { useEffect, useState } from 'react';



import './sign-up-page.styles.scss';

import {FiAlertCircle} from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GrFacebook } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

 
const SignUpPage = () => {
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
 
    <div className="sign-up-page">
   <form onSubmit={handleSubmit}>
      <h1>Get started for free</h1>

      <div className='e-mail'>
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
      <div className='passwrd'>
         <label htmlFor='password'>Password <FiAlertCircle className='alert'/></label>
         <input
            type="text"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
         />
      </div>
      <p>{formErrors.password}</p>
      <button type='submit' className='signup-butn'>Sign Up</button>
      <small className='signing'>By signing up for Codecademy, you agree to Codecademy's   </small>

      <small className='ser-poly'>
         <a className='termsofservice' href='#'>Terms of Service  </a> & <a className='pri-vacy' href='#'>Privacy Policy </a>
      </small>



      <div className='other-op'>
         <h3>Or Sign Up using:</h3>
         <div className='otherbtn'>
            <button type='submit' className='linkdin'><BsLinkedin /></button>
            <button type='submit' className='google'><FcGoogle /></button>
            <button type='submit' className='facebook'><GrFacebook /></button>
            <button type='submit' className='github'><BsGithub /></button>
           
         </div>

      </div>
   </form>
</div>

)
}
export default SignUpPage;