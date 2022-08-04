import { ADD_COURSE, ADD_COURSE_ERROR } from "redux/action/actionTypes";
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
    case ADD_COURSE_ERROR:
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
