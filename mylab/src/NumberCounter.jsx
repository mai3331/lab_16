import React, { useState, useEffect } from "react";

const NumberCounter = () => {
  const [counter, setCounter] = useState(0); // Changed 'count' to 'num'
  const [calculation, setCalculation] = useState(0); // Changed 'calculation' to 'result'

  useEffect(() => {
    setCalculation(counter* 2); // Updated calculation based on 'num'
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
