import { useState } from "react";

export default function CounterState() {
  //useState Methods
  const [counter, setCounter] = useState(0);
  const handleIncrementOrDecrement = (isIncrement) => {
    isIncrement ? setCounter(counter + 1) : setCounter(counter - 1);
  };
  const handleInput = (inputValue) => {
    isNaN(parseInt(inputValue))
      ? setCounter(0)
      : setCounter(parseInt(inputValue));
  };
  return (
    <>
      <h1 className="appHeading">Using useState Hook</h1>
      <div className="appHeader">
        <button
          className="appButton"
          onClick={() => {
            handleIncrementOrDecrement(false);
          }}
        >
          -
        </button>
        <h1 className="appHeading">{counter}</h1>
        <input
          className="counterInput"
          type="number"
          onChange={(e) => {
            handleInput(e.target.value);
          }}
          value={counter}
        />
        <button
          className="appButton"
          onClick={() => {
            handleIncrementOrDecrement(true);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
