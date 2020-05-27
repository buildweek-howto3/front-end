import { HOWTO_FETCH_SUCCESS, INITIAL_HOWTO_FETCH } from "../actions/howToActions"

const initialState = {
  loadingHowTos: false,
  howTos: [],
  currentUser: ""
};

export const howToReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_HOWTO_FETCH:
      return {
        ...state,
        loadingHowTos: true
      }
    case HOWTO_FETCH_SUCCESS: 
      return {
        ...state,
        howTos: action.payload,
        loadingHowTos: false
      }
    default:
      return state;
  }
};
