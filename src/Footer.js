import React from 'react';
import './Footer.css';

export const Footer =()=> {
    return(
        <div className='footer'>
            <div className='company'>
                <h2>Vashudev Sharma & Co.</h2>
            </div>
            <div className='social'>
                <ul>
                    <li><a href="#">TwitterX</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Behance</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Pinterest</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>
            <div className='copy'>
                <span>&#169; Copyright Vashudev Sharma All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;