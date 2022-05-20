import React from "react";
import Image from 'next/image';
import spray_yellow from '../public/Assets/img-spraymask-yellow.png';
import spray_blue from '../public/Assets/img-spraymask-blue.png';
// import prize_coupons from '../public/Assets/prize_coupons.png';
// import prize_coupons_large from '../public/Assets/prize_coupons_large.png';
// import mouse from '../public/Assets/mouse.png';
// import mousepad from '../public/Assets/mousepad.png';
// import nickel_box from '../public/Assets/nickel_box.png';
// import nickel_box_large from '../public/Assets/nickel_box_large.png';
// import keyboard from '../public/Assets/keyboard.png';
// import headphone from '../public/Assets/headphone.png';
// import plus_sign from '../public/Assets/plus_sign.png';

const PrizeBox = ({ title, prizes, color, pictures }) => {
  return (
    <section className="box">
      <div className="spray-wrapper">
        <Image
          src={color === 'blue' ? spray_blue : spray_yellow}
          alt="spray picture behind title"
        />
      </div>
      <h2>{ title }</h2>
      <div className="pics-wrapper">
        {/* <div>
          <Image
            src={color === 'blue' ? spray_blue : spray_yellow}
            alt="spray picture behind title"
          />
        </div> */}
      </div>
      <p>+++++ will receive {'>>>>>>>'}</p>
      <h6>{ prizes }</h6>
    </section>
  )
}

export default PrizeBox;