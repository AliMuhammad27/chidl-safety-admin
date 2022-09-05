import {
  ADD_COURSE,
  ADD_COURSE_ERROR,
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSE_DETAILS,
  GET_COURSE_DETAILS_ERROR,
} from "./actionTypes";
import api from "util/api";
import Success from "components/modals/Modal.Success";
export const addCourse = (formData, history) => async (dispatch) => {
  try {
    const res = await api.post(`/course/createCourse`, formData);
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

export const getAllCourses =
  (searchParam, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/course/Logs?searchString=${searchParam}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_COURSES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_COURSES_ERROR,
      });
    }
  };

export const getCourseDetails = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/course/getCourseDetails/${id}`);
    console.log("Res", res);
    dispatch({
      type: GET_COURSE_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_COURSE_DETAILS_ERROR,
    });
  }
};
