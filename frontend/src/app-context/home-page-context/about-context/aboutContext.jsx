import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { ASSIGN_ABOUT_DATA } from "./reducerActions";
import { aboutData } from "../../../offline-app-data/appData";

const AboutContext = createContext();

const initialState = {
  aboutData: [],
};

export const AboutProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetching about data

  // assigning fetched about data to state
  useEffect(() => {
    dispatch({
      type: ASSIGN_ABOUT_DATA,
      payload: { aboutData },
    });
  }, [aboutData]);

  return (
    <AboutContext.Provider value={{ ...state }}>
      {children}
    </AboutContext.Provider>
  );
};

export const useAboutContext = () => {
  return useContext(AboutContext);
};
