import React, { useState } from "react";

const Counter = () => {
 const [count,setCount]=useState(0);
   const increment=()=>{
    setCount(prev=>prev+1);
   }
   const decrement=()=>{
    setCount(prev=>prev-1);
   }
   const resetCount=()=>{
    setCount(prev=>prev=0);
   }
  return (
    <>
      <h1>Counter</h1>
      <div className="container">
        <div className="row">
          <h2 style={{color:"red"}}>{count}</h2>
          <div className="col">
            <button
              className="btn btn-lg me-2"
              style={{ backgroundColor: "orange" }}
              onClick={increment}
            >
              +
            </button>
            <button
              className="btn btn-lg ms-5"
              style={{ backgroundColor: "orange" }}
              onClick={decrement}
            >
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-lg mt-3"
              style={{ backgroundColor: "orange" }}
              onClick={resetCount}
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
