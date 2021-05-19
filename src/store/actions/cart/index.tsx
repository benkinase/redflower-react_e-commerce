import { ICart } from "../../../pages/types";
import { actionTypes as Action } from "../../actionTypes";

const addToCart = (item: ICart) => async (dispatch: any) => {
  dispatch({
    type: Action.CART_ADD_ITEM,
    payload: item,
  });
};
const multipQtyChange =
  (item: ICart, quantity: number) => async (dispatch: any) => {
    dispatch({
      type: "CART_MULTIPLE_QTY",
      payload: { item, quantity },
    });
  };

const removeCartItem = (id: number) => (dispatch: any) => {
  dispatch({ type: Action.CART_REMOVE_ITEM, payload: id });
};

const decreaseCartItem = (id: number) => (dispatch: any) => {
  dispatch({ type: Action.CART_DECREASE_ITEM, payload: id });
};
const increaseCartItem = (id: number) => (dispatch: any) => {
  dispatch({ type: Action.CART_INCREASE_ITEM, payload: id });
};
const clearCart = () => (dispatch: any) => {
  dispatch({ type: Action.CLEAR_CART });
};
const getItemTotal = (item: ICart) => {
  try {
    let quantity = item.count;
    let price = +item.price;
    let total = (quantity * price).toFixed(2);
    return total;
  } catch (error) {
    console.log(error.message);
  }
};
function cartTotalLength(cartItems: ICart[]): any {
  try {
    return cartItems?.reduce((acc: any, curVal: any) => {
      return (acc += curVal.quantity);
    }, 0);
  } catch (error) {
    console.log(error.message);
  }
}
function cartTotalPrice(cartItems: ICart[]): any {
  try {
    return cartItems?.reduce((acc: any, curVal: any) => {
      return (acc += curVal.price * curVal.count);
    }, 0);
  } catch (error) {
    console.log(error.message);
  }
}

export {
  addToCart,
  removeCartItem,
  decreaseCartItem,
  increaseCartItem,
  getItemTotal,
  cartTotalLength,
  cartTotalPrice,
  clearCart,
  multipQtyChange,
};
