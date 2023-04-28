import { planis } from "../../data/plani-data";
const INITIAL_STATE = {
  planis: planis,
};
const planisReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default planisReducer;
