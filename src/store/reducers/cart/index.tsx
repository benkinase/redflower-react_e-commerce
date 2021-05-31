import { actionTypes as Action } from "../../actionTypes";
import { CartState } from "../../../types";

let cartValue;
const initCart = localStorage.getItem("cart");
if (initCart) {
  cartValue = JSON.parse(initCart);
}
const initialState: CartState = {
  cartItems: cartValue || [],
};
//initialState.cartItems = cartValue || [];

export const cartReducer = (
  state: typeof initialState = initialState,
  action: any
) => {
  //console.log(action);
  switch (action.type) {
    case Action.CART_ADD_ITEM:
      const item = action.payload;
      const existsItem = state.cartItems.find((i) => i.id === item.id);
      // const inCart = state.cartItems.find((prod) =>
      //   prod.id === item.id ? true : false
      // );
      if (existsItem) {
        existsItem.count += 1;
        const newCart = [...state.cartItems];
        localStorage.setItem("cart", JSON.stringify(newCart));

        return {
          ...state,
          cartItems: newCart,
        };
      } else {
        item.count = 1;
        item.inCart = true;
        const newCart = [...state.cartItems, item];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          ...state,
          cartItems: newCart,
        };
      }

    case Action.CART_REMOVE_ITEM:
      const currentCart = [...state.cartItems];
      const newCart = currentCart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cartItems: newCart,
      };

    case "MUILTIPLY_QTY":
      //const { item, quantity } = action.payload;
      return {};

    case Action.CART_DECREASE_ITEM:
      let latestCart = [...state.cartItems];
      // get current item
      let currentItem = state?.cartItems.find(
        (item) => item.id === action.payload
      );
      let amount;
      // if cart item and item count is 1, remove item
      if (currentItem !== undefined && currentItem.count === 1) {
        latestCart = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }

      if (currentItem !== undefined && currentItem.count > 1) {
        amount = currentItem.count - 1;
        currentItem.count = amount;
        latestCart = [...state.cartItems];
      }

      localStorage.setItem("cart", JSON.stringify(latestCart));
      return {
        ...state,
        cartItems: latestCart,
      };
    case Action.CLEAR_CART:
      localStorage.removeItem("cart");
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};
