import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useRef,
} from "react";
import { navbarData } from "../../offline-app-data/appData";
import {
  ASSIGN_NAVBAR_DATA,
  HANDLE_MOBILE_NAV,
  CHANGE_CURRENT_PAGE,
} from "./reducerActions";
import reducer from "./reducer";

const navBarContext = createContext();

const storedCurrentPage = localStorage.getItem("currentPage");

const initialState = {
  brandData: null,
  navLinks: null,
  socialLinks: null,
  linksHeight: 0,
  navbarHeight: 0,
  showMenu: false,
  currentPage: storedCurrentPage !== null ? storedCurrentPage : "/home",
};

export const NavBarProvider = ({ children }) => {
  // accessing links class for height of ul
  const linksRef = useRef(null);
  // accessing navbar class for height of navbar
  const appPageRef = useRef(null);
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

  const handleCurrentPage = (currentPage) => {
    dispatch({ type: CHANGE_CURRENT_PAGE, payload: { currentPage } });
    localStorage.setItem("currentPage", currentPage);
  };

  // scrolling to the page start after page change
  useEffect(() => {
    if (appPageRef.current) {
      appPageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  }, [state.currentPage]);

  // assigning fetched navbar data to state
  useEffect(() => {
    dispatch({
      type: ASSIGN_NAVBAR_DATA,
      payload: { navbarData },
    });
  }, [navbarData]);

  return (
    <navBarContext.Provider
      value={{
        ...state,
        handleMobileMenu,
        handleCurrentPage,
        linksRef,
        appPageRef,
      }}
    >
      {children}
    </navBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  return useContext(navBarContext);
};
