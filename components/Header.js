import React from "react";
import logo from "../public/Assets/logo.png";
import icon from "../public/Assets/icon.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Image
          className="logo"
          src={logo}
          alt="PUBG BATTLEGROUND logo"
        />
      </div>
      <nav className="nav">
        <button className="nav-button">LOGIN</button>
        <div className="icon-container">
          <Image
            src={icon}
            alt="globe icon"
          />
        </div>
        
      </nav>
    </header>
  )
}

export default Header;