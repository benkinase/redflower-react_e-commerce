import { actionTypes as Action } from "../../actionTypes";
import { ProductDetailsState, ProductAction, IProduct } from "../../../types";

const initialState: ProductDetailsState = {
  product: {} as IProduct,
  loading: false,
  error: "",
};

export const detailReducer = (
  state: ProductDetailsState = initialState,
  action: ProductAction
) => {
  switch (action.type) {
    case Action.GET_PRODUCT_REQUEST:
      return { loading: true };
    case Action.GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case Action.GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
