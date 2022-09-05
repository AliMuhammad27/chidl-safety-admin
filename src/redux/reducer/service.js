import {
  ADD_SERVICE,
  ADD_SERVICE_ERROR,
  GET_SERVICES,
  GET_SERVICES_ERROR,
  GET_SERVICE_DETAILS,
  GET_SERVICE_DETAILS_ERROR,
} from "redux/action/actionTypes";
const initialState = {
  services: null,
  service: null,
  serviceAdded: null,
  serviceEdited: null,
  isLoading: true,
};

const serviceReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_SERVICE:
      return {
        ...state,
        serviceAdded: payload,
        isLoading: false,
      };
    case GET_SERVICES:
      return {
        ...state,
        services: payload,
        isLoading: false,
      };
    case GET_SERVICE_DETAILS:
      return {
        ...state,
        service: payload,
        isLoading: false,
      };
    case ADD_SERVICE_ERROR:
    case GET_SERVICES_ERROR:
    case GET_SERVICE_DETAILS_ERROR:
      return {
        ...state,
        services: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default serviceReducer;
