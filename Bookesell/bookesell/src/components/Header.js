import React from 'react';
import image1 from './image/site-logo.svg'
import cart from './image/cart.svg'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div className="Main-content">
        <div className='Header'>
          <div className='logo' title='Tatvasoft'> <Link to='/' style={{ textDecoration: 'none' }}><img src={image1}/></Link> </div>
          <div className="nav-wrapper">
                <div className="top-right-bar">
                  <ul className="top-nav-bar">
                  <Link to="/login" style={{ textDecoration: 'none' }}><li>Login </li></Link>
                    <spam>|</spam>
                    <Link to="/register" style={{ textDecoration: 'none' }}><li>Register </li></Link>
                  </ul>
                  <ul className="cart-country-wrap">
                    <li className="cart-link">
                    <Link to="/cart" style={{ textDecoration: 'none' }}><img src={cart} alt="cart" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
        {/* <div className='search'>
          <div className='header-search'>
            <div className='header-search-area'>
              <input className='placeholder' type="text" placeholder='Search...'/>
              <button type='submit' className='btn1'><img src={search}/>Search</button>
              <button type='submit' className='btn2'>Cancel</button>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
  
  export default Header;
  