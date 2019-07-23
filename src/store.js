import { createStore } from "redux";

let reducer = (state = { search: "" }, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.search
      };
    default:
      return state;
  }
};

export default createStore(reducer);
