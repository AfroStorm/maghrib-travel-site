import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { ASSIGN_HERO_DATA } from "./reducerActions";
import { heroData } from "../../../offline-app-data/appData";

const HeroContext = createContext();

const initialState = {
  heroData: [],
};

export const HeroProvider = ({ children }) => {
  // use reducer
  // fetching hero data
  const [state, dispatch] = useReducer(reducer, initialState);

  // assigning fetched hero data to state
  useEffect(() => {
    dispatch({
      type: ASSIGN_HERO_DATA,
      payload: { heroData },
    });
  }, [heroData]);

  return (
    <HeroContext.Provider value={{ ...state }}>{children}</HeroContext.Provider>
  );
};

export const useHeroContext = () => {
  return useContext(HeroContext);
};
