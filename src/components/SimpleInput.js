import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    enteredValueIsValid: enteredNameIsValid,
    inputisInvalid: nameInputisInvalid,
    inputChangeHandler: enteredNameHandler,
    inputBlurHandler: nameInputBlurHandler,
    resetValue: resetNameInput,
  } = useInput((value) => value.trim().length > 0);

  const {
    enteredValue: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    inputisInvalid: emailInputisInvalid,
    inputChangeHandler: enteredEmailHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetValue: resetEmailInput,
  } = useInput((value) => value.trim().length > 0 && value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
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
        {nameInputisInvalid && <p className="error-text">Name is not valid</p>}
      </div>
      <div className={`'form-control' ${emailInputisInvalid ? "invalid" : ""}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={enteredEmailHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputisInvalid && (
          <p className="error-text">Email is not valid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
