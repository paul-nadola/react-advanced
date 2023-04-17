import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const[size, setSize] = useState(window.innerWidth)
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('Hi!')
    window.addEventListener('resize', checkSize)
    return () => {//good practice to set a clean up fn after a user effect
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  }/*YOU CAN ALSO USE THE SECOND ARG ,
  PASS AN EMPTY ARRAY TO SERVE THE SAME PURPOSE AS A
  CLEANUP FN*/)
  return (<>
  <h2>useEffect cleanup</h2>
  <h1>window</h1>
  <h2>{size} PX</h2>
  </>);
};

export default UseEffectCleanup;
