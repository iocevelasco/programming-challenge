import { TOGGLE_HIDDEN_MENU } from "./menu-actions";
export const INITIAL_STATE = {
  hidden: true,
};
export const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_HIDDEN_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default menuReducer;
