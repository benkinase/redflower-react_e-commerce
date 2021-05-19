import { actionTypes as Action } from "../../actionTypes";
import { axiosAPI } from "../../../utils/credentials";
import { AxiosResponse } from "axios";
// GET Orders

export const fetchOrders = () => async (dispatch: any) => {
  dispatch({
    type: Action.GET_ORDERS_REQUEST,
    payload: {},
  });
  try {
    const res: AxiosResponse<any> = await axiosAPI.get(`/api/orders/`);
    dispatch({
      type: Action.GET_ORDERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Action.GET_ORDERS_FAIL,
      payload: error.message,
    });
  }
};
export const removeOrder = (id: number) => async (dispatch: any) => {
  dispatch({
    type: Action.DELETE_ORDER_REQUEST,
    payload: { id },
  });
  try {
    await axiosAPI.delete(`/api/orders/${id}`);

    dispatch({
      type: Action.DELETE_ORDER_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: Action.DELETE_ORDER_FAIL,
      payload: error.message,
    });
  }
};
