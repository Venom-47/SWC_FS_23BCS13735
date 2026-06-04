import React from 'react'
import { useState } from 'react';

const App = () => {

  const [x, setX] = useState(1);
  
  let count = 0;

  function tripleClick(){
    count += 1;

    if(count%3 == 0){
      setX(x*2);
    }
  }

  return (
    <div>
      <p>{x}</p>

      <button onClick={tripleClick}>Click</button>
    </div>
  )
}

export default App
