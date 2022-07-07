import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ 'Chris' } lastName={ 'Hemsworth' } age={ 38 } hairColor={ 'Blonde' } />
      <PersonCard firstName={ 'Mark' } lastName={ 'Ruffalo' } age={ 54 } hairColor={ 'Black' } />
      <PersonCard firstName={ 'Chris' } lastName={ 'Evans' } age={ 41 } hairColor={ 'Brown' } />
      <PersonCard firstName={ 'Scarlett' } lastName={ 'Johansson' } age={ 37 } hairColor={ 'Blonde' } />
    </div>
  );
}

export default App;
