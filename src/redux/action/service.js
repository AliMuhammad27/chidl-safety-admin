import {
  ADD_SERVICE,
  ADD_SERVICE_ERROR,
  GET_SERVICES,
  GET_SERVICES_ERROR,
  GET_SERVICE_DETAILS,
  GET_SERVICE_DETAILS_ERROR,
} from "./actionTypes";
import api from "../../util/api";
import Success from "components/modals/Modal.Success";
import { useHistory } from "react-router-dom";

export const getAllServices =
  (searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/service/logs?searchString=${searchString}&status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_SERVICES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SERVICES_ERROR,
      });
    }
  };

export const addService =
  (formData, searchParam, status, from, to, page, perPage, history) =>
  async (dispatch) => {
    try {
      const res = await api.post("/service/creatService", formData);
      console.log("Ressss", res.data);
      console.log("Action is Running");
      dispatch({
        type: ADD_SERVICE,
        payload: res.data,
      });
      Success("Service Added Successfully", "Added");
      history.push("/services");
      dispatch(getAllServices(searchParam, status, from, to, page, perPage));
    } catch (err) {
      console.log("Err", err);
      dispatch({
        type: ADD_SERVICE_ERROR,
      });
    }
  };

export const getServiceDetails = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/service/serviceDetails/${id}`);
    console.log("Res", res);
    dispatch({
      type: GET_SERVICE_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SERVICE_DETAILS_ERROR,
    });
  }
};
