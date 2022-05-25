import React from "react";
import Image from "next/image";
import line from "../public/Assets/line.png";

const Step = ({ title, text, children}) => {
  return (
    <section className="individual-step">
      <h6>{ title }</h6>
      <p>{ text }</p>
      { children }
      <div className="pic-line">
        <Image
          src={line}
          alt="line"
        />
      </div>
    </section>
  )
}

export default Step;