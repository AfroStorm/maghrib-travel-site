import { ASSIGN_ABOUT_DATA } from "./reducerActions";

const reducer = (state, action) => {
  if (action.type === ASSIGN_ABOUT_DATA) {
    const aboutData = action.payload.aboutData;

    return {
      ...state,
      aboutData: aboutData,
    };
  }
};

export default reducer;
