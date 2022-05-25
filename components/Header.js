import React from "react";
import logodesk from "../public/Assets/logo-desktop.png";
import icon from "../public/Assets/icon.png";
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Image
          className="logo-desk"
          src={logodesk}
          alt="PUBG BATTLEGROUND logo"
        />
      </div>
      <nav className="nav-desktop">
        <a className="nav-link" href="#about">about the event</a>
        <a className="nav-link" href="#rewards">rewards</a>
        <a className="nav-link" href="#account">account</a>
      </nav>
      <nav className="nav">
        <button className="nav-button">login</button>
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