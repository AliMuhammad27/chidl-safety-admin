import {
  ADD_CATEGORY,
  ADD_CATEGORY_ERROR,
  GET_ALL_CATEGORIES,
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
} from "redux/action/actionTypes";
const initialState = {
  categories: null,
  category: null,
  allcategories: null,
  categoryAdded: null,
  categoryEdited: null,
  isLoading: true,
};
const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categoryAdded: payload,
        isLoading: false,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allcategories: payload,
        isLoading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
        isLoading: false,
      };

    case ADD_CATEGORY_ERROR:
    case GET_CATEGORIES_ERROR:
    case GET_CATEGORY_ERROR:
      return {
        ...state,
        categories: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default categoryReducer;
