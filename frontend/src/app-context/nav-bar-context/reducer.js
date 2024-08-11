import {
  ASSIGN_NAVBAR_DATA,
  HANDLE_MOBILE_NAV,
  CHANGE_CURRENT_PAGE,
} from "./reducerActions";

const reducer = (state, action) => {
  // assign fetched nav-links to state
  if (action.type === ASSIGN_NAVBAR_DATA) {
    const navbarData = action.payload.navbarData;
    const isPending = action.payload.isNavbarDataPending;

    // reordering of the links array
    const navLinks = navbarData[0].links;
    const order = ["Home", "About", "Book Now"];
    const orderedNavLinks = navLinks.sort(
      (a, b) => order.indexOf(a.name) - order.indexOf(b.name)
    );
    // assigning the social links array
    const socialLinks = navbarData[0].social_links;
    const brandData = navbarData[0].brand_name;

    return {
      ...state,
      navLinks: orderedNavLinks,
      socialLinks: socialLinks,
      brandData: brandData,
      isNavbarDataPending: isPending,
    };
  }

  // assign links height from ref, open/close mobile menu
  else if (action.type === HANDLE_MOBILE_NAV) {
    const linksHeight = action.payload.linksHeight;

    return {
      ...state,
      linksHeight: linksHeight,
      showMenu: !state.showMenu,
    };
  }
  // change current page
  else if (action.type === CHANGE_CURRENT_PAGE) {
    const currentPage = action.payload.currentPage;

    return { ...state, currentPage: currentPage };
  }
  throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;
