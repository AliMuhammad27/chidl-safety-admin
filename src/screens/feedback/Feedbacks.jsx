import React from "react";

const Feedbacks = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            {/* Users Starts */}
            <div className="box py-5">
              <h1 className="page-title fw-800 primFont mb-md-4 mb-2">
                Feedbacks
              </h1>
              <div className="row mt-5">
                {/* Search Filter Starts */}
                <div className="row align-items-center">
                  <div className="col-xxl-2 col-md-4">
                    <div className="align-items-center d-md-flex filter-wrap w-100 mb-3">
                      <label className="mr-xl-2 mr-2">From:</label>
                      <input
                        type="date"
                        placeholder="From"
                        className="primDateTime"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-2 col-md-4">
                    <div className="align-items-center d-md-flex filter-wrap w-100 mb-3">
                      <label className="mr-xl-2 mr-2">To:</label>
                      <input
                        type="date"
                        placeholder="From"
                        className="primDateTime"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-8 text-lg-end text-start">
                    <div className="align-items-center d-md-flex filter-wrap w-100 mb-3 justify-content-end">
                      <label className="mr-xl-2 mr-2 mb-3">
                        Service Status
                      </label>
                      <select className="dashInput sm-dropdown mb-3">
                        <option value="Status">Status</option>
                        <option value="Active">Active</option>
                        <option value="InActive">InActive</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Search Filter Ends */}
                <div className="dataTables_wrapper">
                  <div className="row row-table">
                    <div className="dataTables_wrapper container-fluid dt-bootstrap4">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="main-tabble table-responsive">
                            <table className="table table-borderless dataTable">
                              <thead>
                                <tr>
                                  <th className="sorting">S.No.</th>
                                  <th className="sorting">Name</th>
                                  <th className="sorting">DATE </th>
                                  <th className="sorting">ACTION</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="tableRow">
                                  <td>A122</td>
                                  <td>ADCF</td>
                                  <td>03/02/2020</td>
                                  <td>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn transparent-btn ellipsis-btn"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {" "}
                                        <i className="fa fa-ellipsis-v" />
                                      </button>
                                      <div className="dropdown-menu text-left custom-dropdown">
                                        <a
                                          className="dropdown-item"
                                          href="#_"
                                          data-bs-toggle="modal"
                                          type="button"
                                          data-bs-target="#feedbackDetails"
                                        >
                                          <i className="fas fa-eye" />
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="tableRow">
                                  <td>A122</td>
                                  <td>ADCF</td>
                                  <td>03/02/2020</td>
                                  <td>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn transparent-btn ellipsis-btn"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {" "}
                                        <i className="fa fa-ellipsis-v" />
                                      </button>
                                      <div className="dropdown-menu text-left custom-dropdown">
                                        <a
                                          className="dropdown-item"
                                          href="#_"
                                          data-bs-toggle="modal"
                                          type="button"
                                          data-bs-target="#feedbackDetails"
                                        >
                                          <i className="fas fa-eye" />
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="tableRow">
                                  <td>A122</td>
                                  <td>ADCF</td>
                                  <td>03/02/2020</td>
                                  <td>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn transparent-btn ellipsis-btn"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {" "}
                                        <i className="fa fa-ellipsis-v" />
                                      </button>
                                      <div className="dropdown-menu text-left custom-dropdown">
                                        <a
                                          className="dropdown-item"
                                          href="#_"
                                          data-bs-toggle="modal"
                                          type="button"
                                          data-bs-target="#feedbackDetails"
                                        >
                                          <i className="fas fa-eye" />
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="tableRow">
                                  <td>A122</td>
                                  <td>ADCF</td>
                                  <td>03/02/2020</td>
                                  <td>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn transparent-btn ellipsis-btn"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {" "}
                                        <i className="fa fa-ellipsis-v" />
                                      </button>
                                      <div className="dropdown-menu text-left custom-dropdown">
                                        <a
                                          className="dropdown-item"
                                          href="#_"
                                          data-bs-toggle="modal"
                                          type="button"
                                          data-bs-target="#feedbackDetails"
                                        >
                                          <i className="fas fa-eye" />
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="tableRow">
                                  <td>A122</td>
                                  <td>ADCF</td>
                                  <td>03/02/2020</td>
                                  <td>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn transparent-btn ellipsis-btn"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        {" "}
                                        <i className="fa fa-ellipsis-v" />
                                      </button>
                                      <div className="dropdown-menu text-left custom-dropdown">
                                        <a
                                          className="dropdown-item"
                                          href="#_"
                                          data-bs-toggle="modal"
                                          type="button"
                                          data-bs-target="#feedbackDetails"
                                        >
                                          <i className="fas fa-eye" />
                                          View
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center  my-md-3 p-md-3 p-2 m-2 table-responsive">
                  <div className="col-lg-5 col-sm-12 col-md-12">
                    <h6 className="paginations">
                      {" "}
                      Showing 05 out of 40 records{" "}
                    </h6>
                  </div>
                  <div className="col-lg-7 col-sm-12 col-md-12">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul className="pagination">
                        <div className="pagination_wrapper d-flex align-items-center justify-content-center">
                          <li className="paginate_button page-item previous disabled">
                            {" "}
                            <a href="#" className="page-link pure-black">
                              Previous
                            </a>{" "}
                          </li>
                          <li className="paginate_button page-item active">
                            {" "}
                            <a href="#" className="page-link">
                              01
                            </a>{" "}
                          </li>
                          <li className="paginate_button page-item">
                            {" "}
                            <a href="#" className="page-link">
                              02
                            </a>{" "}
                          </li>
                          <li className="paginate_button page-item">
                            {" "}
                            <a href="#" className="page-link">
                              30
                            </a>{" "}
                          </li>
                          <li className="paginate_button page-item">
                            {" "}
                            <a href="#" className="page-link">
                              04
                            </a>{" "}
                          </li>
                          <li
                            className="paginate_button page-item next disabled "
                            i
                          >
                            {" "}
                            <a href="#" className="page-link pure-black">
                              Next
                            </a>{" "}
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* User Management Ends */}
              </div>
            </div>
            {/* Users Ends */}
          </section>
        </div>
      </div>
      {/*?php include('../layout/footer.php') ?*/}
      {/*Feedback Details Start */}
      <div
        className="modal fade"
        id="feedbackDetails"
        tabIndex={-1}
        aria-labelledby="feedbackDetailsLabel"
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
              <div className="main-modal-msg">
                <h4 className="section-heading fw-800 my-5">
                  Feedback Details
                </h4>
                <div className="primContentWrap mb-2 d-md-flex text-md-center text-start">
                  <label htmlFor className="mb-1">
                    Name
                  </label>
                  <p>Mark</p>
                </div>
                <div className="primContentWrap mb-2 d-md-flex text-md-center text-start">
                  <label htmlFor className="mb-1">
                    Email
                  </label>
                  <p>mark@email.com</p>
                </div>
                <div className="primContentWrap mb-2 d-md-flex text-md-center text-start">
                  <label htmlFor className="mb-1">
                    Date
                  </label>
                  <p>02-02-2021</p>
                </div>
                <div className="primContentWrap mb-2 d-md-flex text-md-center text-start">
                  <label htmlFor className="mb-1">
                    Subject
                  </label>
                  <p>SADSF</p>
                </div>
                <div className="primContentWrap mb-2 d-md-flex text-md-center text-start">
                  <label htmlFor className="mb-1">
                    Message
                  </label>
                  <p className="text-start">
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
