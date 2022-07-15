import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Main } from './views/Main';
import { Detail } from './views/Detail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={ <Main /> } path="/" />
        <Route element={ <Detail /> } path="/:id" />
      </Routes>
    </div>
  );
}

export default App;
