import { createContext, useContext, useEffect, useReducer } from "react";
import { ASSIGN_TESTIMONIAL_DATA } from "./reducerActions";
import reducer from "./reducer";
import { testimonialData } from "../../../offline-app-data/appData";

const TestimonialDataContext = createContext();

const initialState = {
  testimonialData: [],
};

export const TestimonialProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch testimonial-data

  // assigning fetched service-data
  useEffect(() => {
    dispatch({
      type: ASSIGN_TESTIMONIAL_DATA,
      payload: { testimonialData },
    });
  }, [testimonialData]);

  return (
    <TestimonialDataContext.Provider value={{ ...state }}>
      {children}
    </TestimonialDataContext.Provider>
  );
};

export const useTestimonialContext = () => {
  return useContext(TestimonialDataContext);
};
