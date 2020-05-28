import {
  HOWTO_FETCH_SUCCESS,
  INITIAL_HOWTO_FETCH,
  FETCH_USER_NAME,
  FETCH_USER_ID,
  FETCH_USER_HOWTOS
} from "../actions/howToActions";

const initialState = {
  loadingHowTos: false,
  howTos: [],
  currentUser: "",
  username: "",
  userId: "",
  userHowTos: []
};

export const howToReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_HOWTO_FETCH:
      return {
        ...state,
        loadingHowTos: true,
      };
    case HOWTO_FETCH_SUCCESS:
      return {
        ...state,
        howTos: action.payload,
        loadingHowTos: false,
      };
    case FETCH_USER_NAME:
      return {
        ...state,
        username: action.payload
      };
    case FETCH_USER_ID:
      return {
        ...state,
        userId: action.payload
      };
      case FETCH_USER_HOWTOS:
        return {
          ...state,
          userHowTos: action.payload
        }
    default:
      return state;
  }
};
