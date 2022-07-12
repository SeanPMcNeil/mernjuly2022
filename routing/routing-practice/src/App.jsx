import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Home from './components/Home';
import InputCheck from './components/InputCheck';
import WordColor from './components/WordColor';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={ <Home /> } />
        <Route path="/:param" element={ <InputCheck /> } />
        <Route path="/:word/:color1/:color2" element={ <WordColor /> } />
      </Routes>
    </div>
  );
}

export default App;
