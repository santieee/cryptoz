import { createStore, applyMiddleware, combineReducers } from "redux";
import { currencies } from "./currencies/reducer";
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({currencies}),
  applyMiddleware(thunk)
);
