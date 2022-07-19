import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Main } from './views/Main';
import { Routes, Route } from 'react-router-dom';
import { Update } from './views/Update';
import { New } from './views/New';
// import { AuthorDelete } from './components/AuthorDelete';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={ <Main />} path="/" />
        <Route element={ <New /> } path="/new" />
        <Route element={ <Update /> } path="/edit/:id" />
        {/* <Route element={ <AuthorDelete /> } path="/delete/:id" /> */}
      </Routes>
    </div>
  );
}

export default App;
