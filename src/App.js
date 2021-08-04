import logo from './logo.svg';
import './App.css';
import Display from './components/display/Display';
import Keypad from './components/keypad/Keypad';
import { useState } from 'react';

function App() {
  const[result, setResult] = useState("");
  // const normal = (partial)=>{
  //   setResult(partial);
  // }
  // const calculate = (partial)=>{
  //   setResult(partial);
  // }
  const Handleclick = (partial)=>{
    setResult(result+partial);
  }
  const Handleclickequal = ()=>{
    let s = String(eval(result));
    setResult(s);
  }
  const Handleclear = ()=>{
    setResult("");
  }
  const HandleCE = ()=>{
    setResult(result.substring(0, result.length-1));
  }
  return (
    <div className="App">
      <div className="result">
        <Display result={result}/>
      </div>
      <div className="input">
        <Keypad HandleCE={HandleCE} Handleclear={Handleclear} Handleclick={Handleclick} Handleclickequal={Handleclickequal}/>
      </div>
    </div>
  );
}

export default App;
