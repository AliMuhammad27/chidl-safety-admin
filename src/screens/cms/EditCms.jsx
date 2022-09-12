import React from "react";
import { Link } from "react-router-dom";

const EditCms = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <form action="#">
              <div className="d-flex align-items-center my-3">
                <Link to="/cms-logs">
                  <i className="fas fa-arrow-left me-3 go-back-icon" />
                </Link>
                <h1 className="page-title fw-800 primFont mb-0">
                  Edit Page Details
                </h1>
              </div>
              <div className="box my-4">
                <div className="row">
                  <div className="col-xl-5 col-lg-8">
                    <h4 className="heading-sm fw-800 primFont">Edit Content</h4>
                    <div className="inp-wrap sec-inp-wrap my-3">
                      <label
                        htmlFor="ser_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Page Name<span className="text-danger">*</span>
                      </label>
                      <input
                        id="ser_name"
                        type="text"
                        placeholder="Home"
                        defaultValue="Home"
                        className="auth-input passInput"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* section 01 */}
              <div className="box my-5">
                <div className="row">
                  <div className="col-12">
                    <h4 className="heading-sm fw-800 primFont">Section</h4>
                    <div
                      className="upload_div mb-5"
                      onclick="document.getElementById('uploadImg1').click()"
                    >
                      <div className="upload_div_content">
                        <i className="fas fa-upload primColor" />
                        <p className="mt-2">Upload Service Image (1/5)</p>
                      </div>
                      <img
                        src="images/storeImg.png"
                        alt="image"
                        id="uploaded_img1"
                        className="img-fluid"
                        onclick="document.getElementById('upload-store-img').click()"
                      />
                      <input
                        type="file"
                        className="d-none"
                        id="uploadImg1"
                        onchange="readURL(this);"
                      />
                      <div className="text-end mt-2">
                        <button className="notBtn text-danger">
                          <u>Delete</u>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="ses_title"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Section Title <span className="text-danger">*</span>
                      </label>
                      <input
                        id="ses_title"
                        type="text"
                        placeholder="Section Title"
                        defaultValue="ABC"
                        className="auth-input passInput"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="embd_link"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Video Embbeded Link{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        id="embd_link"
                        type="text"
                        placeholder="Section Title"
                        defaultValue="ABC"
                        className="auth-input passInput"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="text_area"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="text_area"
                        rows={5}
                        className="w-100"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* section 02 */}
              <div className="box my-5">
                <div className="row">
                  <div className="col-12">
                    <h4 className="heading-sm fw-800 primFont">Section</h4>
                    <div
                      className="upload_div mb-5"
                      onclick="document.getElementById('uploadImg2').click()"
                    >
                      <div className="upload_div_content">
                        <i className="fas fa-upload primColor" />
                        <p className="mt-2">Upload Service Image (1/5)</p>
                      </div>
                      <img
                        src="../../images/storeImg.png"
                        alt="image"
                        id="uploaded_img2"
                        className="img-fluid"
                        onclick="document.getElementById('upload-store-img').click()"
                      />
                      <input
                        type="file"
                        className="d-none"
                        id="uploadImg2"
                        onchange="readURL2(this);"
                      />
                      <div className="text-end mt-2">
                        <button className="notBtn text-danger">
                          <u>Delete</u>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="ses_title"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Section Title <span className="text-danger">*</span>
                      </label>
                      <input
                        id="ses_title"
                        type="text"
                        placeholder="Section Title"
                        defaultValue="ABC"
                        className="auth-input passInput"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="embd_link"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Video Embbeded Link{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        id="embd_link"
                        type="text"
                        placeholder="Section Title"
                        defaultValue="ABC"
                        className="auth-input passInput"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="text_area"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Description<span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="text_area"
                        rows={5}
                        className="w-100"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="prim-btn cmsbtnPrim">Update</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EditCms;
