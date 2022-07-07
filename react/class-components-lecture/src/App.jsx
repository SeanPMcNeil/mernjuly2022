import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Class Components!</h1>
      <First firstName='Sean' />
      <First firstName='Nichole' />
      <First firstName='Alex' />
      <First firstName='Joshua' />
      <First firstName='Angel' />
    </div>
  );
}

export default App;