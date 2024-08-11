import { createContext, useContext, useEffect, useReducer } from "react";
import { formData } from "../../../offline-app-data/appData";
import {
  ASSIGN_FORM_DATA,
  HANDLE_ON_CHANGE,
  RESET_INPUT_FIELDS,
} from "./reducerActions";
import reducer from "./reducer";

const FormDataContext = createContext();

const initialState = {
  formData: [],
  inputData: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
};

export const FormDataProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetching form data
  // assigning fetched form data to state
  useEffect(() => {
    dispatch({
      type: ASSIGN_FORM_DATA,
      payload: { formData },
    });
  }, [formData]);

  // handle input change
  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    dispatch({
      type: HANDLE_ON_CHANGE,
      payload: { targetName, targetValue },
    });
  };
  // posting user input to server
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: RESET_INPUT_FIELDS });
    console.log("We will respond as soon as possible");

    // postFormData(state.inputData);
    // lesson 131 - form data john smilga course udemy
    // const formInputData = new FormData(e.currentTarget);
    // const newQuestionData = Object.fromEntries(formInputData);
    // console.log(newQuestionData);
  };

  return (
    <FormDataContext.Provider value={{ ...state, handleSubmit, handleChange }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormDataContext = () => {
  return useContext(FormDataContext);
};
