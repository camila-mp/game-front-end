import React from "react";
import PrizeBox from "../components/PrizeBox";
import Image from "next/image";
import grafiti from '../public/Assets/img-pubggraffitti.png'

const Rewards = () => {
  const title_first_prize = '1 GRAND PRIZE WINNER';
  const title_other_prizes = '9 WINNERS';
  const grand_prize = 'CONTRABAND COUPONS, NICKEL G-COIN BOX AND PUBG X STEELSERIES GEAR';
  const other_prizes = 'CONTRABAND COUPONS AND NICKEL G-COIN BOX';

  return (
    <section className="rewards-container">
      <h6>vikendi wonderland giveaway</h6>
      <h2>the event rewards</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit tinci dunst.
        Nam pulvinar lacinia nisl quis mollis gurqva.
        Phasellus ullamcorper, mauris rhoncus faucibus pharetr.
      </p>
      <div className="prize-boxes">
        <PrizeBox
          title={title_first_prize}
          prizes={grand_prize}
          color={'yellow'}
        />
        <PrizeBox 
          title={title_other_prizes}
          prizes={other_prizes}
          color={'blue'}
        />
      </div>
      <div className="grafiti-wrapper">
        <Image
          src={grafiti}
          alt="PUBG Graffitti"
        />
      </div>
    </section>
  )
}

export default Rewards;