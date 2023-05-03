import Title from "@components/Title";
import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import SubTitle from "../components/SubTitle";

export default function Home() {
  return (
    <header className="pageStyle">
      <Title content="GUESS WHAT?" />
      <Logo />
      <NavButton pageName="/CreateAccount" />
      <SubTitle content="The Great Quizz" />
    </header>
  );
}
