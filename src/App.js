 
import './App.css';

import React ,{useMemo, useState}   from 'react'

 
function App() { 
 const [Number, setNumberstate] = useState(0)
  return (
    <div className="App">
    <h1>Test use state {Number}</h1> 
   
 
    <input type="number"  value={Number} onChange={setnumber}></input>
    
    <button  onClick={changestyle}> Change style</button>
    </div>
  );
}

export default App;
