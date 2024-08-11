import { ASSIGN_DESTINATION_PAGE_DATA } from "./reducerActions";

const reducer = (state, action) => {
  if (action.type === ASSIGN_DESTINATION_PAGE_DATA) {
    const destinationData = action.payload.destinationData;
    // section title
    const sectionTitle = destinationData[0].section_title;
    const destinations = destinationData[0].destinations;

    return {
      ...state,
      destinations: destinations,
      sectionTitle: sectionTitle,
    };
  }
  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
