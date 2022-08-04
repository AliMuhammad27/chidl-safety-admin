import React from "react";

const DeliveredOrderDetails = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <i className="fas fa-arrow-left me-3 go-back-icon" />
              <h1 className="page-title fw-800 primFont mb-0">Order Details</h1>
            </div>
            <div className="box">
              <div className="pl-4 pr-4 pt-4 pb-2">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <h1 className="heading-sm fw-800 primFont mb-4">
                    {" "}
                    Order ID : <span> WS_002 </span>{" "}
                  </h1>
                  <h1 className="cms-subcard-title fw-800 primFont mb-4">
                    {" "}
                    Status : <span className="primColor">
                      {" "}
                      Delievered{" "}
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
                          <h6 className="heading-sm fw-800 primFonts">$ 100</h6>
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeliveredOrderDetails;
