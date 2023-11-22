import { useRef } from "react";

export default function CounterRef() {
  const refValue = useRef(0);
  const refDisplay = useRef(null);

  //useRef Methods
  let headingElement, inputElement;
  const handleIncrementOrDecrementRef = (isIncrement) => {
    isIncrement
      ? (refValue.current = parseInt(refValue.current) + 1)
      : (refValue.current = parseInt(refValue.current) - 1);
    handleInputHeadingUpdate(true);
  };
  const handleInputHeadingUpdate = (isInputAction) => {
    const elements = refDisplay.current.children;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("id") === "counterInput") {
        inputElement = elements[i];
      }
      if (elements[i].getAttribute("id") === "appHeading") {
        headingElement = elements[i];
      }
    }
    headingElement.innerHTML = refValue.current;
    if (isInputAction) {
      inputElement.value = refValue.current;
    }
  };
  const handleInputChange = () => {
    let currValue = parseInt(inputElement.value);
    isNaN(currValue) ? (refValue.current = 0) : (refValue.current = currValue);
    handleInputHeadingUpdate(false);
  };
  return (
    <div>
      <h1 className="appHeading">Using useRef Hook</h1>
      <div className="appHeader" ref={refDisplay}>
        <button
          className="appButton"
          onClick={() => {
            handleIncrementOrDecrementRef(false);
          }}
        >
          -
        </button>
        <h1 className="appHeading" id="appHeading">
          {refValue.current}
        </h1>
        <input
          className="counterInput"
          id="counterInput"
          type="number"
          onChange={handleInputChange}
        />
        <button
          className="appButton"
          onClick={() => {
            handleIncrementOrDecrementRef(true);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
