import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { ASSIGN_IMAGES } from "./reducerActions";
import { maghrebImages } from "./imageArrays";

const ImageSliderContext = createContext();

const initialState = {
  images: [],
};

export const ImageSliderProvider = ({ children }) => {
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // assigning computed images to state
    maghrebImages &&
      dispatch({ type: ASSIGN_IMAGES, payload: { maghrebImages } });
  }, [maghrebImages]);

  return (
    <ImageSliderContext.Provider value={{ ...state }}>
      {children}
    </ImageSliderContext.Provider>
  );
};

export const useImageSliderContext = () => {
  return useContext(ImageSliderContext);
};
