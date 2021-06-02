import { actionTypes as Action } from "../../actionTypes";
import { ProductState, ProductsAction } from "../../../types";

const initialState: ProductState = {
  data: [],
  loading: false,
  error: "",
};

export const productReducer = (
  state: ProductState = initialState,
  action: ProductsAction
) => {
  switch (action.type) {
    case Action.GET_PRODUCTS_REQUEST:
      return { loading: true };
    case Action.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    case Action.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
