import { createContext, useContext, useEffect, useReducer } from "react";
import { ASSIGN_ABOUT_PAGE_DATA } from "./reducer.actions";
import { aboutPageData } from "../../offline-app-data/appData";
import reducer from "./reducer";

const AboutPageContext = createContext();

const initialState = {
  aboutPageData: null,
};

export const AboutPageProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetch about page data

  useEffect(() => {
    dispatch({
      type: ASSIGN_ABOUT_PAGE_DATA,
      payload: { aboutPageData },
    });
  }, [aboutPageData]);

  return (
    <AboutPageContext.Provider value={{ ...state }}>
      {children}
    </AboutPageContext.Provider>
  );
};

export const useAboutPageContext = () => {
  return useContext(AboutPageContext);
};
