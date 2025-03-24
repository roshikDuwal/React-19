import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

const UseState = () => {
  console.log("Parent Component");
  const [number, setNumber] = useState<number>(0);

  const handleIncrementNumber = () => {
    setNumber((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <h1>{number}</h1>
        <div>
          <button onClick={handleIncrementNumber}>Add</button>
        </div>
        <ChildComponent/>
      </div>

      <ToggleSwitch/>
    </>
  );
};

export default UseState;


const ChildComponent=React.memo(()=>{
  console.log("Child Component");
  
  return (
    <>
    <h1>Child Component</h1>
    </>
  )
});

//Derived State
