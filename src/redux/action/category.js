import {
  ADD_CATEGORY,
  ADD_CATEGORY_ERROR,
  GET_CATEGORIES,
  GET_CATEGORIES_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_ERROR,
  EDIT_CATEGORY,
  EDIT_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  GET_ALL_CATEGORIES,
} from "./actionTypes";
import api from "../../util/api";
import Success from "components/modals/Modal.Success";
import Success1 from "components/modals/CustomModal";
export const addCategory =
  (categoryName, statuss, searchString, status, from, to, page, perPage) =>
  async (dispatch) => {
    const body = {
      categoryName,
      statuss,
    };
    try {
      const res = await api.post(`/category/createCategory`, body);
      console.log("Res", res.data);
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data,
      });
      Success("Category Added Succesfully", "Added");
      dispatch(getAllCategories(searchString, status, from, to, page, perPage));
    } catch (err) {
      console.log("Err", err);
      dispatch({
        type: ADD_CATEGORY_ERROR,
      });
    }
  };
export const getAllCategories =
  (searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/category/logs?searchString=${searchString}&status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_CATEGORIES_ERROR,
      });
    }
  };

export const getCategoires = () => async (dispatch) => {
  try {
    const res = await api.get("/category/getAllCats");
    console.log("Ress", res);
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    console.log("Err", err);
  }
};

export const getCategoryDetails = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/category/details/${id}`);
    console.log("Ress", res);
    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_CATEGORY_ERROR,
    });
  }
};
export const editCategory =
  (id, categoryName, statuss, searchString, status, from, to, page, perPage) =>
  async (dispatch) => {
    const body = JSON.stringify({ categoryName, statuss });
    try {
      console.log("abbbbb", id, categoryName, statuss);
      const res = await api.post(`/category/editCategory/${id}`, body);
      dispatch({
        type: EDIT_CATEGORY,
        payload: res.data,
      });
      Success("Category Edited Succesfully", "Edited");
      dispatch(getAllCategories(searchString, status, from, to, page, perPage));
    } catch (err) {
      dispatch({
        type: EDIT_CATEGORY_ERROR,
      });
    }
  };

export const toggleActiveStatus =
  (id, searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(`/category/toggleStatus/${id}`);
      // Success(res?.data?.msg);
      dispatch(getAllCategories(searchString, status, from, to, page, perPage));
    } catch (err) {
      dispatch({
        type: EDIT_CATEGORY_ERROR,
      });
    }
  };
