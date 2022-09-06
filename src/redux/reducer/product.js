import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
} from "redux/action/actionTypes";
const initialState = {
  products: null,
  product: null,
  productAdded: null,
  productEdited: null,
  isLoading: true,
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productAdded: payload,
        isLoading: false,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        productEdited: payload,
        isLoading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        isLoading: false,
      };
    case ADD_PRODUCT_ERROR:
    case GET_PRODUCTS_ERROR:
    case GET_PRODUCTS_ERROR:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        products: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default productReducer;
