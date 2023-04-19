import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Hey from "./pages/Hey";
import ChooseRules from "./pages/ChooseRules";
import ChooseThemes from "./pages/ChooseThemes";
import Question from "./pages/Question";
import Results from "./pages/Results";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Hey" element={<Hey />} />
        <Route path="/ChooseRules" element={<ChooseRules />} />
        <Route path="/ChooseThemes" element={<ChooseThemes />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
export default App;
