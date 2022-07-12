import { useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);

  const addChar = person => {
    setAllCharacters([...allCharacters, person]);
  }

  const lifeHandler = (index) => {
    allCharacters[index].isAlive = !allCharacters[index].isAlive;
    setAllCharacters([...allCharacters]);
  }

  return (
    <div className="App">
      <Form newChar={ addChar } />
      <Results allChars={ allCharacters } toggleLife={ lifeHandler } />
    </div>
  );
}

export default App;
