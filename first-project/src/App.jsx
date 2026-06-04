import React from 'react'
import { useState } from 'react';

const App = () => {

  const [x, setX] = useState(1);
  
  const [count, setCount] = useState(0);

  function tripleClick(){
    
    setCount(count+1);

    if(count%3 == 0){
      setX(x*2);
      setCount(0);
    }
  }

  const [arr, setArr] = useState([])

  const [value, setValue] = useState('');

  const [index, setIndex] = useState(-1);

  return (
    <div>
      <p>{x}</p>

      <button onClick={tripleClick}>Click</button>

      <input type="text" value={value} onChange={(e) => {
        setValue(e.target.value)
        }} />

      <p>{arr}</p>

      <button onClick={() => {

        setIndex(arr.length)
        setArr([...arr, value])
        setValue('')

      }}>Submit</button>

      <h1>{arr[index]}</h1>

      <button onClick={()=>{
        if(index > 0){
          setIndex(index-1)
        }
      }}> undo </button>

      <button onClick={()=>{
        if(index < arr.length - 1){
          setIndex(index+1)
        }
      }}> redo </button>

    </div>
  )
}

export default App
