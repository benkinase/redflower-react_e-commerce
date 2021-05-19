import { actionTypes as Action } from "../../actionTypes";
import { ProductDetailsState, ProductAction } from "../../../pages/types";

const initialState: ProductDetailsState = {
  product: {},
  loading: false,
  error: "",
};

export const detailReducer = (
  state: typeof initialState = initialState,
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
