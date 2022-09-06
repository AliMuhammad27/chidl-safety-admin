import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword, verifyCode } from "redux/action/auth";
import Toasty from "util/toast";
const RecoverPassword2 = ({ history }) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth?.email);
  const [code, setCode] = useState("");
  console.log("email", email);
  return (
    <section className="authPage">
      <div className="align-items-center d-flex sideLink  go-back-icon ">
        <i className="fas fa-arrow-left pe-2" />
        <Link to="/forget-password" className="d-inline-block">
          Go Back
        </Link>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="signupBox">
              <form action="/reset-password">
                <div className="text-center mb-5">
                  <img
                    src="images/logo.png"
                    alt="signIn"
                    className="logo img-fluid"
                  />
                  <h4 className="auth-lg my-md-3 my-2">fORGOT pASSWORD</h4>
                  <p>Please Enter Code Here</p>
                </div>
                <div className="inp-wrap">
                  <label
                    htmlFor="number"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Code<span className="text-danger">*</span>
                  </label>
                  <input
                    id="number"
                    type="number"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    placeholder="Enter Code"
                    className="auth-input passInput"
                  />
                </div>
                <div className="text-end">
                  <button
                    className="notBtn cWhite primFont fw-400 mt-1"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(forgetPassword(email, history));
                    }}
                  >
                    <u>Resend Code</u>
                  </button>
                </div>
                <div className="text-center my-3 mb-2 mt-5">
                  <button
                    className="prim-btn w-100"
                    onClick={(e) => {
                      code.length > 0
                        ? dispatch(verifyCode(code, history))
                        : Toasty(
                            "Error",
                            "please fill all the required fields"
                          );
                      e.preventDefault();
                    }}
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoverPassword2;
