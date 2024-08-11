import {
  ASSIGN_FORM_DATA,
  HANDLE_ON_CHANGE,
  RESET_INPUT_FIELDS,
} from "./reducerActions";

const reducer = (state, action) => {
  if (action.type === ASSIGN_FORM_DATA) {
    const formData = action.payload.formData;

    return { ...state, formData: formData };
  }
  // post user question
  if (action.type === HANDLE_ON_CHANGE) {
    const targetName = action.payload.targetName;
    const targetValue = action.payload.targetValue;
    const inputData = state.inputData;
    const newInputData = { ...inputData, [targetName]: targetValue };
    return {
      ...state,
      inputData: newInputData,
    };
  }
  // reset user question input fields
  if (action.type === RESET_INPUT_FIELDS) {
    const resetInputData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    return {
      ...state,
      inputData: resetInputData,
    };
  }

  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
