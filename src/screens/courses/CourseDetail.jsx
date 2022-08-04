import React from "react";
import { Link } from "react-router-dom";

const CourseDetail = () => {
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
              <h1 className="page-title fw-800 primFont mb-0">
                Course Details
              </h1>
            </div>
            <div className="box my-4">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-xxl-4 col-lg-6">
                      <div className="serviceimgWrap mb-3">
                        <img
                          src="../../images/services.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-8  col-lg-6 text-end">
                      <Link
                        to="/edit-course/:id"
                        className="prim-btn cmsbtnPrim mb-2"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-10">
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Course Name
                    </label>
                    <p>Course A</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      About Course
                    </label>
                    <p>$ 1234</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Amount
                    </label>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean euismod bibendum laoreet. Proin gravida dolor sit
                      amet lacus accumsan et viverra justo commodo. Proin
                      sodales pulvinar tempor. Cum sociis natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus. Nam
                      fermentum, nulla luctus pharetra vulputate, felis tellus
                      mollis orci, sed rhoncus sapien nunc eget odio.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box my-4">
              <h4 className="heading-sm fw-800 primFont mb-3">Content</h4>
              <div className="row">
                <div className="col-xl-10">
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Component A
                    </label>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum, nulla luctus pharetra vulputate, felis
                        tellus mollis orci, sed rhoncus sapien nunc eget odio.{" "}
                      </p>
                      <div className="content-wrap mb-2 d-flex flex-wrap align-items-end">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <a
                          href="../../images/file.png"
                          className="primColor fw-400"
                          download="file"
                        >
                          <u>Download</u>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Component B
                    </label>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum, nulla luctus pharetra vulputate, felis
                        tellus mollis orci, sed rhoncus sapien nunc eget odio.{" "}
                      </p>
                      <div className="content-wrap mb-2 d-flex flex-wrap align-items-end">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <a
                          href="../../images/file.png"
                          className="primColor fw-400"
                          download="file"
                        >
                          <u>Download</u>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Component C
                    </label>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin gravida dolor sit
                        amet lacus accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor. Cum sociis natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                        Nam fermentum, nulla luctus pharetra vulputate, felis
                        tellus mollis orci, sed rhoncus sapien nunc eget odio.{" "}
                      </p>
                      <div className="content-wrap mb-2 d-flex flex-wrap align-items-end">
                        <img
                          src="../../images/file.png"
                          className="me-3"
                          alt="file"
                        />
                        <a
                          href="../../images/file.png"
                          className="primColor fw-400"
                          download="file"
                        >
                          <u>Download</u>
                        </a>
                      </div>
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

export default CourseDetail;
