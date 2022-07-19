import './App.css';
import ViewAll from './components/ViewAll';
import { Routes, Route, Link } from 'react-router-dom';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
      <h1><Link to={"/"}>Full Stack Demo</Link> | <Link to={"/add"}>Add Game</Link></h1>
      <Routes>
        <Route path="/" element={ <ViewAll /> } />
        <Route path="/add" element={ <AddForm /> } />
        <Route path="/update/:id" element={ <UpdateForm /> } />
        <Route path="/game/:id" element={ <ViewOne /> } />
      </Routes>
    </div>
  );
}

export default App;
