import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import course from "./course";
import category from "./category";
import attribute from "./attribute";
import product from "./product";
import service from "./service";
import subscription from "./subscription";
import quiz from "./quiz";
export default combineReducers({
  auth,
  profile,
  course,
  category,
  attribute,
  product,
  service,
  subscription,
  quiz,
});
