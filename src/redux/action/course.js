import { ADD_COURSE, ADD_COURSE_ERROR } from "./actionTypes";
import api from "util/api";
import Success from "components/modals/Modal.Success";
export const addCourse = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(`course/createCourse`, formData);
    console.log("Res", res.data);
    dispatch({
      type: ADD_COURSE,
      payload: res.data,
    });
    Success("Course Added Succesfully", "Added");
    history.push("/courses");
  } catch (err) {
    console.log("Err", err);
    dispatch({
      type: ADD_COURSE_ERROR,
    });
  }
};
