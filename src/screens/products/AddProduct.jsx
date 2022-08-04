import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toasty from "util/toast";
import { useSelector, useDispatch } from "react-redux";
import ImageSelectDropzone from "components/ImageSelectDropzone";
import { getCategoires } from "redux/action/category";
import { getAttributes } from "redux/action/attribute";
import { addProduct } from "redux/action/product";
import { createBrowserHistory } from "history";
const AddProduct = ({ history }) => {
  const cats = useSelector((state) => state?.category?.allcategories?.category);
  const atts = useSelector(
    (state) => state?.attribute?.allattributes?.attribute
  );
  const dispatch = useDispatch();
  const [productName, setproductname] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchParam, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  const [category, setcategory] = useState("");
  const [attribute, setattribute] = useState("");
  const [price, setprice] = useState("");
  const [instock, setinstock] = useState("");
  const [edit, setIsEdit] = useState(false);
  const [description, setdescription] = useState("");
  const [usage, setusage] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [data, setData] = useState({
    project_images: [],
  });
  const { project_images } = data;
  const formData = new FormData();
  formData.append("productName", productName);
  formData.append("description", description);
  formData.append("usage", usage);
  formData.append("price", price);
  formData.append("instock", instock);
  formData.append("category", category);
  formData.append("attribute", attribute);
  console.log("project images", project_images);
  project_images.forEach((reciept) => formData.append("reciepts", reciept));
  useEffect(() => {
    dispatch(getCategoires());
    dispatch(getAttributes());
  }, []);
  console.log("Cats", atts);
  console.log("Category", category);
  console.log("FormData", formData);
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
              <h1 className="page-title fw-800 primFont mb-0">Add Product</h1>
            </div>
            <div className="box custom_box">
              <div className="row">
                <div className="col-xxl-5">
                  <div className="upload_div mb-5">
                    <ImageSelectDropzone
                      max={5}
                      setproductimage={setProductImage}
                      files={data?.project_images}
                      setFiles={(project_images) =>
                        setData({ ...data, project_images })
                      }
                      accept="image/*"
                    />
                  </div>
                </div>
                {/* <div className="col-xxl-7">
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
                  </div> */}
                <div className="Row">
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
                        value={productName}
                        onChange={(e) => {
                          setproductname(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter Name of Product"
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
                        value={description}
                        className="w-100 mx-0"
                        placeholder="Enter Details"
                        onChange={(e) => {
                          setdescription(e.target.value);
                        }}
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
                        value={usage}
                        className="w-100 mx-0"
                        placeholder="How to Use"
                        onChange={(e) => {
                          setusage(e.target.value);
                        }}
                        defaultValue={""}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      {/* <div className="select_2 w-100">
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
                        </div> */}
                      <div className="col-xxl-8 text-lg-end text-start">
                        <div className="align-items-center d-md-flex filter-wrap w-100 mb-3 justify-content-end">
                          <label>Category</label>
                          <select
                            id
                            className="dashInput sm-dropdown mb-3"
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                          >
                            {cats && cats.length > 0
                              ? cats?.map((item, index) => (
                                  <option value={item?._id} key={item?._id}>
                                    {item?.categoryName}
                                  </option>
                                ))
                              : ""}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* <div className="inp-wrap sec-inp-wrap mb-4">
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
                      </div> */}
                    <div className="col-xxl-8 text-lg-end text-start">
                      <div className="align-items-center d-md-flex filter-wrap w-100 mb-3 justify-content-end">
                        <label>Attribute</label>
                        <select
                          id
                          className="dashInput sm-dropdown mb-3"
                          value={attribute}
                          onChange={(e) => setattribute(e.target.value)}
                        >
                          {atts && atts.length > 0
                            ? atts?.map((item, index) => (
                                <option value={item?._id} key={item?._id}>
                                  {item?.attributeName}
                                </option>
                              ))
                            : ""}
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
                        value={instock}
                        className="auth-input mx-0"
                        onChange={(e) => {
                          setinstock(e.target.value);
                        }}
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-4">
                      <label
                        htmlFor="inv_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Price<span className="text-danger">*</span>
                      </label>
                      <input
                        id="inv_name"
                        type="number"
                        placeholder={124}
                        value={price}
                        className="auth-input mx-0"
                        onChange={(e) => {
                          setprice(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      className="prim-btn cmsbtnPrim"
                      onClick={(e) => {
                        dispatch(
                          addProduct(
                            formData,
                            searchParam,
                            status,
                            from,
                            to,
                            sort,
                            page,
                            perPage,
                            history
                          )
                        );
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
