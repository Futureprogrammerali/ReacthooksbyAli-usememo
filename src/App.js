 
import './App.css';

import React ,{useMemo, useState}   from 'react'

 
function App() { 
 const [Number, setNumberstate] = useState(0)
 function setnumber (e){

  setNumberstate(e.target.value)
 }
 const changestyle = () => {
    

}


const heavyfunction = (2) => {
  for (let i = 0; i < 1000000000; i++) {
  }
return x * x
}
 

 
const squareVal = useMemo(()=> {return heavyfunction(Number)},[Number])
//const squareVal =  heavyfunction(Number)

  return (
    <div className="App">
    <h1>the number is {Number}</h1> 
    <h1>Square {squareVal}</h1> 
    <br/>
    <input type="number"  value={Number} onChange={setnumber}></input>
    
    <button  onClick={changestyle}> Change style</button>
    </div>
  );
}

export default App;
