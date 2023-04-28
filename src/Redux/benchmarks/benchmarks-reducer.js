import {
  justBody,
  noBarsHere,
  mixItUp,
  getHeavy,
} from "../../data/benchmarks-data";

const INITIAL_STATE = {
  justbody: justBody,
  nobarshere: noBarsHere,
  mixitup: mixItUp,
  getheavy: getHeavy,
};

const benchmarksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default benchmarksReducer;
