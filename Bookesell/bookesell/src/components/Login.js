import React from 'react';
import { useRef } from 'react';
import './Login.css'

const Login = () => {
  const email = useRef();
  const password = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    // axios.post('/api/login',)
    console.log(email.current.value);
    console.log(password.current.value);
  }

    return (
      <div className="container">
        <div className='breadcrumb-wrapper'>
            <ol>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>-</p>
                </li>
                <li>
                  <p>Login</p>
                </li>
            </ol>
        </div>
        <div className='Account'>
        <h1 className='headername'>Login or Create an Account </h1>
            <div className='newcustomer'>
                <h2>New Customer</h2>
                <hr></hr>
                <h3>Registration is free and easy.</h3>
                <ul>
                    <li>Faster checkout</li>
                    <li>Save multiple shipping addresses</li>
                    <li>View and track orders and more</li>
                </ul>
                <button type="submit" className='registerbtn'>Create an Account</button>
            </div>
            <div className='register'>
                <h2>Registered Customer</h2>
                <hr></hr>
                <h3>If you have an account with us. Please Log in.</h3>
                <form onSubmit={submithandler}>
                <div className='textfields'>
                    <p>Email Address *</p>
                    <input type='email' id='email' ref={email} required/>
                </div>
                <div className='textfields'>
                    <p>Password *</p>
                    <input type='password' id='password' ref={password} minlength='8' required/>
                </div>
                <button type="submit" className='loginbtn'>Login</button></form>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  