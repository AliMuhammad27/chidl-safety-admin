import React from "react";
import { Link } from "react-router-dom";

const EditService = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link to="/services">
                <i className="fas fa-arrow-left me-3 go-back-icon" />
              </Link>
              <h1 className="page-title fw-800 primFont mb-0">Edit Service</h1>
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
                        <p className="cWhite">
                          Upload Service Image
                          <br /> OR <br />
                          Drag an Image to Upload
                        </p>
                      </div>
                      <img
                        src="../../images/services.png"
                        alt="image"
                        className="img-fluid"
                        onclick="document.getElementById('upload-store-img').click()"
                      />
                      <input type="file" className="d-none" id="uploadImg" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="ser_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Service Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="ser_name"
                        type="text"
                        placeholder="Service Name"
                        defaultValue="ADSFD"
                        className="auth-input passInput"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="num"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Amount <span className="text-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <i className="fas fa-dollar-sign inputIcon" />
                        <input
                          id="num"
                          type="number"
                          placeholder="Enter Amount"
                          defaultValue={100}
                          className="auth-input passInput"
                        />
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="availibility"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Availibility<span className="text-danger">*</span>
                      </label>
                      <div className="d-lg-flex">
                        <input className="inputDate my-3" type="date" />
                        <input className="inputDate my-3" type="date" />
                        <input className="inputDate my-3" type="date" />
                      </div>
                      <div className="text-end">
                        <button className="notBtn primColor">
                          <u>Add More Field</u>
                        </button>
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="availibility"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Availibility<span className="text-danger">*</span>
                      </label>
                      <div className="d-lg-flex">
                        <input className="inputDate my-3" type="date" />
                        <input className="inputDate my-3" type="date" />
                        <input className="inputDate my-3" type="date" />
                      </div>
                      <div className="text-end">
                        <button className="notBtn text-danger">
                          <u>Delete</u>
                        </button>
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="text_area"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        About Service <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="text_area"
                        rows={5}
                        className="w-100"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. "
                        defaultValue={""}
                      />
                    </div>
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

export default EditService;
