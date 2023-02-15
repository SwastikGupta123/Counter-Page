import React, { useState } from "react";
import "./Counter.css";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(true)
    const [flag2, setFlag2] = useState(true)
    
    const arr= ['green','blue','red'];
    let clr;
    if(counter<=4){
      clr = arr[0]
    }
    else if(counter<=9){
      clr = arr[1]
    }
    else{
      clr = arr[2];
    }

  const increaseCounter=()=>{
    if(counter>0){
      setFlag(true)
    }
    if(counter>8){
      setFlag2(false)
    }
    setCounter(prev=>prev+1)
  }
  const decreaseCounter=()=>{
    if(counter>0 && counter<=9){
      setFlag2(true)
    }
    if(counter<2){
      setFlag(false)
    }
    setCounter(prev=>prev-1)
  }

  return (
    <div>
      <div className="main">
        <h1 className="heading">Counter</h1>
        <p className="count" style={{color:`${clr}`}}>{counter}</p>
        <div className="button">
          {
            flag2 ? <button className="inc" onClick={increaseCounter}>Increament</button> : <button className="inc" onClick={()=>increaseCounter()} disabled>Increament</button>
          }
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
