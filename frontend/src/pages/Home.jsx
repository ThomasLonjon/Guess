import Slider from "../components/Slider";
import ButtonGithub from "../components/ButtonGithub";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import avatar1 from "../../public/assets/img/avatar/avatar1.png";

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

      <Button buttonType="small" text="Sign in!" />
      <Button buttonType="big" text="Number of questions" />
      <Avatar avatarType="small" imageSrc={avatar1} />
      <Slider maxRange={30} defaultRange={8} unit="s" />
    </header>
  );
}
