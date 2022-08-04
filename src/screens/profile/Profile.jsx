import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "util/api";
const Profile = () => {
  const [existingpassword, setexistingpassword] = useState("");
  const adminInfo = useSelector((state) => state.auth?.admin);
  console.log("AdmingInfo", adminInfo);
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            {/* User Details Starts */}
            <h1 className="page-title fw-800 primFont mb-md-4 mb-2">Profile</h1>
            <div className="box py-5">
              <div className="row mt-5">
                <div className="col-12">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="avatar-wrap me-4">
                      <img
                        src={`${imageUrl}${adminInfo?.userImage}`}
                        alt="avatar"
                        className="userAvatar img-fluid"
                      />
                    </div>
                    <div className="mainDetail">
                      <label htmlFor>
                        {adminInfo?.firstName} {adminInfo?.lastName}:
                      </label>
                      <p className="c-gray">
                        <i className="fas  fa-envelope mr-1 primColor pe-2" />
                        {adminInfo?.email}
                      </p>
                      <p className="c-gray">
                        <i className="fas fa-lock mr-1 primColor pe-2" />
                        ************
                      </p>
                    </div>
                  </div>
                  <div className="offset-1 mt-4">
                    <Link
                      to="/edit-profile"
                      className="prim-btn cmsbtnPrim my-1 me-3"
                    >
                      Edit Profile
                    </Link>
                    <a
                      href="./changePassword.php"
                      className="prim-btn cmsbtnSec my-1"
                      data-bs-toggle="modal"
                      data-bs-target="#change_password"
                      type="button"
                    >
                      Change Password
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* User Details Ends */}
          </section>
        </div>
      </div>
      {/* Change Password confirmation Modal Start */}
      <div
        className="modal fade"
        id="change_password"
        tabIndex={-1}
        aria-labelledby="change_passwordLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body pb-5">
              <form action="#">
                <div className="main-modal-msg">
                  <h4 className="section-heading fw-800 my-3">Edit Password</h4>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-4">
                  <label
                    htmlFor="pass"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Existing Password <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative passwordWrapper">
                    <input
                      id="pass"
                      type="password"
                      placeholder="Enter Current Password"
                      className="auth-input passInput mx-0"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      type="button"
                    >
                      <i className="fas fa-eye-slash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-4">
                  <label
                    htmlFor="n_pass"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    New Password <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative passwordWrapper">
                    <input
                      id="n_pass"
                      type="password"
                      placeholder="Enter New Password"
                      className="auth-input passInput mx-0"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      type="button"
                    >
                      <i className="fas fa-eye-slash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-4">
                  <label
                    htmlFor="c_pass"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative passwordWrapper">
                    <input
                      id="c_pass"
                      type="password"
                      placeholder="Confirm Password"
                      className="auth-input passInput mx-0"
                    />
                    <button
                      className="not_btn passDisplay authIcon2 p-0"
                      type="button"
                    >
                      <i className="fas fa-eye-slash" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
