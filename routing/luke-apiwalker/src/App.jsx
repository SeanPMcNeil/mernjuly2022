import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import StarWars from './components/StarWars';
import Planets from './components/Planets';
import People from './components/People';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import Films from './components/Films';
import Species from './components/Species';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState({});
  const navigate = useNavigate();

  const newSearch = form => {
    setSearch(form);
    navigate(`/${form.query}/${form.idNum}`)
  }

  return (
    <div className="App">
      <StarWars newSearch={ newSearch } />
      <Routes>
        <Route exact path="/planets/:idNum" element={ <Planets /> } />
        <Route exact path="/people/:idNum" element={ <People /> } />
        <Route exact path="/spaceships/:idNum" element={ <Spaceships /> } />
        <Route exact path="/vehicles/:idNum" element={ <Vehicles /> } />
        <Route exact path="/films/:idNum" element={ <Films /> } />
        <Route exact path="/species/:idNum" element={ <Species /> } />
      </Routes>
    </div>
  );
}

export default App;
