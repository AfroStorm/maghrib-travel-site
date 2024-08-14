import { HANDLE_MOBILE_NAV } from "./reducerActions";

const reducer = (state, action) => {
  // assign links height from ref, open/close mobile menu
  if (action.type === HANDLE_MOBILE_NAV) {
    const linksHeight = action.payload.linksHeight;

    return {
      ...state,
      linksHeight: linksHeight,
      showMenu: !state.showMenu,
    };
  }
};

export default reducer;
