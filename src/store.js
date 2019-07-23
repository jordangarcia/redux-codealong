import { createStore } from "redux";

const initialState = {
  search: ''
}

// let exampleAction = {
//   type: 'SET_SEARCH',
//   search: 'my new search value'
// }

let reducer = (existingState, action) => {
  console.log('handling action', action)
  if (existingState === undefined) {
    existingState = initialState
  }

  if (action.type === 'SET_SEARCH') {
    const newState = {
      ...existingState,
      search: action.search
    }

    return newState
  } else if (action.type === 'RESET_SEARCH') {
    return {
      ...existingState,
      search: ''
    }
  } else {
    return existingState
  }
};

export default createStore(reducer);
