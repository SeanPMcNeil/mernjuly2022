import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { NameProvider } from './NameContext';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form';


function App() {
  return (
    <div className="App">
      <NameProvider>
        <Navbar />
        <Form />
      </NameProvider>
    </div>
  );
}

export default App;
