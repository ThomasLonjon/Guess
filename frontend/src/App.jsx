
import { useState } from 'react';
import Timer from "./components/Timer";
import Text from "./components/Text";
import './App.css';

function App() {
  
  return (

    <div className="App">
      {/* <Timer time={30}/> */}
      <br />
      <Text student="We are group of students from the Wild Code School" guess="GUESS WHAT?" quizz="THE GREAT QUIZZ" account="CREATE ACCOUNT"  username ="Enter Pseudo: " 
       avatar="choose avatar"  rules="CHOOSE YOUR RULES!" questions="Number of questions" time="Time per question" theme="CHOOSE YOUR THEME!"  />
      <br />


      
    </div>
     )

     
    
    }


export default App;
