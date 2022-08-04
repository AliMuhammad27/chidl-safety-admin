import React from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            {/* User Details Starts */}
            <div className="d-flex align-items-center my-3">
              <Link
                className="fas fa-arrow-left me-3 go-back-icon"
                to="/users"
              />
              <h1 className="page-title fw-800 primFont mb-0">Users</h1>
            </div>
            {/* User Management Starts */}
            <div className="box my-5">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex align-items-center flex-wrap">
                  <div className="avatar-wrap me-4">
                    <img
                      src="../../images/avatar.png"
                      alt="avatar"
                      className="userAvatar img-fluid"
                    />
                  </div>
                  <div className="mainDetail">
                    <label htmlFor>Amanda Charles:</label>
                    <p className="c-gray">
                      <i className="fas fa-phone-alt mr-1 primColor pe-2" />
                      +44 123 456678
                    </p>
                    <p className="c-gray">
                      <i className="fas fa-envelope mr-1 primColor pe-2" />
                      email@email.com
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <input className=" switch-inp" type="checkbox" id="switch" />
                  <label htmlFor="switch" className="switch-label mb-0 me-2" />
                  <h5 className="mb-0 ml-1">Active</h5>
                </div>
              </div>
            </div>
            <div className="box  my-5">
              <h1 className="page-title fw-800 primFont mt-5">Order Logs</h1>
              {/* Search Filter Starts */}
              <div className="d-md-flex align-items-end flex-wrap justify-content-between mb-3 py-md-4 py-1">
                <div className="userInput mb-3 d-md-flex align-items-center justify-content-between">
                  <label className="d-inline-block mb-2 mb-xxl-0 me-3 c-gray flex-shrink-0">
                    Showing
                  </label>
                  <select className="d-inline-block  primSelect me-3 mb-2">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                  </select>
                  <label className="d-inline-block mb-2 mb-xxl-0 me-3 c-gray flex-shrink-0">
                    Entries
                  </label>
                </div>
                <div className="userInput mb-3  d-flex align-items-center justify-content-between">
                  <div className="dashSearchWrap">
                    <form action="#">
                      <input
                        type="search"
                        id="search-inp"
                        className="dashInput search-input w-100"
                        placeholder="Search...."
                      />
                      <button type="button" className="search-icon">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
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
                    <label className="mr-xl-2 mr-2  mb-3">User Status</label>
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
                                <th>S.No.</th>
                                <th>Order ID</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Date</th>
                                <th>Order Amount</th>
                                <th>Status</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="primColor fw-600 primFont">
                                    Delivered
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="primColor fw-600 primFont">
                                    Delivered
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="primColor fw-600 primFont">
                                    Delivered
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="text-danger fw-600 primFont">
                                    Rejected
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="text-danger fw-600 primFont">
                                    Pending
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="cGreen fw-600 primFont">
                                    Accepted
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>WE_993</td>
                                <td>shop@email.com</td>
                                <td>4537457245s</td>
                                <td>03/02/2020</td>
                                <td>$ 283</td>
                                <td>
                                  <span className="primColor fw-600 primFont">
                                    Delivered
                                  </span>
                                </td>
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
                                      <a className="dropdown-item" href="#_">
                                        <i className="far fa-eye" />
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
                  <h6 className="pagination-details">
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
                            03
                          </a>{" "}
                        </li>
                        <li className="paginate_button page-item next disabled">
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
          </section>
        </div>
        {/* User Details Ends */}
      </div>
    </div>
  );
};

export default UserDetails;
