import {
  CREATE_SUBSCRIPTION,
  CREATE_SUBSCRIPTION_ERROR,
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_ERROR,
  EDIT_SUBSCRIPTION,
  EDIT_SUBSCRIPTION_ERROR,
  GET_SUBSCRIPTION,
  GET_SUBSCRIPTION_ERROR,
} from "redux/action/actionTypes";
const initialState = {
  subscriptions: null,
  subscription: null,
  subscriptionAdded: null,
  subscriptionEdited: null,
  isLoading: true,
};

const subscriptionReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_SUBSCRIPTION:
      return {
        ...state,
        subscriptionAdded: payload,
        isLoading: false,
      };
    case EDIT_SUBSCRIPTION:
      return {
        ...state,
        subscriptionEdited: payload,
        isLoading: false,
      };

    case GET_SUBSCRIPTION:
      return {
        ...state,
        subscription: payload,
        isLoading: false,
      };

    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: payload,
        isLoading: false,
      };
    case GET_SUBSCRIPTIONS_ERROR:
    case CREATE_SUBSCRIPTION_ERROR:
    case EDIT_SUBSCRIPTION_ERROR:
    case GET_SUBSCRIPTION_ERROR:
      return {
        ...state,
        services: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default subscriptionReducer;
