import { ASSIGN_SERVICE_DATA } from "./reducerActions";

const reducer = (state, action) => {
  if (action.type === ASSIGN_SERVICE_DATA) {
    const serviceData = action.payload.serviceData;

    return {
      ...state,
      serviceData: serviceData,
    };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
