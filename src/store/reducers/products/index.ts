import { actionTypes as Action } from "../../actionTypes";
import { ProductState, ProductAction } from "../../../pages/types";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
};

export const productReducer = (
  state: typeof initialState = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case Action.GET_PRODUCTS_REQUEST:
      return { loading: true };
    case Action.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
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
