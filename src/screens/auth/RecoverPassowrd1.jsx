import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgetPassword } from "redux/action/auth";
import Toasty from "util/toast";
const RecoverPassowrd1 = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  return (
    <section className="authPage">
      <div className="align-items-center d-flex sideLink  go-back-icon ">
        <Link to="/" clLinkssName="d-inline-block">
          <i className="fas fa-arrow-left pe-2" />
        </Link>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="signupBox">
              <form action="/verification-code">
                <div className="text-center mb-5">
                  <img
                    src="images/logo.png"
                    alt="signIn"
                    className="logo img-fluid"
                  />
                  <h4 className="auth-lg my-md-3 my-2">fORGOT pASSWORD</h4>
                  <p>Please Enter Your Email to Get the Code</p>
                </div>
                <div className="inp-wrap mb-5">
                  <label
                    htmlFor="email"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter Email Address"
                    className="auth-input passInput"
                  />
                </div>
                <div className="text-center my-3 mb-2">
                  <button
                    className="prim-btn w-100"
                    onClick={(e) => {
                      email.length > 0
                        ? dispatch(forgetPassword(email, history))
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

export default RecoverPassowrd1;
