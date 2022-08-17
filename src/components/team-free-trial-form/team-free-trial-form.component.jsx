import React, { useEffect, useState } from 'react';
import './team-free-trial-form.styles.scss';

const TeamFreeTrialForm = () => {
    const initialValues = { firstname: "", lastname: "", companyname: "", email: "", phonenumber: "" };
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
        if (!values.firstname) {
           errors.firstname = "Please enter a name.";
        } 

        if (!values.companyname) {
           errors.companyname= "Please enter the name of your business.";
        } 

        if (!values.email) {
            errors.email= "Please enter a valid business email address.";
         } 
        
        return errors;
  
     };

    return (
        <div className="teamsfree-trialform">
            <form onSubmit={handleSubmit}>
                <h1>Start Your Team's<br />Free Trial</h1>
                <p className='invite'>Invite <b>up to 10 members of your team</b> to join a<br />free two-week trial.</p>

                <div className='first-name'>
                    <label htmlFor='firstname'>First Name *</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={formValues.firstname}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.firstname}</p>

                <div className='last-name'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={formValues.lastname}
                        onChange={handleChange}
                    />
                </div>

                <div className='company-name'>
                    <label htmlFor='companyname'>Company Name *</label>
                    <input
                        type="text"
                        name="companyname"
                        id="companyname"
                        value={formValues.companyname}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.companyname}</p>

                <div className='company-email'>
                    <label htmlFor='email'>Company Email Address *</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <p>{formErrors.email}</p>

                <div className='phone-number'>
                    <label htmlFor='phonenumber'>Phone Number</label>
                    <input
                        type="tel"
                        name="phonenumber"
                        id="phonenumber"
                        value={formValues.phonenumber}
                        onChange={handleChange}
                    />
                </div>

                <small className='bysi'>By signing up for Codecademy, you agree to Codecademy's</small> 
                <small className='tr-pr'>
                   <a href='#'>Terms of Service</a> & <a href='#'>Privacy Policy.</a>
                </small>

                <a className="create-team" href="#" >Create Your Team</a>
                
                <a className='partofteam' href='#'>Not part of a team?<b>Get started on your own</b></a>
                <p className='need-help'>Need Help?<a  href='#'>Contact Sales.</a></p>
            </form>
        </div>
    )
}
export default TeamFreeTrialForm;