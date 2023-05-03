import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import SubTitle from "../components/SubTitle";

export default function Home() {
  return (
    <header>
      <div className="title" style={{ fontSize: 100 }}>
        Guess <br /> What ?
      </div>

      <SubTitle content="The Great Quizz" />

      <Logo />
      <NavButton
        className="signInButton"
        pageName="/CreateAccount"
        content="Sign In !"
      />
    </header>
  );
}
