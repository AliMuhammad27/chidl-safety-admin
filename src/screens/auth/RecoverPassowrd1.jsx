import React from "react";
import { Link } from "react-router-dom";

const RecoverPassowrd1 = () => {
  return (
    <section className="authPage">
      <div className="align-items-center d-flex sideLink  go-back-icon ">
        <i className="fas fa-arrow-left pe-2" />
        <Link to="/" clLinkssName="d-inline-block">
          Go Back
        </Link>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="signupBox">
              <form action="/verification-code">
                <div className="text-center mb-5">
                  <img
                    src="../../images/logo.png"
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
                    type="email"
                    placeholder="Enter Email Address"
                    className="auth-input passInput"
                  />
                </div>
                <div className="text-center my-3 mb-2">
                  <button className="prim-btn w-100">Continue</button>
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
