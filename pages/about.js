import React from "react";
import AboutArticle from "../components/AboutArticle";
import AboutCharacters from "../components/AboutCharacters";

const About = () => {
  return (
    <section className="about-page" id="about">
      <AboutArticle/>
      <AboutCharacters/>
    </section>
  )
}

export default About;