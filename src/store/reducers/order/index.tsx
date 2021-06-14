import { actionTypes as Action } from "../../actionTypes";
import { OrderState } from "../../../types";

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: "",
  message: "",
};

export const orderReducer = (state: OrderState = initialState, action: any) => {
  switch (action.type) {
    case Action.GET_ORDERS_REQUEST:
      return { loading: true };
    case Action.GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case Action.GET_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case Action.DELETE_ORDER_REQUEST:
      return { loading: true };
    case Action.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state?.orders?.filter((order) => order.id !== action.payload),
      };

    case Action.DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
