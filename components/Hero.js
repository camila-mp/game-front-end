import React from "react";
import Image from 'next/image';
import spray from '../public/Assets/spray-bg.png';

const Hero = () => {
  return (
    <section className="hero-container">
      <Image
        className="spray"
        src={spray}
        alt="background spray"
      />
    </section>
  )
}

export default Hero;