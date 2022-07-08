import { useState } from 'react';
import './App.css';
import { BoxForm } from './components/BoxForm';
import { BoxDisplay } from './components/BoxDisplay';

function App() {
  const [boxColor, setBoxColor] = useState("");
  const [boxWidth, setBoxWidth] = useState();
  const [boxHeight, setBoxHeight] = useState();

  const newBox = ( newColor, newWidth, newHeight ) => {
    setBoxColor( newColor);
    setBoxWidth( newWidth );
    setBoxHeight( newHeight );
  }

  return (
    <div className="App">
      <BoxForm setNewBox={ newBox } />
      <BoxDisplay boxColor={ boxColor } boxWidth={ boxWidth } boxHeight={ boxHeight }/>
    </div>
  );
}

export default App;
