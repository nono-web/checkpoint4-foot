import React from 'react';
import logo from '../../assets/ball.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className="h2-fond">
          <div >
              <div className="h2-fond2">
            <img className="m-img" src={logo} alt="ballon" />
            <h1 className="h1-footer"> J'aime le Football</h1>
            <img className="m-img" src={logo} alt="ballon" />
            </div>
          </div>
        </div>
        );
      };

export default Footer;
