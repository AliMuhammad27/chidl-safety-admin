import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import SideBar from "layout/SideBar";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  console.log("isAuth", isAuthenticated);
  console.log("privatedRoute", isAuthenticated, isLoading);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !isLoading ? (
          <Redirect to="/" />
        ) : (
          <>
            <>
              <SideBar />
            </>
            <Component {...props} />
          </>
        )
      }
    />
  );
};
export default PrivateRoute;
