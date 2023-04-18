import React, { useState } from 'react'
import { render } from 'react-dom'


function NameForm (props){
  console.log(props)
  const [pseudo, setPseudo] = useState(props);

  // const username = props.username;
  // if (username){
  //    "Welcome" (this.props.username)
  // };
  
      return ( 
        <>
        <h1>{props.guess}</h1>
        <h3>{props.quizz}</h3>
        <br />
        <h1>{props.account}</h1>
        <br />

       <form>
        <label> {props.username}
          <input 
          type='text' placeholder='@PrincessAmidala'
          onChange={(e)=>  setPseudo(e.target.value)}/>
        </label> 
        <br /> <h2>{props.avatar}</h2>
       </form>

       <br />

       <div className='rules'><h1>{props.rules}</h1></div>
       <br />

       <div className='questions'><h3>{props.questions}</h3></div>
       <div className='time'><h3>{props.time}</h3></div>
       <br />
       <h1>{props.theme}</h1>
       <br />
       <div className='student'>{props.student}</div>
       
       </>
      );
      
  }

 
export default NameForm;
  