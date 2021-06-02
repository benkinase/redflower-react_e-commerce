import { combineReducers } from "redux";
import { productReducer } from "./products";
import { cartReducer } from "./cart";
import { detailReducer } from "./product";
import { registerReducer, loginReducer } from "./user";
import { catReducer } from "./categories";
import { searchReducer } from "./search";
import { orderReducer } from "./order";

// combine reducers for scalability
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  product: detailReducer,
  auth: loginReducer,
  register: registerReducer,
  categories: catReducer,
  order: orderReducer,
  search: searchReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
