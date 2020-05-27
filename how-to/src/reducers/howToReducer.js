import { HOWTO_FETCH_SUCCESS } from "../actions/howToActions"

const initialState = {
  isLoading: false,
  howTos: []
};

export const howToReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOWTO_FETCH_SUCCESS: 
      return {
        howTos: action.payload
      }
    default:
      return state;
  }
};
