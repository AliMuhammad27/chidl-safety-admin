import api from "util/api";
import {
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  VERIFY_CODE,
  VERIFY_CODE_ERROR,
} from "../action/actionTypes";
import { setAuthToken } from "util/setAuthToken";
import Success from "components/modals/CustomModal";
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

//forget Password
export const forgetPassword = (email, history) => async (dispatch) => {
  const body = { email };
  try {
    const res = await api.post(`/auth/adminRecoverPassword`, body);
    console.log("Ress", res.data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: email,
    });
    Success("Recovery code sent to your registered email", "Recovery code");
    history.push("/verification-code");
  } catch (err) {
    dispatch({
      type: FORGET_PASSWORD_ERROR,
    });
  }
};

//verify code
export const verifyCode = (code, history) => async (dispatch) => {
  const body = { code };
  try {
    const res = await api.post(`/auth/adminVerifyRecoverCode`, body);
    console.log("Ress", res.data);
    dispatch({
      type: VERIFY_CODE,
      payload: code,
    });
    Success("Recovery code Accepted", "Accepted");
    history.push("/reset-password");
  } catch (err) {
    dispatch({
      type: VERIFY_CODE_ERROR,
    });
  }
};

//final reset
export const verifyAndReset =
  (code, email, password, confirm_password, history) => async (dispatch) => {
    const body = { code, email, password, confirm_password };
    try {
      const res = await api.post(`/auth/adminResetPassword`, body);
      console.log("Ress", res);
      dispatch({
        type: RESET_PASSWORD,
        payload: res.data,
      });
      Success("Password Reset Successfully", "Reset");
      history.push("/");
    } catch (err) {
      dispatch({
        type: RESET_PASSWORD_ERROR,
      });
    }
  };

//logout admin
export const logOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
