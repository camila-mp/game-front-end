import React from "react";
import logo from "../public/Assets/logo.png";
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <Image
        src={logo}
        alt="PUBG BATTLEGROUND logo"
      />
      <nav>
        <button>Login</button>
      </nav>
    </header>
  )
}

export default Header;