import { useRef, useEffect, useState } from "react";
import SectionCounter from "./SectionCounter";

export default function AutoIncrementCounter() {
  const [counter, setCounter] = useState(0);
  const [autoIncrementValue, setAutoIncrementValue] = useState(0);
  const counterVal = useRef(1);
  const inputVal = useRef(null);

  const handleIncrementDecrement = (isIncrement) => {
    counterVal.current = isIncrement
      ? parseInt(counterVal.current) + 1
      : parseInt(counterVal.current) - 1;
    inputVal.current.value = parseInt(counterVal.current);
  };
  useEffect(() => {
    let timerId;
    if (autoIncrementValue > 0) {
      timerId = setInterval(() => {
        setCounter((count) => count + parseInt(counterVal.current));
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
          incDecValue={parseInt(counterVal.current)}
          min={0}
          type="number"
        ></SectionCounter>
      </div>
      <div className="appHeader">
        <h6 className="appHeading">
          Value by which counter Increment/Decrement
        </h6>
      </div>
      <div className="appHeader">
        <button
          className="appButton"
          disabled={parseInt(counterVal.current) <= 1 ? true : false}
          onClick={() => {
            handleIncrementDecrement(false);
          }}
        >
          -
        </button>
        <input
          ref={inputVal}
          className="counterInput"
          min={1}
          type="number"
          onChange={(e) => {
            counterVal.current = e.target.value;
          }}
          defaultValue={counterVal.current}
        />
        <button
          className="appButton"
          onClick={() => {
            handleIncrementDecrement(true);
          }}
        >
          +
        </button>
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
