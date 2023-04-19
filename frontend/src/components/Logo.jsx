import logoGuessWhat from "../assets/img/LogoGuessWhat.png";

function Logo() {
  return (
    <div className="logoBackground">
      <img className="logo" src={logoGuessWhat} alt="logoGuessWhat" />
    </div>
  );
}

export default Logo;
