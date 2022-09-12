import api from "util/api";
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
} from "./actionTypes";
import { loadAdmin } from "./auth";
import Success from "components/modals/Modal.Success";
export const updateProfile = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(`auth/editProfile`, formData);
    console.log("Res", res.data);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(loadAdmin());
    Success("Profile Updated Succesfully", "Updated");
  } catch (err) {
    dispatch({
      type: UPDATE_PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const updatePassword =
  (existingpassword, newpassword, confirm_password) => async (dispatch) => {
    const body = { existingpassword, newpassword, confirm_password };
    try {
      const res = await api.post(`auth/AdminverifyAndResetPassword`, body);
      console.log("Res", res.data);
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      });
      Success("Password Updated Successfully", "Updated");
    } catch (err) {
      dispatch({
        type: UPDATE_PASSWORD_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
