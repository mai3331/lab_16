import React, { useState, useEffect } from "react";

const NumberCounter = () => {
  const [counter, setCounter] = useState(0);
  const [calculation, setCalculation] = useState(0); 

  useEffect(() => {
    setCalculation(counter* 2); 
  }, [counter]);

  return (
    <div className="container mt-5" style={{backgroundColor:'fff'}}>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-md" style={{backgroundColor:'eee'}}onClick={() => setCounter(counter + 1)}>+
      </button>
      <h2>Calculation: {calculation}</h2>
     
    </div>
  );
};

export default NumberCounter;
