import './App.css';

import React, { useState } from 'react'

function App() {
   let [counter, changeCounter] = useState(1);
   window.changeCounter = changeCounter;
   return (
      <div>
         <h1>{counter}</h1>
         <h3>{counter}</h3>
         <h5>{counter}</h5>
         <button onClick={() => changeCounter(counter += 1)} >Update Counter</button>
      </div>
   );
}

export default App;
