import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  error: null,
  isLoading: false,

  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHAR_START:
      return {
        ...state,
        error: '',
        isLoading: true
      };
    case FETCH_CHAR_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FETCH_CHAR_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        characters: [...state, ...action.payload],
        isLoading: false
      };
    default:
      return state;
  }
};
