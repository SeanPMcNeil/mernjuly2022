import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const UserContext = React.createContext();

function App() {
  const [name, setName] = useState("Sean McNeil");

  const onNameChange = (name) => {
    setName(name);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ name, onNameChange }}>
        
      </UserContext.Provider>
    </div>
  );
}

export default App;
