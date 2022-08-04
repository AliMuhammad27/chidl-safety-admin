import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ImageSelector from "components/ImageSelector";
import ImageSelectDropzone from "components/ImageSelectDropzone";
import Toasty from "util/toast";
import { addCourse } from "redux/action/course";
const AddCourse = () => {
  const dispatch = useDispatch();
  const [courseName, setcoursename] = useState("");
  const [aboutCourse, setaboutcourse] = useState("");
  const [amount, setamount] = useState("");
  const [image, setimage] = useState("");
  const [is_edit, setisedit] = useState(true);
  const [contentName, setcontentName] = useState("");
  const [contentDescription, setcontentdescription] = useState("");
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link
                className="fas fa-arrow-left me-3 go-back-icon"
                to="/courses"
              />
              <h1 className="page-title fw-800 primFont mb-0">Add Course</h1>
            </div>
            <div className="box">
              <form action="#">
                <div className="row">
                  <div className="col-12">
                    <ImageSelector
                      image={image}
                      setImage={setimage}
                      is_edit={is_edit}
                    />
                    {/* <div
                      className="upload_div mb-5"
                      onclick="document.getElementById('uploadImg').click()"
                    >
                      <div className="upload_div_content">
                        <i className="fas fa-upload primColor" />
                        <p>
                          Upload Service Image
                          <br /> OR <br />
                          Drag an Image to Upload
                        </p>
                      </div>
                      <img
                        src="../../images/storeImg.png"
                        alt="image"
                        className="img-fluid"
                        onclick="document.getElementById('upload-store-img').click()"
                      />
                      <input type="file" className="d-none" id="uploadImg" />
                    </div> */}
                    <div className="inp-wrap sec-inp-wrap mb-3  w-50 w_100">
                      <label
                        htmlFor="course_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Course Name<span className="text-danger">*</span>
                      </label>
                      <input
                        id="course_name"
                        type="text"
                        placeholder="Course Name here"
                        className="auth-input passInput"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3  w-50 w_100">
                      <label
                        htmlFor="num"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        id="num"
                        type="number"
                        placeholder="Enter Amount"
                        className="auth-input passInput ps-4"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3  w-100">
                      <label
                        htmlFor="text_area"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        About Course <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="text_area"
                        rows={5}
                        className="w-100 mx-0"
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3  w-100">
                      <label
                        htmlFor="desc1"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Content<span className="text-danger">*</span>
                      </label>
                      <div className="d-xl-flex">
                        <input
                          id="desc1"
                          type="text"
                          placeholder="Enter Component Name"
                          className="auth-input passInput w-25 w_100 mb-4"
                        />
                        <input
                          id="desc"
                          type="text"
                          placeholder="Enter Decription"
                          className="auth-input passInput w-75 w_100 mb-4"
                        />
                      </div>
                    </div>
                    {/* <div
                      className="upload_div mb-5"
                      onclick="document.getElementById('uploadImg').click()"
                    >
                      <div className="upload_div_content">
                        <i className="fas fa-upload primColor" />
                        <p className="primColor mt-2">
                          {" "}
                          <u>Add Files</u>{" "}
                        </p>
                      </div>
                      <img
                        src="../../images/storeImg2.png"
                        alt="image"
                        className="img-fluid"
                        onclick="document.getElementById('upload-store-img').click()"
                      />
                      <input type="file" className="d-none" id="uploadImg" />
                      <div className="text-end mt-2">
                        <button className="primColor notBtn">
                          <u> Add More Field </u>
                        </button>
                      </div>
                    </div> */}
                    <div className="upload_div mb-5">
                      <ImageSelectDropzone />
                    </div>
                    <button className="prim-btn cmsbtnPrim">Add</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
