import { ASSIGN_ABOUT_PAGE_DATA } from "./reducer.actions";

const reducer = (state, action) => {
  if (action.type === ASSIGN_ABOUT_PAGE_DATA) {
    const aboutPageData = action.payload.aboutPageData;
    return {
      ...state,
      aboutPageData: aboutPageData,
    };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
