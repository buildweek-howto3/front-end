import {
  HOWTO_FETCH_SUCCESS,
  INITIAL_HOWTO_FETCH,
  FETCH_USER_NAME,
  FETCH_USER_ID,
  FETCH_USER_HOWTOS,
  SEARCH_HOWTOS,
  CREATE_USER_HOWTO
} from "../actions/howToActions";

const initialState = {
  loadingHowTos: false,
  howTos: [],
  filered: [],
  username: "",
  userId: "",
  userHowTos: [],
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
        username: action.payload,
      };
    case FETCH_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    case FETCH_USER_HOWTOS:
      if (action.payload === "") {
        return {
          ...state,
          userHowTos: [action.payload],
        };
      } else {
        return {
          ...state,
          userHowTos: action.payload,
        };
      }
    case SEARCH_HOWTOS:
      if (action.payload === "") {
        return state
      } else {
        return {
          ...state,
          filered: action.payload,
          howTos: state.filtered
        };
      }
      case CREATE_USER_HOWTO:
        return {
          ...state,
          userHowTos: action.payload
        }

    default:
      return state;
  }
};
