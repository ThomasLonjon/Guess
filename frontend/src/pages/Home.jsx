import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import MyMap from "../components/MyMap";

export default function Home() {
  return (
    <header className="pageStyle">
      <Logo />
      <NavButton pageName="/CreateAccount" />
      <MyMap />
    </header>
  );
}
