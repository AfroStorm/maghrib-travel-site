import { createContext, useContext, useEffect, useReducer } from "react";
import { ASSIGN_SERVICE_DATA } from "./reducerActions";
import reducer from "./reducer";
import { serviceData } from "../../../offline-app-data/appData";

const ServiceContext = createContext();

const initialState = {
  serviceData: [],
};

export const ServiceProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetching service-data
  // assigning fetched service-data
  useEffect(() => {
    dispatch({
      type: ASSIGN_SERVICE_DATA,
      payload: { serviceData },
    });
  }, [serviceData]);

  return (
    <ServiceContext.Provider value={{ ...state }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServiceContext = () => {
  return useContext(ServiceContext);
};
