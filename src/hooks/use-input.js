import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredValue, setenteredValue] = useState("");
  const [inputTouched, setinputTouched] = useState(false);

  const enteredValueIsValid = validateInput(enteredValue);
  const inputisInvalid = !enteredValueIsValid && inputTouched;

  const inputChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setinputTouched(true);
  };

  const resetValue = () => {
    setenteredValue("");
    setinputTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    inputisInvalid,
    inputChangeHandler,
    inputBlurHandler,
    resetValue,
  };
};

export default useInput;
