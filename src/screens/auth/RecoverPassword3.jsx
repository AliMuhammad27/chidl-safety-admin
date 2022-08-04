import React from "react";

const RecoverPassword3 = () => {
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
              <form action="./login.php">
                <div className="text-center mb-5">
                  <img
                    src="../../images/logo.png"
                    alt="signIn"
                    className="logo img-fluid"
                  />
                  <h4 className="auth-lg my-md-3 my-2">fORGOT pASSWORD</h4>
                  <p>Kindly enter the new password.</p>
                </div>
                <div className="inp-wrap mb-4">
                  <label
                    htmlFor="pass"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    New Password <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative passwordWrapper">
                    <input
                      id="pass"
                      type="password"
                      placeholder="Enter New Password"
                      className="auth-input passInput"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      type="button"
                    >
                      <i className="fas fa-eye-slash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="inp-wrap mb-4">
                  <label
                    htmlFor="cPass"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative passwordWrapper">
                    <input
                      id="cPass"
                      type="password"
                      placeholder="Confirm Password"
                      className="auth-input passInput"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      type="button"
                    >
                      <i className="fas fa-eye-slash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="text-center my-3 mb-2 mt-5">
                  <button className="prim-btn w-100">Updated</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoverPassword3;
