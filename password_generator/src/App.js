import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {SC, UC, NC, LC} from './Data/PassChar'

function App() {

    let [UpperCase, setUpperCase] = useState(false);
    let [lowerCase, setlowerCase] = useState(false);
    let [numeric, setNumeric] = useState(false);
    let [specialChar, setSpecialChar] = useState(false);
    let [passwordLen, setPasswordLen] = useState(8);
    let [finalPassword, setFinalPassword] = useState('')
    let createPassword=()=>{
        // alert('Hello');

        let finalPass = '';

        let charSet = '';

        if( UpperCase || lowerCase || numeric || specialChar){
            if(UpperCase){
                charSet += UC;
            }
            if(lowerCase){
                charSet += LC;
            }
            if(numeric){
                charSet += NC;
            }
            if(specialChar){
                charSet += SC;
            }

                    // Generating final password
                    // Generating final password
            for(let i = 0; i < passwordLen; i++){
                finalPass += charSet.charAt( Math.floor(Math.random() * charSet.length));
            }
            setFinalPassword(finalPass)
        }
        else{
            alert('Please select 1 checkBox');
        }
    }

    let copyPass =()=>{
        navigator.clipboard.writeText(finalPassword)
    }

  return (
      <>
          <div className='passwordBox'>
              <h2>Password Generator</h2>

              <div className="passwordInputField">
                  <input type="text" readOnly value={finalPassword} /> 
                  <button onClick={copyPass}>Copy</button>
              </div>
              <div className='passLength'>
                  <label>Password length </label>
                  <input type='number' max={30} min={8} value={passwordLen} onChange={ (e)=>setPasswordLen(e.target.value)}/>
              </div>
              <div className='passLength'>
                  <label>UpperCase </label>
                  <input type='checkbox' checked={UpperCase} onChange={()=>setUpperCase(!UpperCase)}/>
              </div>
              <div className='passLength'>
                  <label>Lower Case</label>
                  <input type='checkbox' checked={lowerCase} onChange={()=>setlowerCase(!lowerCase)}/>
              </div>
              <div className='passLength'>
                  <label>Numbers </label>
                  <input type='checkbox' checked={numeric} onChange={()=>setNumeric(!numeric)}/>
              </div>
              <div className='passLength'>
                  <label>Special Symbols </label>
                  <input type='checkbox' checked={specialChar} onChange={()=>setSpecialChar(!specialChar)}/>
              </div>

              <button className="btn" onClick={createPassword}>Generate password</button>
          </div>
      </>
  );
}

export default App;
