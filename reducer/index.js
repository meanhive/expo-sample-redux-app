import { combineReducers } from "redux";
import { AsyncStorage } from "react-native";

// actions
import {
  QUOTES_AVAILABLE,
  ADD_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
} from "../action/index";

// state to store your data
let dataState = { quotes: [], loading: true };

// reducer logic
const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case QUOTES_AVAILABLE:
      state = Object.assign({}, state, {
        quotes: action.quotes,
        loading: false,
      });
      return state;
    default:
      return state;
  }
};

//combine all reducers
const rootReducer = combineReducers({
  dataReducer,
});

export default rootReducer;
