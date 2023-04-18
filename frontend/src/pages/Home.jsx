import Logo from "../components/Logo";
import NavButton from "../components/NavButton";

export default function Home() {
  return (
    <header className="App-header">
      <Logo />
      <NavButton pageName="/CreateAccount" />
    </header>
  );
}
