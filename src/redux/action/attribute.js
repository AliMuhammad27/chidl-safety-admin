import {
  ADD_ATTRIBUTE,
  ADD_ATTRIBUTE_ERROR,
  GET_ATTRIBUTES,
  GET_ATTRIBUTES_ERROR,
  GET_ALL_ATTRIBUTES,
} from "./actionTypes";
import api from "../../util/api";
import Success from "components/modals/Modal.Success";

export const addAttribute =
  (attributeName, attributeValue, attributeType, status, history) =>
  async (dispatch) => {
    const body = { attributeName, attributeValue, attributeType, status };
    try {
      const res = await api.post(`/attribute/createAttribute`, body);
      console.log("Res", res.data);
      dispatch({
        type: ADD_ATTRIBUTE,
        payload: res.data,
      });
      Success("Attribute Added Succesfully", "Added");
      //history.push("/courses");
    } catch (err) {
      console.log("Err", err);
      dispatch({
        type: ADD_ATTRIBUTE_ERROR,
      });
    }
  };

export const getAttributes = () => async (dispatch) => {
  try {
    const res = await api.get("/attribute/getAllAttributes");
    console.log("Ress", res);
    dispatch({
      type: GET_ALL_ATTRIBUTES,
      payload: res.data,
    });
  } catch (err) {
    console.log("Err", err);
  }
};

export const getAllAttributes =
  (searchParam, status, from, to, sort, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/attribute/logs?searchString=${searchParam}&status=${status}&from=${from}&to=${to}&sort=${sort}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_ATTRIBUTES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_ATTRIBUTES_ERROR,
      });
    }
  };
