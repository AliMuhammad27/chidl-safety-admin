import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { closeModals } from "util/closeModal";
import {
  getAllSubscriptions,
  addSubscription,
  getSubscriptionDetails,
  editSubscription,
  toggleActiveStatus,
} from "redux/action/subscription";
import Toasty from "util/toast";
import Pagination from "components/Pagination";

const SubscriptionManagement = () => {
  const [id, setid] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setsstatus] = useState(true);
  const [form, setValues] = useState({
    subscriptionname: "",
    subscriptionprice: "",
    numberOfCourses: "",
    numberOfServices: "",
    subscriptionduration: "",
    status: "",
  });
  const {
    subscriptionname,
    subscriptionprice,
    numberOfCourses,
    numberOfServices,
    subscriptionduration,
  } = form;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllSubscriptions(searchString, status, from, to, page, perPage)
    );
  }, [searchString, status, from, to, page, perPage]);
  const subscriptions = useSelector(
    (state) => state.subscription?.subscriptions?.subscription
  );
  console.log("Subscriptions", subscriptions);

  const handleStateChange = (e) => {
    e.preventDefault();
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const subscriptionInfo = useSelector(
    (state) => state?.subscription?.subscription?.subscription
  );
  console.log("subscriptionInfo", subscriptionInfo);
  useEffect(() => {
    if (id) {
      dispatch(getSubscriptionDetails(id));
    }
  }, [id]);
  console.log("changing Form", form);
  return (
    <div>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="d-flex align-items-center justify-content-between text-center flex-wrap">
                <h1 className="page-title fw-800 primFont mb-4 ">
                  Subscriptions Package
                </h1>
                <div className="text-center">
                  <a
                    href="#_"
                    data-bs-toggle="modal"
                    data-bs-target="#add_Subscription"
                    type="button"
                    className="prim-btn cmsbtnPrim mb-4 me-3"
                  >
                    Add Package
                  </a>
                  <a
                    href="./purchasedSubscription.php"
                    className="prim-btn cmsbtnSec mb-4"
                  >
                    Subscription Purchased
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
                          value={searchString}
                          onChange={(e) => {
                            setSearchString(e.target.value);
                          }}
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
                        value={from}
                        onChange={(e) => {
                          setFrom(e.target.value);
                        }}
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
                        value={to}
                        onChange={(e) => {
                          setTo(e.target.value);
                        }}
                        className="primDateTime"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-8 text-lg-end text-start">
                    <div className="align-items-center d-md-flex filter-wrap w-100 mb-3 justify-content-end">
                      <label className="mr-xl-2 mr-2 mb-3">
                        Service Status
                      </label>
                      <select
                        className="dashInput sm-dropdown mb-3"
                        onChange={(e) => {
                          setsstatus(e.target.value);
                        }}
                      >
                        <option value="Status">Status</option>
                        <option value="true">Active</option>
                        <option value="false">InActive</option>
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
                                  <th>Package Name</th>
                                  <th>Added On</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {subscriptions &&
                                Object.keys(subscriptions).length > 0 &&
                                subscriptions.docs.length > 0
                                  ? subscriptions.docs.map((item, index) => (
                                      <tr className="tableRow">
                                        <td>{index + 1}</td>
                                        <td>{item?.subscriptionname}</td>
                                        <td>
                                          {moment(item?.createdAt).format("ll")}
                                        </td>
                                        <td>$ {item?.subscriptionprice}</td>
                                        <td>
                                          <div className="maindropdown">
                                            <button
                                              className={
                                                item?.status
                                                  ? "maindropbtn cGreen"
                                                  : "maindropbtn text-danger"
                                              }
                                            >
                                              {item?.status ? (
                                                <>Active</>
                                              ) : (
                                                <>In-Active</>
                                              )}
                                              <i className="fas fa-caret-down ps-2" />
                                            </button>
                                            <div className="customDropdown-content">
                                              <a
                                                href="#"
                                                type="button"
                                                onClick={(e) => {
                                                  setid(item?._id);
                                                }}
                                                data-bs-toggle="modal"
                                                data-bs-target={
                                                  item?.status
                                                    ? "#inactivateThis"
                                                    : "#activateThis"
                                                }
                                              >
                                                {item?.status ? (
                                                  <>In-Active</>
                                                ) : (
                                                  <>Active</>
                                                )}{" "}
                                              </a>
                                            </div>
                                          </div>
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
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-target="#subscriptionPackageDetails"
                                                data-bs-toggle="modal"
                                                type="button"
                                                onClick={(e) => {
                                                  setid(item?._id);
                                                }}
                                              >
                                                <i className="far fa-eye" />
                                                View
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                type="button"
                                                data-bs-target="#edit_Subscription"
                                                onClick={(e) => {
                                                  setid(item?._id);
                                                }}
                                              >
                                                <i className="fas fa-edit" />
                                                Edit
                                              </a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    ))
                                  : "No Subs"}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center  my-md-3 p-md-3 p-2 m-2 table-responsive">
                  {subscriptions?.docs?.length > 0 && (
                    <Pagination
                      totalDocs={subscriptions?.totalDocs}
                      totalPages={subscriptions?.totalPages}
                      currentPage={subscriptions?.page}
                      setPage={setPage}
                      hasNextPage={subscriptions?.hasNextPage}
                      hasPrevPage={subscriptions?.hasPrevPage}
                    />
                  )}
                  {/* <div className="col-lg-5 col-sm-12 col-md-12">
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
                  </div> */}
                </div>
                {/* User Management Ends */}
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*?php include('../layout/footer.php') ?*/}
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
                <img src="images/sure.png" alt="sure" />
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
                  onClick={(e) => {
                    dispatch(
                      toggleActiveStatus(
                        id,
                        searchString,
                        status,
                        from,
                        to,
                        page,
                        perPage
                      )
                    );
                    e.preventDefault();
                  }}
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
                <img src="images/check.png" alt="check" />
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
                <img src="images/sure.png" alt="sure" />
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
                  onClick={(e) => {
                    dispatch(
                      toggleActiveStatus(
                        id,
                        searchString,
                        status,
                        from,
                        to,
                        page,
                        perPage
                      )
                    );
                    e.preventDefault();
                  }}
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
                <img src="images/check.png" alt="check" />
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
      {/*  Inactivate confirmation Modal End  */}
      {/* Subscription Package Details Start */}
      <div
        className="modal fade"
        id="subscriptionPackageDetails"
        tabIndex={-1}
        aria-labelledby="subscriptionPackageDetailsLabel"
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
              <div className="main-modal-msg">
                <h4 className="heading-lg fw-800 my-5">
                  Subscription Package Details
                </h4>
                <div className="row">
                  <div className="col-xl-8 mx-auto">
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        Package Name
                      </label>
                      <p>{subscriptionInfo?.subscriptionname}</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        No of Courses
                      </label>
                      <p>{subscriptionInfo?.numberOfCourses}</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        No of Services
                      </label>
                      <p>{subscriptionInfo?.numberOfServices}</p>
                    </div>

                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        Duration
                      </label>
                      <p>{subscriptionInfo?.subscriptionduration} days</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        Amount
                      </label>
                      <p>{subscriptionInfo?.subscriptionprice}</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        Status
                      </label>
                      {subscriptionInfo?.status ? (
                        <p>Active</p>
                      ) : (
                        <p>In-Active</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_Subscription"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Subscription Package Details End  */}
      {/* Add Subscription Package Modal Start */}
      <div
        className="modal fade"
        id="add_Subscription"
        tabIndex={-1}
        aria-labelledby="add_SubscriptionLabel"
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
              <form action="#">
                <div className="main-modal-msg">
                  <h4 className="section-heading fw-800 my-3">
                    Add Subscription Package
                  </h4>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="ser_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Subscription Name <span className="text-danger">*</span>
                  </label>
                  <input
                    id="ser_name"
                    type="text"
                    name="subscriptionname"
                    value={subscriptionname}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder="Service Name"
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="courses"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    No of Courses<span className="text-danger">*</span>
                  </label>
                  <input
                    id="courses"
                    type="number"
                    name="numberOfCourses"
                    value={numberOfCourses}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder={12}
                    className="auth-input passInput mx-0"
                  />
                </div>

                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="courses"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    No of Services<span className="text-danger">*</span>
                  </label>
                  <input
                    id="courses"
                    type="number"
                    name="numberOfServices"
                    value={numberOfServices}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder={12}
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="courses"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Duration* (In Days)<span className="text-danger">*</span>
                  </label>
                  <input
                    id="courses"
                    type="number"
                    name="subscriptionduration"
                    value={subscriptionduration}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder={30}
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="num"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Amount <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative">
                    <i className="fas fa-dollar-sign inputIcon" />
                    <input
                      id="num"
                      type="number"
                      name="subscriptionprice"
                      value={subscriptionprice}
                      onChange={(e) => {
                        handleStateChange(e);
                      }}
                      placeholder="Enter Amount"
                      className="auth-input passInput mx-0"
                    />
                  </div>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="f_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Status<span className="text-danger">*</span>
                  </label>
                  <select className="modal-select">
                    <option value="true">Active</option>
                    <option value="false">InActive</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={(e) => {
                      subscriptionname.length > 0 &&
                      subscriptionprice.length > 0 &&
                      numberOfCourses.length > 0
                        ? dispatch(
                            addSubscription(
                              form,
                              searchString,
                              status,
                              from,
                              to,
                              page,
                              perPage
                            )
                          )
                        : Toasty(
                            "Error",
                            "Please fill all the required fields"
                          );
                    }}
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*  Add Subscription Package Modal End  */}
      {/* Edit Subscription Package Modal Start */}
      <div
        className="modal fade"
        id="edit_Subscription"
        tabIndex={-1}
        aria-labelledby="edit_SubscriptionLabel"
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
              <form action="#">
                <div className="main-modal-msg">
                  <h4 className="section-heading fw-800 my-3">
                    Edit Subscription Package
                  </h4>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="ser_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Subscription Name <span className="text-danger">*</span>
                  </label>
                  <input
                    id="ser_name"
                    type="text"
                    name="subscriptionname"
                    value={subscriptionname}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder="Service Name"
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="courses"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    No of Courses<span className="text-danger">*</span>
                  </label>
                  <input
                    id="courses"
                    type="number"
                    name="numberOfCourses"
                    value={numberOfCourses}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder={12}
                    className="auth-input passInput mx-0"
                  />
                </div>

                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="courses"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    No of Services<span className="text-danger">*</span>
                  </label>
                  <input
                    id="courses"
                    type="number"
                    placeholder={12}
                    name="numberOfServices"
                    value={numberOfServices}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="courses"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Duration* (In Days)<span className="text-danger">*</span>
                  </label>
                  <input
                    id="courses"
                    type="number"
                    name="subscriptionduration"
                    value={subscriptionduration}
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                    placeholder={30}
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="num"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Amount <span className="text-danger">*</span>
                  </label>
                  <div className="position-relative">
                    <i className="fas fa-dollar-sign inputIcon" />
                    <input
                      id="num"
                      type="number"
                      placeholder="Enter Amount"
                      name="subscriptionprice"
                      value={subscriptionprice}
                      onChange={(e) => {
                        handleStateChange(e);
                      }}
                      className="auth-input passInput mx-0"
                    />
                  </div>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="f_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Status<span className="text-danger">*</span>
                  </label>
                  <select
                    className="modal-select"
                    value={status}
                    name="status"
                    onChange={(e) => {
                      handleStateChange(e);
                    }}
                  >
                    <option value="true">Active</option>
                    <option value="false">InActive</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={(e) => {
                      dispatch(
                        editSubscription(
                          form,
                          id,
                          searchString,
                          status,
                          from,
                          to,
                          page,
                          perPage
                        )
                      );
                      closeModals();
                    }}
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-dismiss="modal"
                  >
                    Update
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

export default SubscriptionManagement;
