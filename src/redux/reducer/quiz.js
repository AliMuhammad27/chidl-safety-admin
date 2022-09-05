import {
  ADD_QUIZ,
  ADD_QUIZ_ERROR,
  GET_QUIZ,
  GET_QUIZ_ERROR,
} from "../action/actionTypes";
const initialState = {
  quizes: null,
  service: null,
  quizAdded: null,
  quizEdited: null,
  isLoading: true,
};
const quizReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_QUIZ:
      return {
        ...state,
        quizAdded: payload,
        isLoading: false,
      };
    case GET_QUIZ:
      return {
        ...state,
        quizes: payload,
        isLoading: false,
      };
    case ADD_QUIZ_ERROR:
    case GET_QUIZ_ERROR:
      return {
        ...state,
        quizes: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default quizReducer;
