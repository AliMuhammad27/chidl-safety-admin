import api from "util/api";
import {
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from "../action/actionTypes";
import { setAuthToken } from "util/setAuthToken";
//loading admin
export const loadAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await api.get(`/auth/getProfile`);
    dispatch({
      type: ADMIN_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//login admin
export const login = (email, password, history) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post(`auth/adminLogin`, body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadAdmin());
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
    });
    Error(err);
  }
};

//logout admin
export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
