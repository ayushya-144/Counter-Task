import { useEffect, useState } from "react";
import SectionCounter from "./SectionCounter";

export default function AutoIncrementCounter() {
  const [counter, setCounter] = useState(0);
  const [autoIncrementValue, setAutoIncrementValue] = useState(0);

  useEffect(() => {
    let timerId;
    if (autoIncrementValue > 0) {
      timerId = setInterval(() => {
        setCounter((count) => count + 1);
      }, autoIncrementValue * 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [autoIncrementValue]);

  return (
    <>
      <div className="appHeader">
        <h1 className="appHeading">Counter : {counter}</h1>
      </div>
      <div className="appHeader">
        <h6 className="appHeading">Increment/Decrement Counter</h6>
      </div>
      <div className="appHeader">
        <SectionCounter
          valueSetter={setCounter}
          inputValue={counter}
          incDecValue={1}
          min={0}
          type="number"
        ></SectionCounter>
      </div>
      <div className="appHeader">
        <h6 className="appHeading">Increment/Decrement Counter Time</h6>
      </div>
      <div className="appHeader">
        <SectionCounter
          valueSetter={setAutoIncrementValue}
          inputValue={autoIncrementValue}
          incDecValue={1}
          min={0}
          type="number"
        ></SectionCounter>
      </div>
    </>
  );
}
