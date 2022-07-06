import React from 'react';
import './App.css';

import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person lastName={ "Doe" } firstName={ "Jane" } age={ 45 } hairColor={ "Black" }/>
      <Person lastName={ "Smith" } firstName={ "John" } age={ 88 } hairColor={ "Brown" }/>
      <Person lastName={ "Fillmore" } firstName={ "Millard" } age={ 50 } hairColor={ "Brown" }/>
      <Person lastName={ "Smith" } firstName={ "Maria" } age={ 62 } hairColor={ "Brown" }/>
    </div>
  );
}

export default App;
