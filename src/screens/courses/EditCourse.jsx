import React from "react";
import { Link } from "react-router-dom";
const EditCourse = () => {
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
              <h1 className="page-title fw-800 primFont mb-0">Edit Course</h1>
            </div>
            <div className="box">
              <form action="#">
                <div className="row">
                  <div className="col-12">
                    <div
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
                    </div>
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
                        defaultValue="Course A"
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
                        defaultValue={123}
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
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio."
                        defaultValue={""}
                      />
                    </div>
                    {/* primary Box */}
                    <div className="primBox d-flex flex-wrap align-items-end mb-5">
                      <div className="content-wrap mb-2 text-center me-md-4">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <button className="text-danger mx-auto fw-400 notBtn d-block my-2">
                          <u>Delete</u>
                        </button>
                      </div>
                      <div className="content-wrap mb-2 text-center me-md-4">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <button className="text-danger mx-auto fw-400 notBtn d-block my-2">
                          <u>Delete</u>
                        </button>
                      </div>
                      <div className="content-wrap mb-2 text-center me-md-4">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <button className="text-danger mx-auto fw-400 notBtn d-block my-2">
                          <u>Delete</u>
                        </button>
                      </div>
                      <div className="text-end">
                        <button
                          className="primColor fw-400 notBtn d-block"
                          onclick="document.getElementById('more_files').click()"
                        >
                          <u>Add Files</u>
                        </button>
                        <input type="file" className="d-none" id="more_files" />
                      </div>
                    </div>
                    <button className="primColor fw-400 notBtn d-block ms-auto">
                      <u>Add More Field</u>
                    </button>
                    {/* // */}
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
                          defaultValue="Enter Component Name"
                          className="auth-input passInput w-25 w_100 mb-4"
                        />
                        <input
                          id="desc"
                          type="text"
                          placeholder="Enter Decription"
                          defaultValue="Enter Component Description"
                          className="auth-input passInput w-75 w_100 mb-4"
                        />
                      </div>
                    </div>
                    {/* primary Box */}
                    <div className="custom_border primBox d-flex flex-wrap align-items-end mb-5">
                      <div className="content-wrap mb-2 text-center me-md-4">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <button className="text-danger mx-auto fw-400 notBtn d-block my-2">
                          <u>Delete</u>
                        </button>
                      </div>
                      <div className="content-wrap mb-2 text-center me-md-4">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <button className="text-danger mx-auto fw-400 notBtn d-block my-2">
                          <u>Delete</u>
                        </button>
                      </div>
                      <div className="content-wrap mb-2 text-center me-md-4">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <button className="text-danger mx-auto fw-400 notBtn d-block my-2">
                          <u>Delete</u>
                        </button>
                      </div>
                      <div className="text-end">
                        <button
                          className="primColor fw-400 notBtn d-block"
                          onclick="document.getElementById('more_files').click()"
                        >
                          <u>Add Files</u>
                        </button>
                        <input type="file" className="d-none" id="more_files" />
                      </div>
                    </div>
                    <button className="text-danger fw-400 notBtn d-block ms-auto">
                      <u>Delete This Field</u>
                    </button>
                    {/* // */}
                    <button className="prim-btn cmsbtnPrim">Update</button>
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

export default EditCourse;
