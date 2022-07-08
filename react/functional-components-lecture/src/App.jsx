import './App.css';
import First from './components/First';
import { useState } from 'react';

const darkMode = {
  backgroundColor: "dimgrey",
  color: "ghostwhite",
  padding: "10px"
}

const lightMode = {
  backgroundColor: "white",
  color: "black",
  padding: "10px"
}

const buttonStyle = {
  // width: "100px",
  height: "40px",
  backgroundColor: "darkgrey",
  fontSize: "30px",
  color: "white",
  borderRadius: "10px"
}

function App() {
  const [light, setLight] = useState(false);

  const switchLight = () => setLight(!light);

  return (
    <div className="App" style={ light ? lightMode : darkMode }>
      <h1>Welcome to Functional Components!</h1>
      <button onClick={ switchLight } style={ buttonStyle }>{ light ? 'Switch to Dark Mode' : 'Switch to Light Mode' }</button>
      <First firstName='Sean' lastName='McNeil' number={8} />
      <First firstName='Cloud' lastName='Strife' number={16} />
      <First firstName='Squall' lastName='Leonhart' number={99} />
      <First firstName='Zidane' lastName='Tribal' number={34} />
      <First firstName='Basch' lastName='fon Ronsenburd' number={72} />
    </div>
  );
}

export default App;
