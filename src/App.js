import "./App.css";

import React, { useEffect, useState } from "react";
import trace from './helper'

function App() {
  let [obj, updateObj] = useState({ title: "count", counter: 1 });

  useEffect(() => {
    console.log("component");
    document.title = `${obj.title} - ${obj.counter}`;

    return () => {
      console.log("component unmounted");
    };
  }, [obj]);

  const incrementCounter = () => {
    updateObj((obj) => ({
      ...obj,
      counter: obj.counter + 1,
    }));
    trace('previous obj')(obj);
  };

  // window.changeCounter = updateObj;
  return (
    <div>
      <h1>{obj.counter}</h1>
      <h3>{obj.counter}</h3>
      <h5>{obj.counter}</h5>
      <button onClick={incrementCounter}>Update Counter</button>
    </div>
  );
}

export default App;
