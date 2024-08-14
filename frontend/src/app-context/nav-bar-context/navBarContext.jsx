import { useContext, createContext, useReducer, useRef } from "react";
import { HANDLE_MOBILE_NAV } from "./reducerActions";
import reducer from "./reducer";

const navBarContext = createContext();

const initialState = {
  linksHeight: 0,
  showMenu: false,
};

export const NavBarProvider = ({ children }) => {
  // accessing links class for height of ul
  const linksRef = useRef(null);
  // use reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // open/close mobile nav, displaying currentPage
  const handleMobileMenu = () => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    dispatch({
      type: HANDLE_MOBILE_NAV,
      payload: { linksHeight },
    });
  };

  return (
    <navBarContext.Provider
      value={{
        ...state,
        handleMobileMenu,
        linksRef,
      }}
    >
      {children}
    </navBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  return useContext(navBarContext);
};
