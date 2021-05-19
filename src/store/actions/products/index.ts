import { actionTypes as Action } from "../../actionTypes";
import { AxiosResponse } from "axios";
import { axiosAPI } from "../../../utils";

// GET Projects

export const fetchDjangoProducts = () => async (dispatch: any) => {
  dispatch({
    type: Action.GET_PRODUCTS_REQUEST,
    payload: {},
  });
  try {
    const res: AxiosResponse<any> = await axiosAPI.get(`/api/products/`);
    dispatch({
      type: Action.GET_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Action.GET_PRODUCTS_FAIL,
      payload: error.message,
    });
  }
};
export const fetchDjangoProduct =
  (cat_slug: string, prod_slug: string) => async (dispatch: any) => {
    dispatch({
      type: Action.GET_PRODUCT_REQUEST,
      payload: { cat_slug, prod_slug },
    });
    try {
      const res: AxiosResponse<any> = await axiosAPI.get(
        `/api/products/${cat_slug}/${prod_slug}/`
      );

      dispatch({
        type: Action.GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: Action.GET_PRODUCT_FAIL,
        payload: error.message,
      });
    }
  };
export const fetchCategories = (cat_slug: string) => async (dispatch: any) => {
  dispatch({
    type: Action.GET_CATEGORIES_REQUEST,
    payload: { cat_slug },
  });
  try {
    const res: AxiosResponse<any> = await axiosAPI.get(
      `/api/products/${cat_slug}/`
    );

    dispatch({
      type: Action.GET_CATEGORIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Action.GET_CATEGORIES_FAIL,
      payload: error.message,
    });
  }
};
export const fetchSearchProducts = (query: any) => async (dispatch: any) => {
  dispatch({
    type: Action.GET_SEARCH_REQUEST,
    payload: { query },
  });
  try {
    const res: AxiosResponse<any> = await axiosAPI.post(
      "/api/products/search/",
      { query }
    );

    dispatch({
      type: Action.GET_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Action.GET_SEARCH_FAIL,
      payload: error.message,
    });
  }
};
