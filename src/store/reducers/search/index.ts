import { actionTypes as Action } from "../../actionTypes";
import { SearchProducts } from "../../../types";

const initials: SearchProducts = {
  data: [],
  loading: false,
  error: "",
};
export const searchReducer = (
  state: SearchProducts = initials,
  action: any
) => {
  switch (action.type) {
    case Action.GET_SEARCH_REQUEST:
      return { loading: true };
    case Action.GET_SEARCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case Action.GET_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
