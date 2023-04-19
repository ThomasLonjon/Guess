import Logo from "../components/Logo";
import NavButton from "../components/NavButton";

export default function Home() {
  return (
    <header className="pageStyle">
      <Logo />
      <NavButton pageName="/CreateAccount" />
    </header>
  );
}
