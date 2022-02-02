import React from "react";
import logo from '../../assets/ball.png';
import './Header.css';

const Header = () => {
  return (
  <div className="h-fond">
    <div >
        <div className="h-fond2">
      <img className="m-img" src={logo} alt="ballon" />
      <img className="m-img" src={logo} alt="ballon" />
      <img className="m-img" src={logo} alt="ballon" />
      </div>
      <h1 className="h1-header"> Recherche ton joueur</h1>
    </div>
  </div>
  );
};

export default Header;
