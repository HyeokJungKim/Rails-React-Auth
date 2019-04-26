let initialState = {
  all: []
}

const snackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SNACKS_TO_STATE":
      return {...state, all: action.payload};
    default:
      return state;
  }
}

export default snackReducer
