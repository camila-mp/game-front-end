import React from "react";
import Image from "next/image";
import prize_coupons_large from "../public/Assets/prize_coupons_large.png";
import nickel_box_large from "../public/Assets/nickel_box_large.png";
import plus_sign from "../public/Assets/plus_sign.png";

const PicturesPrizeBox2 = () => {
  return (
    <section className="pictures-container">
      <div className="picture coupons-large">
        <Image
          src={prize_coupons_large}
          alt="contraband coupons"
        />
      </div>
      <div className="picture nickel-box-large">
        <Image
          src={nickel_box_large}
          alt="nickel box"
        />
      </div>
      <div className="picture plus-sign">
        <Image
          src={plus_sign}
          alt="plus sign"
        />
      </div>
    </section>
  )
}

export default PicturesPrizeBox2;