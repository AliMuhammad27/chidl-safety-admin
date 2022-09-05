import {
  CREATE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION_ERROR,
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_ERROR,
} from "./actionTypes";
import api from "../../util/api";
import Success from "components/modals/Modal.Success";
import { useHistory } from "react-router-dom";

export const getAllSubscriptions =
  (searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.get(
        `/subscription/logs?searchString=${searchString}&status=${status}&from=${from}&to=${to}&page=${page}&perPage=${perPage}`
      );
      console.log("Res", res.data);
      dispatch({
        type: GET_SUBSCRIPTIONS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_SUBSCRIPTIONS_ERROR,
      });
    }
  };

export const addSubscription =
  (form, searchString, status, from, to, page, perPage) => async (dispatch) => {
    try {
      const res = await api.post(`/subscription/creatSubscription`, form);
      console.log("Res", res.data);
      dispatch({
        type: CREATE_SUBSCRIPTION,
        payload: res.data,
      });
      Success(" Subscription Added Successfully", "Added");
      dispatch(
        getAllSubscriptions(searchString, status, from, to, page, perPage)
      );
    } catch (err) {
      dispatch({
        type: CREATE_SUBSCRIPTION_ERROR,
      });
    }
  };
