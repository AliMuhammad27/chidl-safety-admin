import React from "react";
import useWindowTitle from "screens/hooks/UseWindowTitle";
const Dashboard = () => {
  useWindowTitle("Dashboard");
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-md-flex align-items-center justify-content-between my-2 mb-4">
              <h1 className="page-title fw-800 primFont border-line">
                Dashboard
              </h1>
              <div className="dashSearchWrap mb-2">
                <form action="#">
                  <input
                    type="search"
                    id="search-inp"
                    className="dashInput search-input w-100"
                    placeholder="Search"
                  />
                  <button type="button" className="search-icon">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-xxl-4 col-xl-6">
                <div className="box d-flex align-items-center justify-content-between cmsAnalytics my-2">
                  <div className="d-flex align-items-center">
                    <span className="analyticsIcon me-3">
                      <i className="fas fa-user-friends" />
                    </span>
                    <h5 className="cms-subcard-title primFont fw-800 c-gray text-uppercase mb-0">
                      Total Users
                    </h5>
                  </div>
                  <h5 className="section-site-heading primFont fw-800">100</h5>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6">
                <div className="box d-flex align-items-center justify-content-between cmsAnalytics my-2">
                  <div className="d-flex align-items-center">
                    <span className="analyticsIcon me-3">
                      <i className="fas fa-box-open" />
                    </span>
                    <h5 className="cms-subcard-title primFont fw-800 c-gray text-uppercase mb-0">
                      Total Users
                    </h5>
                  </div>
                  <h5 className="section-site-heading primFont fw-800">100</h5>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6">
                <div className="box d-flex align-items-center justify-content-between cmsAnalytics my-2">
                  <div className="d-flex align-items-center">
                    <span className="analyticsIcon me-3">
                      <i className="fas fa-signal" />
                    </span>
                    <h5 className="cms-subcard-title primFont fw-800 c-gray text-uppercase mb-0">
                      Total Users
                    </h5>
                  </div>
                  <h5 className="section-site-heading primFont fw-800">100</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-5 col-xl-12">
                <div className="box primChartBox mb-5">
                  <div className="text-center">
                    <h5 className="cms-subcard-title primFont fw-800 mb-5">
                      Top Categories
                    </h5>
                  </div>
                  <div className="d-md-flex align-items-center justify-content-center">
                    <div className="individualChart me-md-4 mb-5">
                      <h6 className="mb-3">Category A</h6>
                      <img
                        src="images/chart1.png"
                        alt="chart1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="individualChart me-md-4 mb-5">
                      <h6 className="mb-3">Category B</h6>
                      <img
                        src="images/chart2.png"
                        alt="chart1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="individualChart mb-5">
                      <h6 className="mb-3">Category C</h6>
                      <img
                        src="images/chart3.png"
                        alt="chart1"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-lg-6">
                <div className="box primChartBox  mb-5">
                  <div className="text-center">
                    <h5 className="cms-subcard-title primFont fw-800 mb-5">
                      Sales
                    </h5>
                  </div>
                  <select className="primSelect w-100">
                    <option value="7 Days">7 Days</option>
                    <option value="2 Days">2 Days</option>
                    <option value="3 Days">3 Days</option>
                  </select>
                  <div className="text-center">
                    <h5 className="xxl-heading primFont fw-800 my-3">09</h5>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-6">
                <div className="primChartBox  mb-5">
                  <div className="text-center">
                    <h5 className="cms-subcard-title primFont fw-800 mb-5">
                      Average Sales
                    </h5>
                  </div>
                  <div className="customTabs">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-monthly-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-monthly"
                          type="button"
                          role="tab"
                          aria-controls="pills-monthly"
                          aria-selected="true"
                        >
                          Monthly
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-daily-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-daily"
                          type="button"
                          role="tab"
                          aria-controls="pills-daily"
                          aria-selected="false"
                        >
                          Daily
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-monthly"
                        role="tabpanel"
                        aria-labelledby="pills-monthly-tab"
                      >
                        <div className="individualChart my-4 mt-5">
                          <img
                            src="images/chart4.png"
                            alt="chart1"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-daily"
                        role="tabpanel"
                        aria-labelledby="pills-daily-tab"
                      >
                        <div className="individualChart my-4 mt-5">
                          <img
                            src="../../images/chart1.png"
                            alt="chart1"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Graphs Start */}
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center mt-4">
                  <div className="col-xxl-5 colxl-4">
                    <h3 className="section-site-heading mb-1 primFont fw-800">
                      Total User
                    </h3>
                  </div>
                  <div className="col-xxl-7 colxl-8">
                    <div className="d-md-flex my-4 justify-content-lg-end">
                      <div className="dashSearchWrap mb-2 me-md-3">
                        <form action="#">
                          <input
                            type="search"
                            id="search-inp"
                            className="dashInput search-input w-100"
                            placeholder="Search"
                          />
                          <button type="button" className="search-icon">
                            <i className="fas fa-search" />
                          </button>
                        </form>
                      </div>
                      <select className="d-inline-block dashInput sm-dropdown mb-2">
                        <option value="Year">Year</option>
                        <option value={2022}>2022</option>
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="graphs my-4 customShadow bgWhite">
                  <div className="graphs-wrapper mb-4">
                    <div className="side-text">
                      <h3 className="site-heading prim-text fw-800 primFont">
                        Users
                      </h3>
                    </div>
                    <img src="images/map.png" className="img-fluid" alt="map" />
                  </div>
                  <div className="text-center pb-1">
                    <h3 className="prim-text fw-800 primFont mb-1">Months</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Graphs End */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
