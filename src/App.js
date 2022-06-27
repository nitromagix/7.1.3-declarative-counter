import "./App.css";

import React, { useEffect, useState } from "react";
import trace from './helper'

function App() {
  let [counterObj, updateObj] = useState({ title: "count", count: 1 });

  useEffect(() => {
    console.log("component");
    document.title = `${counterObj.title} - ${counterObj.count}`;

    return () => {
      console.log("component unmounted");
    };
  }, [counterObj]);

  const incrementCounter = () => {
    updateObj((counterObj) => ({
      ...counterObj,
      count: counterObj.count + 1,
    }));
    trace('previous counterObj')(counterObj);
  };

  // window.changeCounter = updateObj;
  return (
    <div>
      <h1>{counterObj.count}</h1>
      <h3>{counterObj.count}</h3>
      <h5>{counterObj.count}</h5>
      <button onClick={incrementCounter}>Update Counter</button>
    </div>
  );
}

export default App;
