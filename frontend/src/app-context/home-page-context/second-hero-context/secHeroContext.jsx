import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { ASSIGN_SEC_HERO_DATA } from "./reducerActions";
import { secHeroData } from "../../../offline-app-data/appData";

const SecHeroContext = createContext();

const initialState = {
  secHeroData: [],
};

export const SecHeroProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetching navbar data
  // assigning fetched navbar data to state
  useEffect(() => {
    dispatch({
      type: ASSIGN_SEC_HERO_DATA,
      payload: { secHeroData },
    });
  }, [secHeroData]);

  return (
    <SecHeroContext.Provider value={{ ...state }}>
      {children}
    </SecHeroContext.Provider>
  );
};

export const useSecHeroContext = () => {
  return useContext(SecHeroContext);
};
