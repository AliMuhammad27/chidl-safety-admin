import React from "react";

const RecoverPassword2 = () => {
  return (
    <section className="authPage">
      <div className="align-items-center d-flex sideLink  go-back-icon ">
        <i className="fas fa-arrow-left pe-2" />
        <a href="./login.php" className="d-inline-block">
          Go Back
        </a>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="signupBox">
              <form action="/reset-password">
                <div className="text-center mb-5">
                  <img
                    src="../../images/logo.png"
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
                    placeholder="Enter Code"
                    className="auth-input passInput"
                  />
                </div>
                <div className="text-end">
                  <button className="notBtn cWhite primFont fw-400 mt-1">
                    <u>Resend Code</u>
                  </button>
                </div>
                <div className="text-center my-3 mb-2 mt-5">
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

export default RecoverPassword2;
