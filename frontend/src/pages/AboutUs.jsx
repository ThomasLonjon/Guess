import React from "react";
import LogoAboutUs from "../components/LogoAboutUs";
import ButtonGithub from "../components/ButtonGithub";
import NavButton from "../components/NavButton";

export default function AboutUs() {
  return (
    <section className="pageStyle">
      <div className="title">About Us</div>
      <LogoAboutUs />
      <div className="buttonstudents">
        <p>We are the group of students of Wild Code School</p>
      </div>
      <div className="buttonsgithub">
        <ButtonGithub devName="Adèle" devLink="https://github.com/adelemanga" />
        <ButtonGithub devName="J-M" devLink="https://github.com/JMdjnt" />
        <ButtonGithub
          devName="Thomas"
          devLink="https://github.com/ThomasLonjon"
        />
        <ButtonGithub
          devName="Alexandre"
          devLink="https://github.com/Alexandre78R"
        />
      </div>
      <NavButton
        className="newQuizz2"
        pageName="/Results"
        content="Back to Results "
      />
    </section>
  );
}
