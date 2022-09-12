import React from "react";
import { Link } from "react-router-dom";
const CmsDetails = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link to="/cms-logs">
                <i className="fas fa-arrow-left me-3 go-back-icon" />
              </Link>

              <h1 className="page-title fw-800 primFont mb-0">
                Service Details
              </h1>
            </div>
            <div className="box">
              <h4 className="heading-sm fw-800 primFont mb-3">
                Order ID : <span>WS_002</span>{" "}
              </h4>
              <div className="row">
                <div className="col-12">
                  <div className="serviceimgWrap mb-3">
                    <img
                      src="
                      images/services.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Article XYZ
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
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Important Discrlaimer
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
                  <a
                    href="./editCmsDetails.php"
                    className="prim-btn cmsbtnPrim mb-2"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CmsDetails;
