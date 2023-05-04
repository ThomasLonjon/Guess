import React from "react";
import Logo from "../components/Logo";
import ButtonGithub from "../components/ButtonGithub";
import Button from "../components/Button";

export default function AboutUs() {
  return (
    <section className="pageStyle">
      <div className="about">AboutUs</div>
      <Logo />
      <div className="buttonstudents">
        <Button text="We are the group of students of Wild Code School" />
      </div>
      <br />
      <div className="buttonsgithub">
        <ButtonGithub devName="Adèle" devLink="./" />
        <ButtonGithub devName="J-M" devLink="./" />
        <ButtonGithub devName="Thomas" devLink="./" />
        <ButtonGithub devName="Alexandre" devLink="./" />
      </div>
    </section>
  );
}
