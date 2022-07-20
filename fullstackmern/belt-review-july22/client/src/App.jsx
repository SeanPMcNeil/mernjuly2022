import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Form } from './components/Form';
import { Home } from './components/Home';
import { OneProduct } from './components/OneProduct';
import { Edit } from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1><Link to={"/"}>All Products</Link> | <Link to={"/add"}>Add Product</Link></h1>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/add' element={ <Form /> } />
        <Route path='/product/:id' element={ <OneProduct /> } />
        <Route path='/product/edit/:id' element={ <Edit /> } />
      </Routes>
    </div>
  );
}

export default App;
