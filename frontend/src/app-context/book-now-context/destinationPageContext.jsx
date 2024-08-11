import { createContext, useContext, useEffect, useReducer } from "react";
import { ASSIGN_DESTINATION_PAGE_DATA } from "./reducerActions";
import { destinationData } from "../../offline-app-data/appData";
import reducer from "./reducer";

const DestinationPageContext = createContext();

const initialState = {
  destinations: null,
  sectionTitle: null,
};

export const DestinationPageProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  // fetch about page data

  useEffect(() => {
    dispatch({
      type: ASSIGN_DESTINATION_PAGE_DATA,
      payload: { destinationData },
    });
  }, [destinationData]);

  return (
    <DestinationPageContext.Provider value={{ ...state }}>
      {children}
    </DestinationPageContext.Provider>
  );
};

export const useDestinationPageContext = () => {
  return useContext(DestinationPageContext);
};
