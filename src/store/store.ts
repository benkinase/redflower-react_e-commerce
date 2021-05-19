//import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware } from "redux";
//import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// initial redux state
let initialState = {};
// middleware
export const middleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
// Redux store
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
