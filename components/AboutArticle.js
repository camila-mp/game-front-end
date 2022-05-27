import React from "react";
import LoginOrCreateButton from "./LoginOrCreateButton";

const AboutArticle = () => {
  return (
    <article className="about-event-container">
      <h6>vikendi wonderland giveaway</h6>
      <h2>about the event</h2>
      <div className="gradline"/>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar lacinia nisl quis mollis. Curabitur fringilla euismod arcu, sit amet maximus mauris sodales id. Aenean at consectetur turpis. Phasellus semper nisi eget eros rhoncus faucibus pharetra.
      </p>
      <p className="about-text">
        Phasellus ullamcorper, mauris rhoncus faucibus pharetra, est tellus mattis, nec congue erat tellus non nibh. Mauris euismod elementum tellus. Nulla eleifend eros vel purus facilisis sodales.
      </p>
      <div className="rules-div">
        <a className="rules-link" href="https://github.com/">see the official rules</a>
      </div>
      <LoginOrCreateButton text={'login or create account'}/>
    </article>
  )
}

export default AboutArticle;