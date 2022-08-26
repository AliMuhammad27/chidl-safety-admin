import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "screens/auth/Login";
import RecoverPassowrd1 from "screens/auth/RecoverPassowrd1";
import RecoverPassword2 from "screens/auth/RecoverPassword2";
import RecoverPassword3 from "screens/auth/RecoverPassword3";
import Dashboard from "screens/dashboard/Dashboard";
import Courses from "screens/courses/Courses";
import AddCourse from "screens/courses/AddCourse";
import EditCourse from "screens/courses/EditCourse";
import CourseDetail from "screens/courses/CourseDetail";
import PurchasedCourses from "screens/courses/PurchasedCourses";
import Products from "screens/products/Products";
import AddProduct from "screens/products/AddProduct";
import EditProduct from "screens/products/EditProduct";
import ProductDetails from "screens/products/ProductDetails";
import AttributeManagement from "screens/attribute/AttributeManagement";
import CategoryManagement from "screens/category/CategoryManagement";
import PaymentLogs from "screens/paymentlogs/PaymentLogs";
import Services from "screens/service/Services";
import AddService from "screens/service/AddService";
import ServiceRequestLogs from "screens/service/ServiceRequestLogs";
import ServiceDetails from "screens/service/ServiceDetails";
import EditService from "screens/service/EditService";
import SubscriptionManagement from "screens/subscription/SubscriptionManagement";
import PurchasedSubscription from "screens/subscription/PurchasedSubscription";
import Feedbacks from "screens/feedback/Feedbacks";
import OrderManagement from "screens/orders/OrderManagement";
import DeliveredOrderDetails from "screens/orders/DeliveredOrderDetails";
import PendingOrderDetails from "screens/orders/PendingOrderDetails";
import UserLogs from "screens/users/UserLogs";
import UserDetails from "screens/users/UserDetails";
import Quiz from "screens/quiz/Quiz";
import EditQuiz from "screens/quiz/EditQuiz";
import SideBar from "layout/SideBar";
import Profile from "screens/profile/Profile";
import EditProfile from "screens/profile/EditProfile";
import Notifications from "screens/profile/Notifications";
import { setAuthToken } from "util/setAuthToken";
import { Provider } from "react-redux";
import store from "redux/store/store";
import PrivateRoute from "screens/routing/PrivateRoute";
import { loadAdmin } from "redux/action/auth";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
export default function App() {
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);
  return (
    <Provider store={store}>
      <Router basename="/child-safety/admin">
        <Route path="/" component={Login} exact />
        <Route path="/forget-password" component={RecoverPassowrd1} exact />
        <Route path="/verification-code" component={RecoverPassword2} exact />
        <Route path="/reset-password" component={RecoverPassword3} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/profile" component={Profile} exact />
        <PrivateRoute path="/edit-profile" component={EditProfile} exact />
        <PrivateRoute path="/courses" component={Courses} exact />
        <PrivateRoute path="/add-course" component={AddCourse} exact />
        <PrivateRoute path="/edit-course/:id" component={EditCourse} exact />
        <PrivateRoute
          path="/course-details/:id"
          component={CourseDetail}
          exact
        />
        <PrivateRoute path="/products" component={Products} exact />
        <PrivateRoute path="/add-product" component={AddProduct} exact />
        <PrivateRoute path="/edit-product/:id" component={EditProduct} exact />
        <PrivateRoute
          path="/product-details/:id"
          component={ProductDetails}
          exact
        />
        <PrivateRoute path="/users" component={UserLogs} exact />
        <PrivateRoute path="/users-details/:id" component={UserDetails} exact />
        <PrivateRoute path="/services" component={Services} exact />
        <PrivateRoute path="/add-service" component={AddService} exact />
        <PrivateRoute
          path="/service-requested-logs"
          component={ServiceRequestLogs}
          exact
        />
        <PrivateRoute path="/edit-service/:id" component={EditService} exact />
        <PrivateRoute
          path="/service-details/:id"
          component={ServiceDetails}
          exact
        />
        <PrivateRoute
          path="/subscription-management"
          component={SubscriptionManagement}
          exact
        />
        <PrivateRoute
          path="/category-management"
          component={CategoryManagement}
          exact
        />

        <PrivateRoute
          path="/attribute-management"
          component={AttributeManagement}
          exact
        />
      </Router>
    </Provider>
  );
}
