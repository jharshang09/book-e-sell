import React from 'react';
import './Footer.css'
import image1 from './image/site-logo.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <img src={image1}/>
            <p>	&copy; 2022 Tatvasoft.com. All rights reserved. </p>
        </div>
    );
}

export default Footer;