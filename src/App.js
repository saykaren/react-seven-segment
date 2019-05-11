import React, {useState} from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';
import Colors from "./Components/Colors";
import useInterval from './Helpers/useInterval';


function App() {

  const [counter, setCount] = useState(0);

  function incrememt() {
    setCount(counter + 1);
  }

  useInterval(incrememt, 1000);

  function wordKaren() {
    var result = document.getElementById('inputHere').value;
    var secondResult = document.getElementById('resultHere');
    secondResult = result;
    return secondResult;
  }

  return (
    <div className="App">
      <button onClick={incrememt}>Count</button>
      <div className={"container"}>
        <InputToSevenSegments
          number={'#  ' + counter}
          className={'greenglow'}
          colors={Colors.purple}
        />
      </div>
    
      <div className="App"> 
        <button onClick={wordKaren}>Be Creative</button>
        <input type="text"></input>
        <div className={"container"}>
          <InputToSevenSegments
            number={'# '+ counter}
            className={'greenglow'}
            colors={Colors.rainbow}
          />
        </div>
      </div>

      <div className="App"> 
        <button onClick={wordKaren}>Trying again</button>
        <input type="text" id="inputHere"></input>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <h2 id="resultHere">I am here</h2>

      </div>
    </div>
  );


}




const domContainer = document.querySelector('#karenId');


export default App;
