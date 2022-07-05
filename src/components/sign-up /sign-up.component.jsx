import React,{useEffect, useState} from 'react';

import './sign-up.styles.scss';

const SignUp = () => {
  const initialValues = {email:"", password:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
     const { name,value } = e.target;
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
     if(Object.keys(formErrors).length === 0 && isSubmit) {
     console.log(formValues);
     } 
  },[formErrors])

  const validate = (values) => {
     const errors = {};
     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     if (!values.email) {
        errors.email = "Please enter a valid email address.";
     } else if (!regex.test(values.email)){
        errors.email = "Please enter a valid email address.";
     }
     if (!values.password) {
        errors.password = "Password must include at least 8 characters.";
       }else if (values.password < 8) {
          errors.password = "Password must include at least 8 characters.";
       }
       return errors; 
  };
 
return(
       <div className='sign-up'>
          <img src='https://www.codecademy.com/webpack/73cf4baedce567ebc4ec4b42d0df1927.jpg'/>
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
               <label htmlFor='password'>Password</label>
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

             </form>
             </div>
   
             </div>
)
}
export default SignUp;

// import React from 'react';
// //import 'antd/dist/antd.css';
// //import './index.css';
// import { Button, Form, Input } from 'antd';

// const SignUp = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       name="basic"
//       labelCol={{
//         span: 8,
//       }}
//       wrapperCol={{
//         span: 16,
//       }}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//       autoComplete="off"
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your username!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="remember"
//         valuePropName="checked"
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
        
//       </Form.Item>

//       <Form.Item
//         wrapperCol={{
//           offset: 8,
//           span: 16,
//         }}
//       >
//         <Button type="primary" htmlType="submit">
//           Sign Up
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default SignUp;