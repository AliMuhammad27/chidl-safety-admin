import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import useWindowTitle from "screens/hooks/UseWindowTitle";
import { useDispatch } from "react-redux";
import Toasty from "util/toast";
import { login } from "redux/action/auth";

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  console.log("Email", email);
  useWindowTitle("login");
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <section className="authPage">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="signupBox">
              <form action="dashboard">
                <div className="text-center mb-5">
                  <img
                    src="images/logo.png"
                    alt="signIn"
                    className="logo img-fluid"
                  />
                  <h4 className="auth-lg my-md-3 my-2">Admin Login</h4>
                  <p>
                    Please Enter Your Email Address and Password To Continue
                  </p>
                </div>
                <div className="inp-wrap mb-3">
                  <label
                    htmlFor="email"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email Address"
                    className="auth-input passInput"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="inp-wrap mb-3">
                  <label
                    htmlFor="pass"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative passwordWrapper">
                    <input
                      id="pass"
                      placeholder="Enter Password"
                      type={passwordShown ? "text" : "password"}
                      className="auth-input passInput"
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      type="button"
                      onClick={togglePassword}
                    >
                      <i
                        className={
                          passwordShown ? "fas fa-eye" : "fas fa-eye-slash"
                        }
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
                <div className="text-end mb-5">
                  <Link
                    to="/forget-password"
                    className="text-decoration-underline primFont fw-800 cWhite"
                  >
                    Forgot Password ?
                  </Link>
                </div>
                <div className="text-center my-3 mb-4">
                  <Link
                    className="prim-btn w-100"
                    onClick={(e) => {
                      email.length > 0 && password.length > 0
                        ? dispatch(login(email, password, history))
                        : Toasty(
                            "Error",
                            "Please fill all the required fields"
                          );
                    }}
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
