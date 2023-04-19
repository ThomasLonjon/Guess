import Text2 from "./components/Text2";
import "./App.css";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="title1">
        <Title content="GUESSWHAT?" />
        <Title content="CREATE ACCOUNT" />
        <Title content="HEY!" />
        <Title content="CHOOSE YOUR RULES!" />
        <Title content="CHOOSE YOUR THEME!" />
        <Title content="QUESTION" />
        <Title content="RESULTS" />
        <Title content="ABOUT US" />
      </div>

      <br />

      <div className="App">
        <Text2 content="The Great Quizz"> </Text2>
        <Text2 content="Enter Pseudo"> </Text2>
        <Text2 content="Choose Avatar" />
        <Text2 content="Welcome PrincessAmidala" />
        <Text2 content="Number of questions" />
        <Text2 content="Time per question" />
        <Text2 content="You Rule" />
        <Text2 content="We are group of student fron the Wild Code School" />
      </div>
    </>
  );
}
export default App;
