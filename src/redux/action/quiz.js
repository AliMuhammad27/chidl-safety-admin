import {
  ADD_QUIZ,
  ADD_QUIZ_ERROR,
  GET_QUIZ,
  GET_QUIZ_ERROR,
} from "./actionTypes";
import api from "../../util/api";
import Success from "components/modals/Modal.Success";
import { useHistory } from "react-router-dom";

export const getAllQuiz =
  (searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/quiz/logs?searchString=${searchString}&status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_QUIZ,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_QUIZ_ERROR,
      });
    }
  };

export const addQuiz =
  (formData, searchParam, status, from, to, page, perPage, history) =>
  async (dispatch) => {
    try {
      const res = await api.post("/quiz/creatQuiz", formData);
      console.log("Ressss", res.data);
      console.log("Action is Running");
      dispatch({
        type: ADD_QUIZ,
        payload: res.data,
      });
      Success("Quiz Added Successfully", "Added");
      history.push("/quiz");
      dispatch(getAllQuiz(searchParam, status, from, to, page, perPage));
    } catch (err) {
      console.log("Err", err);
      dispatch({
        type: ADD_QUIZ_ERROR,
      });
    }
  };
