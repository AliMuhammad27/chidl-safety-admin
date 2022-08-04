import React from "react";

const ServiceDetails = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <i className="fas fa-arrow-left me-3 go-back-icon" />
              <h1 className="page-title fw-800 primFont mb-0">
                Service Details
              </h1>
            </div>
            <div className="box">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-lg-flex mb-3">
                    <div className="serviceimgWrap mb-3">
                      <img
                        src="../../images/services.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="mb-2">
                      <a href="#_" className="prim-btn cmsbtnSec mx-3">
                        <i className="fas fa-pen pe-2" />
                        Edit
                      </a>
                    </div>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Service Name
                    </label>
                    <p>Service A</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Amount
                    </label>
                    <p>$ 1234</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      About Service
                    </label>
                    <p>
                      ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                      euismod bibendum laoreet. Proin gravida dolor sit amet
                      lacus accumsan et viverra justo commodo. Proin sodales
                      pulvinar tempor. Cum sociis natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Nam
                      fermentum, nulla luctus pharetra vulputate, felis tellus
                      mollis orci, sed rhoncus sapien nunc eget odio. Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                      euismod bibendum laoreet. Proin gravida dolor sit amet
                      lacus
                    </p>
                  </div>
                </div>
                <div className="col-xxl-4">
                  <div className="box">
                    <h4 className="heading-sm fw-800 primFont text-center mb-3">
                      Availibility
                    </h4>
                    <div className="d-xxl-flex">
                      <label
                        htmlFor
                        className="flex-shrink-0 flex-grow-1 primColor"
                      >
                        Monday
                      </label>
                      <p>
                        {" "}
                        <span>02 : 00 PM</span> <span className="mx-4">-</span>{" "}
                        <span>03 : 00 PM</span>{" "}
                      </p>
                    </div>
                    <div className="d-xxl-flex">
                      <label
                        htmlFor
                        className="flex-shrink-0 flex-grow-1 primColor"
                      >
                        Tuesday
                      </label>
                      <p>
                        {" "}
                        <span>02 : 00 PM</span> <span className="mx-4">-</span>{" "}
                        <span>03 : 00 PM</span>{" "}
                      </p>
                    </div>
                    <div className="d-xxl-flex">
                      <label
                        htmlFor
                        className="flex-shrink-0 flex-grow-1 primColor"
                      >
                        Wednesday
                      </label>
                      <p>
                        {" "}
                        <span>02 : 00 PM</span> <span className="mx-4">-</span>{" "}
                        <span>03 : 00 PM</span>{" "}
                      </p>
                    </div>
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

export default ServiceDetails;
