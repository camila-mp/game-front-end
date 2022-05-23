import React from "react";
import Image from 'next/image';
import spray_yellow from '../public/Assets/img-spraymask-yellow.png';
import spray_blue from '../public/Assets/img-spraymask-blue.png';

const PrizeBox = ({ title, prizes, sprayColor, children }) => {
  return (
    <section className="box">
      <div className="spray-wrapper-r">
        <Image
          src={sprayColor === 'blue' ? spray_blue : spray_yellow}
          alt="spray picture behind title"
        />
      </div>
      <h6 className="prize-title">{ title }</h6>
      { 
        children
      }
      <p>+++++ will receive {'>>>>>>>'}</p>
      <h6 className="prizes">{ prizes }</h6>
    </section>
  )
}

export default PrizeBox;