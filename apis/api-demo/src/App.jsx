import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ApiCall from './components/ApiCall';

function App() {
  return (
    <div className="App">
      <h1>PokeAPI</h1>
      <ApiCall />
    </div>
  );
}

export default App;
