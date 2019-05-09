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
            number={'# '+ counter}
            className={'greenglow'}
            colors={Colors.red}
          />
        </div>
      </div>
    </div>
  );


}

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#karenId');


export default App;
