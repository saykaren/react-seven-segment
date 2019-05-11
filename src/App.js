import React, {useState} from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';
import Colors from "./Components/Colors";
import useInterval from './Helpers/useInterval';
import SevenSegmentAdapter from './Components/SevenSegmentAdapter';

function App() {

  const [counter, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [endLetter, setLetter] = useState(0);

  function incrememt() {
    setCount(counter + 1);
  }
  useInterval(incrememt, 1000);

  //trying to make it move 
  function danceMove() {
    setLetter("." +endLetter);
    console.log("dance" + endLetter);
    
  }

  //useInterval(danceMove, 5000);

  

  

  function setMyNumber(event) {
    const karen = event.target.value;
    console.log("got here");
    setNumber(karen);
    if (setNumber.length < 10){
      let result = " "+karen;
      setNumber(result);
    } else {
      if (setNumber.length > 25) {
        let resultEnd = karen;
        setNumber(resultEnd);
      }
    }

  }


  return (
    // <div className="App">
    //   <button onClick={incrememt}>Count</button>
    //   <div className={"container"}>
    //     <InputToSevenSegments
    //       number={'#  ' + counter}
    //       className={'greenglow'}
    //       colors={Colors.purple}
    //     />
    //   </div>
    // </div>
    //****** */below does input section 
      // <div className="App">
      //   <input type={"text"} value={number} onChange={setMyNumber} />
      //   <div className={"container"}>
      //     <InputToSevenSegments
      //       number={'#  ' + number}
      //       className={'greenglow'}
      //       colors={Colors.purple}
      //     />
      //   </div>
      // </div>
    <div className="App">
      <button onClick={danceMove}>Count</button>
      <div className={"container"}>
        <InputToSevenSegments
        number={endLetter+"HELLO"}
        className={"greenglow"}
        colors={Colors.purple}
           />
      </div>
    </div>
    
  );


}





export default App;
