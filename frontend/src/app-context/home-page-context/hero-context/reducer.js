import { ASSIGN_HERO_DATA } from "./reducerActions";

const reducer = (state, action) => {
  // assign fetched hero-data to state
  if (action.type === ASSIGN_HERO_DATA) {
    const heroData = action.payload.heroData;

    return { ...state, heroData: heroData };
  }

  throw new Error(`no matching action type: ${action}`);
};

export default reducer;
