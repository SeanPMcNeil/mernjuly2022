import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Main } from './views/Main';
import { Detail } from './views/Detail';
import { Routes, Route } from 'react-router-dom';
import { Edit } from './views/Edit';
import { ProductDelete } from './components/ProductDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={ <Main /> } path="/" />
        <Route element={ <Detail /> } path="/:id" />
        <Route element={ <Edit /> } path="/:id/edit" />
        <Route element={ <ProductDelete /> } path="/:id/delete" />
      </Routes>
    </div>
  );
}

export default App;
