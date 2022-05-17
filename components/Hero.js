import React from "react";
import Image from 'next/image';
import spray from '../public/Assets/spray-bg.png';
import vikendi from '../public/Assets/VikendiWonderlandLogo.png';
import vikendi_desk from '../public/Assets/VikendiWonderlandLogo_desk.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="spray-wrapper">
        <Image
          className="spray"
          src={spray}
          alt="background spray"
        />
      </div>
      <div className="vikendi-wrapper">
        <Image
          className="vikendi"
          src={vikendi}
          alt="vikendi logo"
        />
      </div>
      <div className="vikendi-wrapper-desk">
      <Image
          className="vikendi"
          src={vikendi_desk}
          alt="vikendi logo"
        />
      </div>
      <button className="hero-button">login or create account</button>
    </section>
  )
}

export default Hero;