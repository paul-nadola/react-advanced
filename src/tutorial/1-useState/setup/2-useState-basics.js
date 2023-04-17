import React, { useState } from 'react';
// useState - function
const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  const handleClick = () =>{
    if(text === 'random title'){
    setText('hello world')
    }
    else{
      setText('random title')
    }
  }
  return (
  <React.Fragment>
  <h2>useState basic example</h2>
  <h1>{text}</h1>
  <button className='btn' onClick={handleClick}>Change Title</button>
  </React.Fragment>);
};

export default UseStateBasics;
