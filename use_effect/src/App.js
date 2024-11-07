import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

                    // useEffect calls itself whenever a page is opened or
                    // there is any changes in a state

                    // useEffect takes two parameter 
                      // 1. Arrow function
                      // 2. Dependencies
          // example:  useEffect( ()=>{}, [])     //  []= dependencies

  let [counter, setCounter] = useState(1);

  let changeCount = ()=>{
      setCounter(counter+1);
  }

  useEffect( ()=>{
    console.log("Hello Soumik!");
  },[counter]);   // Wheneven there is a changes in counter, useEffect will be called


  return (
    <div className="App">
        <div>{counter}</div>
        <button onClick={changeCount}>Count</button>
    </div>
  );
}

export default App;
