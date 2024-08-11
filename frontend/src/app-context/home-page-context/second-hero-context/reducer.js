import { ASSIGN_SEC_HERO_DATA } from "./reducerActions";

const reducer = (state, action) => {
  // assign fetched hero-data to state
  if (action.type === ASSIGN_SEC_HERO_DATA) {
    const heroData = action.payload.secHeroData;

    return { ...state, secHeroData: heroData };
  }

  throw new Error(`no matching action type: ${action}`);
};

export default reducer;
