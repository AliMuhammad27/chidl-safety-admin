import {
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_ERROR,
} from "./actionTypes";
import api from "../../util/api";
import Success from "components/modals/Modal.Success";
import { useHistory } from "react-router-dom";
export const addProduct =
  (formData, searchParam, status, from, to, page, perPage, history) =>
  async (dispatch) => {
    try {
      const res = await api.post("/product/addProduct", formData);
      console.log("Ressss", res.data);
      console.log("Action is Running");
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
      Success("Product Added Successfully", "Added");
      history.push("/products");
      dispatch(getAllProducts(searchParam, status, from, to, page, perPage));
    } catch (err) {
      console.log("Err", err);
      dispatch({
        type: ADD_PRODUCT_ERROR,
      });
    }
  };

export const editProduct =
  (formData, id, searchParam, status, from, to, page, perPage, history) =>
  async (dispatch) => {
    try {
      const res = await api.post(`/product/editProduct/${id}`, formData);
      console.log("Ressss", res.data);
      console.log("Action is Running");
      dispatch({
        type: EDIT_PRODUCT,
        payload: res.data,
      });
      Success("Product Edited Successfully", "Added");
      history.push("/products");
      dispatch(getAllProducts(searchParam, status, from, to, page, perPage));
    } catch (err) {
      console.log("Err", err);
      dispatch({
        type: EDIT_PRODUCT_ERROR,
      });
    }
  };

export const getAllProducts =
  (searchParam, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/product/logs?searchString=${searchParam}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_PRODUCTS_ERROR,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/product/getProductDetails/${id}`);
    console.log("Ress", res);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_ERROR,
    });
  }
};

export const toggleActiveStatus =
  (id, searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(`/product/toggleActiveStatus/${id}`);
      Success(res.data.message, "Successfull");
      dispatch(getAllProducts(searchString, status, from, to, page, perPage));
    } catch (err) {
      dispatch({
        type: GET_PRODUCT_ERROR,
      });
    }
  };
