import React from "react";
import Image from "next/image";
import prize_coupons from "../public/Assets/prize_coupons.png";
import mouse from "../public/Assets/mouse.png";
import mousepad from "../public/Assets/mousepad.png";
import nickel_box from "../public/Assets/nickel_box.png";
import keyboard from "../public/Assets/keyboard.png";
import headphone from "../public/Assets/headphone.png";
import plus_sign from "../public/Assets/plus_sign.png";

const PicturesPrizeBox1 = () => {
  return (
    <section className="pictures-container">
      <div className="picture coupons">
        <Image
          src={prize_coupons}
          alt="contraband coupons"
        />
      </div>
      <div className="picture nickel-box">
        <Image
          src={nickel_box}
          alt="nickel box"
        />
      </div>
      <div className="picture plus-sign">
        <Image
          src={plus_sign}
          alt="plus sign"
        />
      </div>
      <div className="picture headphone">
        <Image
          src={headphone}
          alt="headphone"
        />
      </div>
      <div className="picture keyboard">
        <Image
          src={keyboard}
          alt="keyboard"
        />
      </div>
      <div className="picture mouse">
        <Image
          src={mouse}
          alt="mouse"
        />
      </div>
      <div className="picture mousepad">
        <Image
          src={mousepad}
          alt="mousepad"
        />
      </div>

      <div className="background-rect-headphone"/>
      <div className="background-rect-keyboard"/>
      <div className="background-rect-mouse"/>
      <div className="background-rect-mousepad"/>
    </section>
  )
}

export default PicturesPrizeBox1;