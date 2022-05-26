import React from 'react';
import { useRef } from 'react';
import './Register.css'

const Register = () => {

    const firstname = useRef();
    const lastname = useRef();
    const email = useRef();
    const password = useRef();
    const confirmpassword = useRef();
    const submithandler = (e) => {
        e.preventDefault();
    }
    return (
      <div className="register-container">
      <form onSubmit={submithandler}>
        <div className='breadcrumb-wrapper'>
            <ol>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>-</p>
                </li>
                <li>
                  <p>Create an Account</p>
                </li>
            </ol>
        </div>
        <h1 className='headername'>Login or Create an Account</h1>
        <div className='Account'>
          <h2>Personal Information</h2>
          <hr></hr>
          <p>Please enter the following information to create your account.</p>
          <div className='personalinformation'>
                <div className='infotext'>
                    <p>First Name *</p>
                    <input type='text' ref={firstname} required/>
                </div>
                <div className='infotext'>
                    <p>Last Name *</p>
                    <input type='text' ref={lastname} required/>
                </div>              
          </div>
          <div className='infotext1'>
              <p>Email Address *</p>
              <input type='email' ref={email} required/>
          </div> 
          <h2>Login Information</h2>
          <hr></hr>
          <div className='personalinformation'>
                <div className='infotext'>
                    <p>Password *</p>
                    <input type='password' ref={password} required/>
                </div>
                <div className='infotext'>
                    <p>Confirm Password *</p>
                    <input type='password' ref={confirmpassword} required/>
                </div>              
          </div>
          <button type="submit" className='registerbtn1'>Register</button>

        </div>
      </form>
      </div>
    );
  }
  
  export default Register;
  