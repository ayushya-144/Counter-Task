export default function SectionCounter({
  valueSetter,
  inputValue,
  incDecValue,
  min,
  type,
}) {
  const handleInputValue = (element, setValue) => {
    if (element.target.value >= min) {
      setValue(Number(element.target.value));
      element.target.value = Number(element.target.value);
    } else {
      setValue(min);
    }
  };

  return (
    <>
      <button
        className="appButton"
        disabled={inputValue <= min ? true : false}
        onClick={() => {
          valueSetter(inputValue - incDecValue);
        }}
      >
        -
      </button>
      <input
        className="counterInput"
        min={min}
        type={type}
        onChange={(e) => {
          handleInputValue(e, valueSetter);
        }}
        value={inputValue}
      />
      <button
        className="appButton"
        onClick={() => {
          valueSetter(inputValue + incDecValue);
        }}
      >
        +
      </button>
    </>
  );
}
