import { actionTypes as Action } from "../../actionTypes";
import { Categories, SearchProducts } from "../../../types";

const initialState: Categories = {
  data: [],
  name: "",
  loading: false,
  error: "",
};

export const catReducer = (
  state: typeof initialState = initialState,
  action: any
) => {
  switch (action.type) {
    case Action.GET_CATEGORIES_REQUEST:
      return { loading: true };
    case Action.GET_CATEGORIES_SUCCESS:
      return {
        loading: false,
        data: action.payload.products,
        name: action.payload.name,
      };
    case Action.GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initials: SearchProducts = {
  data: [],
  loading: false,
  error: "",
};
export const searchReducer = (
  state: typeof initialState = initials,
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
