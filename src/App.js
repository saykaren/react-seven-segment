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
    setCount(counter + 10);
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
            number={"HELLO"}
          />
        </div>
      </div>
    </div>
  );


}

const e = React.createElement;



export default App;
