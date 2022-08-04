import React from "react";
import { Link } from "react-router-dom";

const EditProduct = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link
                className="fas fa-arrow-left me-3 go-back-icon"
                to="/products"
              />
              <h1 className="page-title fw-800 primFont mb-0">Edit Product</h1>
            </div>
            <div className="box custom_box">
              <form action="#">
                <div className="row">
                  <div className="col-xxl-5">
                    <div
                      className="upload_div mb-5"
                      onclick="document.getElementById('uploadImg').click()"
                    >
                      <div className="upload_div_content">
                        <i className="fas fa-upload cWhite" />
                        <p className="cWhite">Upload Main Product Image</p>
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
                  <div className="col-xxl-7">
                    <div className="row">
                      <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="mb-3">
                          <div
                            className="upload_div mx-md-3"
                            onclick="document.getElementById('uploadImg2').click()"
                          >
                            <div className="upload_div_content">
                              <i className="fas fa-upload primColor" />
                              <p className="primColor mt-2">
                                {" "}
                                <u>Upload Image</u>{" "}
                              </p>
                            </div>
                            <img
                              src="../../images/storeImg2.png"
                              alt="image"
                              className="img-fluid"
                              onclick="document.getElementById('upload-store-img').click()"
                            />
                            <input
                              type="file"
                              className="d-none"
                              id="uploadImg2"
                            />
                          </div>
                          <div className="text-end mt-2">
                            <button className="text-danger notBtn">
                              <u>Delete</u>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="mb-3">
                          <div
                            className="upload_div mx-md-3"
                            onclick="document.getElementById('uploadImg2').click()"
                          >
                            <div className="upload_div_content">
                              <i className="fas fa-upload primColor" />
                              <p className="primColor mt-2">
                                {" "}
                                <u>Upload Image</u>{" "}
                              </p>
                            </div>
                            <img
                              src="../../images/storeImg2.png"
                              alt="image"
                              className="img-fluid"
                              onclick="document.getElementById('upload-store-img').click()"
                            />
                            <input
                              type="file"
                              className="d-none"
                              id="uploadImg2"
                            />
                          </div>
                          <div className="text-end mt-2">
                            <button className="text-danger notBtn">
                              <u>Delete</u>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="mb-3">
                          <div
                            className="upload_div mx-md-3"
                            onclick="document.getElementById('uploadImg2').click()"
                          >
                            <div className="upload_div_content">
                              <i className="fas fa-upload primColor" />
                              <p className="primColor mt-2">
                                {" "}
                                <u>Upload Image</u>{" "}
                              </p>
                            </div>
                            <img
                              src="../../images/storeImg2.png"
                              alt="image"
                              className="img-fluid"
                              onclick="document.getElementById('upload-store-img').click()"
                            />
                            <input
                              type="file"
                              className="d-none"
                              id="uploadImg2"
                            />
                          </div>
                          <div className="text-end mt-2">
                            <button className="text-danger notBtn">
                              <u>Delete</u>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-xl-4 col-md-6">
                        <div className="mb-3">
                          <div
                            className="upload_div mx-md-3"
                            onclick="document.getElementById('uploadImg2').click()"
                          >
                            <div className="upload_div_content">
                              <i className="fas fa-upload primColor" />
                              <p className="primColor mt-2">
                                {" "}
                                <u>Upload Image</u>{" "}
                              </p>
                            </div>
                            <img
                              src="../../images/storeImg2.png"
                              alt="image"
                              className="img-fluid"
                              onclick="document.getElementById('upload-store-img').click()"
                            />
                            <input
                              type="file"
                              className="d-none"
                              id="uploadImg2"
                            />
                          </div>
                          <div className="text-end mt-2">
                            <button className="text-danger notBtn">
                              <u>Delete</u>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="prod_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Product Name<span className="text-danger">*</span>
                      </label>
                      <input
                        id="prod_name"
                        type="text"
                        placeholder="Enter Name of Product"
                        defaultValue="ADAFFDGFG"
                        className="auth-input mx-0"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="productDetails"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Product Details <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="productDetails"
                        rows={5}
                        className="w-100 mx-0"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor "
                        defaultValue={""}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="how_to_use"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        How to Use <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="how_to_use"
                        rows={5}
                        className="w-100 mx-0"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor "
                        defaultValue={""}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <div className="select_2 w-100">
                        <label
                          htmlFor="category_select"
                          className="d-block primLable my-2 px-md-3 px-1"
                        >
                          Category<span className="text-danger">*</span>
                        </label>
                        <select
                          name="states[]"
                          className="js-example-placeholder-multiple js-states form-control  mx-0 w-100"
                          id="category_select"
                          multiple="multiple"
                        >
                          <option value="Category A">Category A</option>
                          <option value="Category B">Category B</option>
                        </select>
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <div className="select_2 w-100">
                        <label
                          htmlFor="attribute_select"
                          className="d-block primLable my-2 px-md-3 px-1"
                        >
                          Attribute<span className="text-danger">*</span>
                        </label>
                        <select
                          name="states[]"
                          id="attribute_select"
                          className="js-example-placeholder-multiple2 js-states form-control  mx-0 w-100"
                          multiple="multiple"
                        >
                          <option value="Attribute A">Attribute A</option>
                          <option value="Category B">Attribute B </option>
                        </select>
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="inv_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Inventory<span className="text-danger">*</span>
                      </label>
                      <input
                        id="inv_name"
                        type="number"
                        placeholder={124}
                        defaultValue={124}
                        className="auth-input mx-0"
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

export default EditProduct;
