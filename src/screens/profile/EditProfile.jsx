import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageSelector from "components/ImageSelector";
import { updateProfile } from "redux/action/profile";
import { Link } from "react-router-dom";
import Toasty from "util/toast";
const EditProfile = ({ history }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [Firstname, setfirstname] = useState("");
  const [Lastname, setlastname] = useState("");
  const [is_edit, setisedit] = useState(true);
  const adminInfo = useSelector((state) => state?.auth?.admin);
  let formData = new FormData();
  formData.append("firstName", Firstname);
  formData.append("lastName", Lastname);
  formData.append("reciepts", image);
  console.log("AdminInfo", adminInfo);
  useEffect(() => {
    if (adminInfo) {
      setfirstname(adminInfo?.firstName);
      setlastname(adminInfo?.lastName);
      setImage(adminInfo?.userImage);
    }
  }, [adminInfo]);
  console.log("AdminImage", image);
  console.log("AdminName", Firstname);
  console.log("AdminLastName", Lastname);
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link to="/profile">
                <i className="fas fa-arrow-left me-3 go-back-icon" />
              </Link>
              <h1 className="page-title fw-800 primFont mb-0">Edit Profile</h1>
            </div>
            {/* User Details Starts */}
            <div className="box py-5">
              <form action="#">
                <div className="row">
                  <div className="col-12 text-end">
                    <p className="c-gray">
                      <i className="fas  fa-envelope mr-1 primColor pe-2" />
                      {adminInfo?.email}
                    </p>
                  </div>
                  <ImageSelector
                    image={image}
                    setImage={setImage}
                    is_edit={is_edit}
                  />
                  <div className="col-xl-5 col-lg-6 mt-lg-0 mt-5">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="f_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="f_name"
                        type="text"
                        placeholder="First Name"
                        defaultValue="Mark"
                        className="auth-input passInput"
                        value={Firstname}
                        onChange={(e) => {
                          setfirstname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="l_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="l_name"
                        type="text"
                        placeholder="Last Name"
                        defaultValue="ABC"
                        className="auth-input passInput"
                        value={Lastname}
                        onChange={(e) => {
                          setlastname(e.target.value);
                        }}
                      />
                    </div>
                    <Link
                      className="prim-btn cmsbtnPrim mt-5 ms-xl-3"
                      to="#"
                      onClick={(e) => {
                        Firstname.length > 0 && Lastname.length > 0 && image
                          ? dispatch(updateProfile(formData))
                          : Toasty(
                              "Error",
                              "please fill all the required fields"
                            );
                      }}
                    >
                      Update
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            {/* User Details Ends */}
          </section>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
