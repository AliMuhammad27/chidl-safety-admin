import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetails } from "redux/action/product";
import ImageSlider from "components/ImageSlider";
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const productInfo = useSelector((state) => state?.product?.product?.product);
  console.log("productInfo", productInfo);
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [match.params.id]);
  useEffect(() => {
    if (productInfo) {
      setImages(productInfo?.productImage);
    }
  }, [productInfo]);
  console.log("Images", images);
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
              <h1 className="page-title fw-800 primFont mb-0">
                Product Details
              </h1>
            </div>
            <div className="box my-5">
              <div className="row">
                <div className="col-xxl-6">
                  {
                    <div className="product_slider  my-3">
                      <div className="slider slider-for">
                        <ImageSlider images={images} />
                      </div>
                    </div>
                  }
                </div>
                <div className="col-xxl-6">
                  <div className="product-details-wrap my-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <h3 className="heading-sm primFont fw-600">
                        {productInfo?.productName}{" "}
                        <small className="prim-text">
                          ({productInfo?.instock} Product Left)
                        </small>{" "}
                      </h3>
                      <h1 className="cms-subcard-title fw-800 primFont mb-4">
                        {" "}
                        Status :{" "}
                        <span
                          className={productInfo?.status ? "cGreen" : "cRed"}
                        >
                          {" "}
                          {productInfo?.status ? (
                            <>Accepted</>
                          ) : (
                            <>Pending</>
                          )}{" "}
                        </span>{" "}
                      </h1>
                    </div>
                    <h2 className="heading-md fw-600 primColor primFont">
                      ${productInfo?.price}
                    </h2>
                    <div className="custom_selector">
                      <input
                        type="radio"
                        id="small"
                        name="custom_check"
                        className="small"
                      />
                      <label htmlFor="small" className="product-site-heading">
                        S
                      </label>
                      <input
                        type="radio"
                        id="medium"
                        name="custom_check"
                        className="medium"
                      />
                      <label htmlFor="medium" className="product-site-heading">
                        M
                      </label>
                      <input
                        type="radio"
                        id="large"
                        name="custom_check"
                        className="large"
                      />
                      <label htmlFor="large" className="product-site-heading">
                        L
                      </label>
                    </div>
                    <div className="small_tabs mt-4">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-Details-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-Details"
                            type="button"
                            role="tab"
                            aria-controls="pills-Details"
                            aria-selected="true"
                          >
                            Details
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-use-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-use"
                            type="button"
                            role="tab"
                            aria-controls="pills-use"
                            aria-selected="false"
                          >
                            How to use
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-Details"
                          role="tabpanel"
                          aria-labelledby="pills-Details-tab"
                        >
                          <p>{productInfo?.description}</p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-use"
                          role="tabpanel"
                          aria-labelledby="pills-use-tab"
                        >
                          <p>{productInfo?.usage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box my-5">
              <h4 className="heading-sm primFont fw-600 mb-3 text-capitalize">
                Reviews
              </h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="d-flex mb-1 py-1">
                    <div className="user_avatar">
                      <img
                        src="images/avatar3.png"
                        className="img-fluid user-avatar mr-2"
                        alt="user image"
                      />
                    </div>
                    <div>
                      <h5 className="user-name main-color">User Name</h5>
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <div className="mt-2 d-flex">
                        <p className="mr-2">
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Aenean euismod bibendum laoreet. Proin gravida dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex mb-1 py-1">
                    <div className="user_avatar">
                      <img
                        src="images/avatar3.png"
                        className="img-fluid user-avatar mr-2"
                        alt="user image"
                      />
                    </div>
                    <div>
                      <h5 className="user-name main-color">User Name</h5>
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <div className="mt-2 d-flex">
                        <p className="mr-2">
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Aenean euismod bibendum laoreet. Proin gravida dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex mb-1 py-1">
                    <div className="user_avatar">
                      <img
                        src="images/avatar3.png"
                        className="img-fluid user-avatar mr-2"
                        alt="user image"
                      />
                    </div>
                    <div>
                      <h5 className="user-name main-color">User Name</h5>
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <div className="mt-2 d-flex">
                        <p className="mr-2">
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Aenean euismod bibendum laoreet. Proin gravida dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="d-flex mb-1 py-1">
                    <div className="user_avatar">
                      <img
                        src="images/avatar3.png"
                        className="img-fluid user-avatar mr-2"
                        alt="user image"
                      />
                    </div>
                    <div>
                      <h5 className="user-name main-color">User Name</h5>
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <i className="fas fa-star stars" />
                      <div className="mt-2 d-flex">
                        <p className="mr-2">
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Aenean euismod bibendum laoreet. Proin gravida dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <button className="notBtn primColor">
                  <u>View More</u>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
