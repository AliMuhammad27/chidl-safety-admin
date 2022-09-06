import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { verifyAndReset } from "redux/action/auth";
import useWindowTitle from "screens/hooks/UseWindowTitle";
import Toasty from "util/toast";
const RecoverPassword3 = ({ history }) => {
  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);
  const email = useSelector((state) => state.auth?.email);
  const code = useSelector((state) => state.auth?.code);
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirmpassword] = useState("");
  useWindowTitle("Reset-Password");
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <section className="authPage">
      <div className="align-items-center d-flex sideLink  go-back-icon ">
        <i className="fas fa-arrow-left pe-2" />
        <Link to="/verification-code" className="d-inline-block">
          Go Back
        </Link>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="signupBox">
              <form action="./login.php">
                <div className="text-center mb-5">
                  <img
                    src="images/logo.png"
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
                      type={passwordShown ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                      placeholder="Enter New Password"
                      className="auth-input passInput"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      onClick={togglePassword}
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
                      type={passwordShown ? "text" : "password"}
                      value={confirm_password}
                      onChange={(e) => {
                        setconfirmpassword(e.target.value);
                      }}
                      placeholder="Confirm Password"
                      className="auth-input passInput"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      onClick={togglePassword}
                      type="button"
                    >
                      <i className="fas fa-eye-slash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="text-center my-3 mb-2 mt-5">
                  <button
                    className="prim-btn w-100"
                    onClick={(e) => {
                      password.length > 0 && confirm_password.length > 0
                        ? dispatch(
                            verifyAndReset(
                              code,
                              email,
                              password,
                              confirm_password,
                              history
                            )
                          )
                        : Toasty(
                            "Error",
                            "please fill all the required fields"
                          );
                      e.preventDefault();
                    }}
                  >
                    Updated
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

export default RecoverPassword3;
