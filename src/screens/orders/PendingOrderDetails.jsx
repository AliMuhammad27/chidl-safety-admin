import React from "react";

const PendingOrderDetails = () => {
  return (
    <div>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="d-flex align-items-center my-3">
                <i className="fas fa-arrow-left me-3 go-back-icon" />
                <h1 className="page-title fw-800 primFont mb-0">
                  Order Details
                </h1>
              </div>
              <div className="box">
                <div className="pl-4 pr-4 pt-4 pb-2  ">
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <h1 className="heading-sm fw-800 primFont mb-4">
                      {" "}
                      Order ID : <span> WS_002 </span>{" "}
                    </h1>
                    <h1 className="cms-subcard-title fw-800 primFont mb-4">
                      {" "}
                      Status : <span className="text-danger">
                        {" "}
                        Pending{" "}
                      </span>{" "}
                    </h1>
                  </div>
                  {/*--------//  Order & Account Informations //---------*/}
                  <div className="row my-3">
                    <div className="col-xl-4 col-md-6">
                      <div className="border_right mb-4">
                        <h1 className="heading-sm fw-800 primFont mb-4 text-capitalize">
                          {" "}
                          Contact Information{" "}
                        </h1>
                        <p className="my-2">Sarah Bling</p>
                        <p className="my-2">sarah@email.com</p>
                        <p className="my-2">93427436764</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="border_right mb-4">
                        <h1 className="heading-sm fw-800 primFont mb-4 text-capitalize">
                          {" "}
                          Billing Address{" "}
                        </h1>
                        <p className="my-2">ADSFDFDG</p>
                        <p className="my-2">City</p>
                        <p className="my-2">0000</p>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="mb-4">
                        <h1 className="heading-sm fw-800 primFont mb-4 text-capitalize">
                          {" "}
                          Shipping Address{" "}
                        </h1>
                        <p className="my-2">ADSFDFDG</p>
                        <p className="my-2">City</p>
                        <p className="my-2">0000</p>
                      </div>
                    </div>
                  </div>
                  {/* order details start */}
                  <div className="box mx-md-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="d-flex align-items-center mb-3 flex-wrap">
                          <div className="position-relative product_img me-4">
                            <span className="prod_quantity">1</span>
                            <img
                              src="../../images/services.png"
                              className="table-product-img"
                              alt="image"
                            />
                          </div>
                          <div>
                            <p className="my-2">Product Name</p>
                            <h6 className="heading-sm fw-800 primFonts">
                              $ 100
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <h1 className="heading-sm fw-800 primFont mb-4 text-capitalize">
                          {" "}
                          Cart Summary{" "}
                        </h1>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h5>Sub Total</h5>
                          <h5>$ 100</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h5>Tax 0%</h5>
                          <h5>$ 0.00</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h5>Shipping</h5>
                          <h5>$ 0.00</h5>
                        </div>
                        <hr />
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h5>Grand Total</h5>
                          <h5>$ 0.00</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* order details End */}
                  <div className="my-5 custom_btns">
                    <button className="bg-success cmsbtnPrim mb-4 me-3 prim-btn">
                      Accept
                    </button>
                    <button
                      className="bg-danger cmsbtnSec mb-4 prim-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#rejectionReason"
                      type="button"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*?php include('../layout/footer.php') ?*/}
      {/*Rejection Reason Modal  Start */}
      <div
        className="modal fade"
        id="rejectionReason"
        tabIndex={-1}
        aria-labelledby="rejectionReasonLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
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
                <div className="main-modal-msg my-2">
                  <h4 className="section-heading fw-800">Rejection Reason</h4>
                  <p className="prim-text primFont fw-400 my-4">
                    Please Enter A Rejection Reason
                  </p>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <textarea
                    name
                    id="text_area"
                    rows={5}
                    className="w-100 m-0"
                    placeholder="Enter Rejection Reason Here"
                    defaultValue={""}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    className="prim-btn cmsbtnPrim my-1"
                    type="button"
                    data-bs-dismiss="modal"
                    onclick="window.location.assign('./rejectedOrderDetails.php')"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="prim-btn cmsbtnSec my-1"
                    data-bs-dismiss="modal"
                  >
                    Cancel
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

export default PendingOrderDetails;
