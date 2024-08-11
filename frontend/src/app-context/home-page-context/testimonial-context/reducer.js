import { ASSIGN_TESTIMONIAL_DATA } from "./reducerActions";

const reducer = (state, action) => {
  // assign fetched testimonial-data
  if (action.type === ASSIGN_TESTIMONIAL_DATA) {
    const testimonialData = action.payload.testimonialData;

    return {
      ...state,
      testimonialData: testimonialData,
    };
  }

  throw new Error(`no matching action type : ${action.type}`);
};

export default reducer;
