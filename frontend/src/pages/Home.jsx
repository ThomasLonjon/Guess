import Counter from "../components/Counter";
import logo from "../assets/logo.svg";
import ButtonGithub from "../components/ButtonGithub";
import Slider from "@components/Slider";

export default function Home() {
  return (
    <header className="App-header">
      <ButtonGithub devName="Adèle" devLink="" />
      <ButtonGithub
        devName="Alexandre"
        devLink="https://github.com/Alexandre78R"
      />
      <ButtonGithub devName="Jean-Maxime" />
      <ButtonGithub
        devName="Thomas"
        devLink="https://github.com/ThomasLonjon"
      />

      <Slider maxRange={30} defaultRange={8} unit={"s"} />
    </header>
  );
  s;
}
