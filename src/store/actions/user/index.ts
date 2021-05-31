import { actionTypes as Action } from "../../actionTypes";
import { axiosAPI, axiosAPI2 } from "../../../utils/credentials";
import { UserValues, User } from "../../../types";

export const loadUser = () => async (dispatch: any) => {
  dispatch({
    type: Action.LOAD_REQUEST,
    payload: {},
  });
  try {
    const { data } = await axiosAPI.get(`api/v1/users/me/`);
    dispatch({ type: Action.LOAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: Action.LOAD_FAIL,
      payload: error.message || error.detail,
    });
  }
};

// log in existing user
export const login = (formValues: UserValues) => async (dispatch: any) => {
  const { username, password } = formValues;
  const user: User = { username, password };
  dispatch({ type: Action.LOGIN_REQUEST, payload: user });
  try {
    const { data } = await axiosAPI2.post("/api/v1/token/login/", user);

    dispatch({ type: Action.LOGIN_SUCCESS, payload: data });
    localStorage.setItem("token", JSON.stringify(data.auth_token));
  } catch (error) {
    dispatch({
      type: Action.LOGIN_FAIL,
      payload: error.message || error.detail || error.non_field_errors,
    });
  }
};

// register new user
export const register = (newUser: UserValues) => async (dispatch: any) => {
  dispatch({
    type: Action.REGISTER_REQUEST,
    payload: newUser,
  });
  try {
    const { data } = await axiosAPI.post("/api/v1/users/", newUser);
    dispatch({ type: Action.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: Action.REGISTER_FAIL,
      payload: error,
    });
  }
};
// LOGOUT USER
export const logoutUser = () => (dispatch: any) => {
  try {
    localStorage.removeItem("token");
    dispatch({
      type: Action.LOGOUT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: Action.LOGOUT_FAIL,
      payload: error,
    });
  }
};
