import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setnameInputTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length > 0;
  const nameInputisInvalid = !enteredNameIsValid && nameInputTouched;

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setnameInputTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setnameInputTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`'form-control' ${nameInputisInvalid ? "invalid" : ""}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputisInvalid && <p className="error-text">Name is not valid</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
