import { ASSIGN_IMAGES } from "./reducerActions";

const reducer = (state, action) => {
  if (action.type === ASSIGN_IMAGES) {
    const images = action.payload.maghrebImages;

    return { ...state, images: images };
  }

  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
