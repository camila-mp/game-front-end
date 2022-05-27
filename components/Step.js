import React from "react";

const Step = ({ title, text, children}) => {
  return (
    <section className="individual-step">
      <div className="text-and-btn">
        <h6>{ title }</h6>
        <p>{ text }</p>
        { children }
      </div>
      <div className="line"/>
    </section>
  )
}

export default Step;