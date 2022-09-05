import {
  ADD_COURSE,
  ADD_COURSE_ERROR,
  GET_COURSES,
  GET_COURSES_ERROR,
  GET_COURSE_DETAILS,
  GET_COURSE_DETAILS_ERROR,
} from "redux/action/actionTypes";
const initialState = {
  courses: [],
  course: null,
  courseAdded: null,
  courseEdited: null,
  usercourses: [],
  isLoading: true,
};
const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COURSE:
      return {
        ...state,
        courseAdded: payload,
        isLoading: false,
      };
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
        isLoading: false,
      };
    case GET_COURSE_DETAILS:
      return {
        ...state,
        course: payload,
        isLoading: false,
      };
    case ADD_COURSE_ERROR:
    case GET_COURSES_ERROR:
    case GET_COURSE_DETAILS_ERROR:
      return {
        ...state,
        courses: null,
        usercourses: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default courseReducer;
