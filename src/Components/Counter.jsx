import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(true)

  const increaseCounter=()=>{
    setCounter(prev=>prev+1)
    if(counter>0){
        setFlag(true)
    }
  }
  const decreaseCounter=()=>{
      setCounter(prev=>prev-1)
      if(counter<2){
          setFlag(false)
      }
  }

  return (
    <div>
      <div className="main">
        <h1 className="heading">Counter</h1>
        <p className="count">{counter}</p>
        <div className="button">
          <button className="inc" onClick={increaseCounter}>Increament</button>
          {
            flag ? <button className="dec" onClick={decreaseCounter}>Decreament</button>:<button className="dec" onClick={()=>decreaseCounter()} disabled>Decreament</button>
          }
        </div>
        <p className="info">Done by :- Swastik Gupta - 12006944</p>
      </div>
    </div>
  );
}

export default Counter;
