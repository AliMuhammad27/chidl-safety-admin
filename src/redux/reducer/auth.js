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

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: true,
  email: null,
  code: null,
  reset: null,
  admin: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        admin: payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        email: payload,
        isLoading: false,
      };
    case VERIFY_CODE:
      return {
        ...state,
        code: payload,
        isLoading: false,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        reset: payload,
        isLoading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false,
      };

    case LOGIN_FAILED:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
