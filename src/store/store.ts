import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer, { RootState } from "./reducers";

// initial redux state
let initialState = {};
// middleware
export const middleware = [thunk];

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }
// Redux store
const store: Store<RootState> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
