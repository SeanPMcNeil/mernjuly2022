import { useState } from 'react';
import './App.css';
import { BoxForm } from './components/BoxForm';
import { BoxDisplay } from './components/BoxDisplay';

function App() {
  const [boxList, setBoxList] = useState([]);

  const newBox = ( box ) => {
    const newBox = [...boxList, box]
    setBoxList(newBox)
  }

  return (
    <div className="App">
      <BoxForm newBox={ newBox } />
        <div style={{display:"flex", gap:"5px", flexWrap:"wrap"}}>
        {
          boxList.map((box,i) => {
            return(
              <BoxDisplay key={i} box={ box } />
            )
          })
        }
        </div>
    </div>
  );
}

export default App;
