import React from "react";

const PurchasedSubscription = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center justify-content-between text-center flex-wrap">
              <h1 className="page-title fw-800 primFont mb-4 ">
                Subscriptions Purchased
              </h1>
              <div className="text-center">
                <a href="./index.php" className="prim-btn cmsbtnPrim mb-4">
                  Subscriptions
                </a>
              </div>
            </div>
            <div className="box">
              {/* User Management Starts */}
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
                    <label className="mr-xl-2 mr-2 mb-3">Service Status</label>
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
                                <th>User Name</th>
                                <th>Package Name</th>
                                <th>Purchased On</th>
                                <th>Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>Sarah</td>
                                <td>ABC</td>
                                <td>03/02/2020</td>
                                <td>$ 123</td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>Sarah</td>
                                <td>ABC</td>
                                <td>03/02/2020</td>
                                <td>$ 123</td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>Sarah</td>
                                <td>ABC</td>
                                <td>03/02/2020</td>
                                <td>$ 123</td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>Sarah</td>
                                <td>ABC</td>
                                <td>03/02/2020</td>
                                <td>$ 123</td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>Sarah</td>
                                <td>ABC</td>
                                <td>03/02/2020</td>
                                <td>$ 123</td>
                              </tr>
                              <tr className="tableRow">
                                <td>01</td>
                                <td>Sarah</td>
                                <td>ABC</td>
                                <td>03/02/2020</td>
                                <td>$ 123</td>
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
      </div>
      <div>
        {/*Inactivate Modal  Start */}
        <div
          className="modal fade"
          id="inactivateThis"
          tabIndex={-1}
          aria-labelledby="inactivateThisLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
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
                <div className="text-center">
                  <img src="../../images/sure.png" alt="sure" />
                </div>
                <div className="main-modal-msg">
                  <h4 className="section-heading fw-800 my-4">Inactivate</h4>
                  <p className="prim-text primFont fw-400  my-2">
                    Are you sure you want to activate this?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    className="prim-btn cmsbtnPrim my-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#inactivateConfirmation"
                    data-bs-dismiss="modal"
                  >
                    Yes
                  </button>
                  <button
                    className="prim-btn cmsbtnSec my-1"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Inactivate Modal End  */}
        {/*Inactivate confirmation Modal  Start */}
        <div
          className="modal fade"
          id="inactivateConfirmation"
          tabIndex={-1}
          aria-labelledby="inactivateConfirmationLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
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
                <div className="text-center">
                  <img src="../../images/check.png" alt="check" />
                </div>
                <div className="main-modal-msg my-2">
                  <h4 className="section-heading fw-800 my-4">Inactivate</h4>
                  <p className="prim-text primFont fw-400 my-2">
                    Successfully Inactivated
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-dismiss="modal"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Inactivate confirmation Modal End  */}
        {/*Activate Modal  Start */}
        <div
          className="modal fade"
          id="activateThis"
          tabIndex={-1}
          aria-labelledby="activateThisLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
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
                <div className="text-center">
                  <img src="../../images/sure.png" alt="sure" />
                </div>
                <div className="main-modal-msg">
                  <h4 className="section-heading fw-800 my-4">Activate</h4>
                  <p className="prim-text primFont fw-400 my-2">
                    Are you sure you want to activate this?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    className="prim-btn cmsbtnPrim my-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#activateConfirmation"
                    data-bs-dismiss="modal"
                  >
                    Yes
                  </button>
                  <button
                    className="prim-btn cmsbtnSec my-1"
                    data-bs-dismiss="modal"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Activate Modal End  */}
        {/*Inactivate confirmation Modal  Start */}
        <div
          className="modal fade"
          id="activateConfirmation"
          tabIndex={-1}
          aria-labelledby="activateConfirmationLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
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
                <div className="text-center">
                  <img src="../../images/check.png" alt="check" />
                </div>
                <div className="main-modal-msg my-2">
                  <h4 className="section-heading fw-800">Activate</h4>
                  <p className="prim-text primFont fw-400 my-2">
                    Successfully Activated
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-dismiss="modal"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedSubscription;
