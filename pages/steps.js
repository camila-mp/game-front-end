import React from "react";
import Step from "../components/Step";

const Steps = () => {
  const title1 = 'step 1';
  const text1 = 'Login to your PUBG Account';

  const title2 = 'step 2';
  const text2 = 'Link your gaming Account';

  const title3 = 'step 3';
  const text3 = 'Enter Sweepstakes';

  return (
    <section className="steps-container">
      <div className="steps-title">
        <h6>vikendi wonderland giveaway</h6>
        <h2>how to participate</h2>
      </div>
      <div className="steps-wrapper">
        <Step title={title1} text={text1}>
          <button className="login-btn">login</button>
        </Step>
        <Step title={title2} text={text2}/>
        <Step title={title3} text={text3}/>
      </div>
    </section>
  )
}

export default Steps;