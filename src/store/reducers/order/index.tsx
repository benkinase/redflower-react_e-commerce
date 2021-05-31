import { actionTypes as Action } from "../../actionTypes";
import { OrderState } from "../../../types";

const initialState: OrderState = {
  id: null,
  orders: [],
  paid_amount: null,
  loading: false,
  error: "",
  message: "",
};

export const orderReducer = (
  state: typeof initialState = initialState,
  action: any
) => {
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
        orders: state?.orders?.filter((i) => i.id !== action.payload),
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
