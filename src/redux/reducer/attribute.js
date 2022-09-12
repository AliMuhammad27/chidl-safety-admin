import {
  ADD_ATTRIBUTE,
  ADD_ATTRIBUTE_ERROR,
  GET_ALL_ATTRIBUTES,
  GET_ATTRIBUTES,
  GET_ATTRIBUTES_ERROR,
  EDIT_ATTRIBUTE,
  EDIT_ATTRIBUTE_ERROR,
  EDIT_PRODUCT_ERROR,
  GET_ATTRIBUTE,
  GET_ATTRIBUTE_ERROR,
} from "redux/action/actionTypes";
const initialState = {
  attributes: null,
  attribute: null,
  allattributes: null,
  attributeAdded: null,
  attributeEdited: null,
  isLoading: true,
};
const attributeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ATTRIBUTE:
      return {
        ...state,
        attributeAdded: payload,
        isLoading: false,
      };
    case GET_ATTRIBUTE:
      return {
        ...state,
        attribute: payload,
        isLoading: false,
      };
    case EDIT_ATTRIBUTE:
      return {
        ...state,
        attributeEdited: payload,
        isLoading: false,
      };
    case GET_ATTRIBUTES:
      return {
        ...state,
        attributes: payload,
        isLoading: false,
      };
    case GET_ALL_ATTRIBUTES:
      return {
        ...state,
        allattributes: payload,
        isLoading: false,
      };
    case ADD_ATTRIBUTE_ERROR:
    case GET_ATTRIBUTES_ERROR:
    case EDIT_PRODUCT_ERROR:
    case GET_ATTRIBUTE_ERROR:
      return {
        ...state,
        categories: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default attributeReducer;
