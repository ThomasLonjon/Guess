import Slider from "../components/Slider";
import ButtonGithub from "../components/ButtonGithub";
import Logo from "../components/Logo";
import MyMap from "../components/MyMap";

export default function Home() {
  return (
    <header className="App-header">
      <Logo />
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

      <Slider maxRange={30} defaultRange={8} unit="s" />
      <MyMap />
    </header>
  );
}
