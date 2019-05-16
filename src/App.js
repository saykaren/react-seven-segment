import React, {useState} from 'react';

import './App.css';
import InputToSevenSegments from './Components/InputToSevenSegments';
import Colors from "./Components/Colors";
import useInterval from './Helpers/useInterval';
import SevenSegmentAdapter from './Components/SevenSegmentAdapter';


function App() {

  const [counter, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [endLetter, setLetter] = useState("HELLO");
  const [typing, setTyping] = useState("HELLO");

  function incrememt() {
    setCount(counter + 1);
  }
  useInterval(incrememt, 1000);

  //trying to make it move 
  function danceMove(event) {
    var result = event.target.value;
    alert(result.length);
    if (result.length < 10) {
    var finalResult = "     "+ result;
    setLetter(finalResult);
    setTyping(finalResult);    

    } else {
      if (result.length > 5) {
        var smallResult = result.substring(5);
        alert(smallResult);
        setLetter(smallResult);
        setTyping(smallResult);
      };
    }
      
  }
  
  //Not here yet...LOL
  // function dance(){
  //   setLetter(endLetter + " ");
  // };

  // useInterval(dance, 5);

  //useInterval(danceMove, 5000);

  function myTyping(event){
    var value = event.target.value;
    setTyping(value);
  }

  

  // function setMyNumber(event) {
  //   const karen = event.target.value;
  //   console.log("got here");
  //   setNumber(karen);
  //   if (setNumber.length < 10){
  //     let result = " "+karen;
  //     setNumber(result);
  //   } else {
  //     if (setNumber.length > 25) {
  //       let resultEnd = karen;
  //       setNumber(resultEnd);
  //     }
  //   }

  // }


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
      <button value={endLetter} onClick={danceMove}>Count</button>
      <input type="text" value={typing} onChange={myTyping}></input>
      <div className={"container"}>
        <InputToSevenSegments
        number={typing}
        className={"greenglow"}
        colors={Colors.purple}
           />
      </div>

     
    </div>
    
  );


}





export default App;
