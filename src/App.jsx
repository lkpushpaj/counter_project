import React from "react";
import { useState } from "react";
import "./App.css"
export default function App(){
  const [count,setCount] =useState(0)
  const[counttoSet,setCountset]=useState(0)
  
  return(
    <>
    <h1>Counter </h1>
   <div >
   <div className="card">Count is {counttoSet}</div>
      <div>
        <button
        onClick={()=>setCount(count+1)}
        style={{margin:"0 5px"}}>Increase</button>
      </div>
      <div>
        <button
        onClick={()=>setCount((count)=>Math.max(count-1,0))}
        style={{margin:"0 5px"}}>Decrease</button>
      </div>
      <div>
        <button
        onClick={()=>setCount(0)}
        style={{margin:"0 5px"}}>Reset</button>
      </div>

      <div>
      <input
        type="text"
        style={{
          width: "200px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "0.6em 1.2em",
          outline: "none",
        }}
        value={counttoSet}
        onChange={(e)=>setCountset(Number(e.target.value))}
      />
      <div>
        <button
        onClick={()=>setCount(0)}
        style={{margin:"0 5px"}}>Set it to {counttoSet}</button>
      </div>

      </div>
   </div>

    
    </>
  );
}