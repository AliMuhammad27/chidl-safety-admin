import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAttribute, getAllAttributes } from "redux/action/attribute";
import Pagination from "components/Pagination";
import Toasty from "util/toast";
const AttributeManagement = ({ history }) => {
  const dispatch = useDispatch();
  const [attributeName, setattributename] = useState("");
  const [attributeValue, setattributevalue] = useState("");
  const [attributeType, setattributetype] = useState("");
  const [statuss, setstatus] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("Fetching Attributes");
    dispatch(getAllAttributes(searchString, status, from, to, page, perPage));
  }, [searchString, status, from, to, page, perPage]);
  const attributes = useSelector(
    (state) => state.attribute?.attributes?.attribute
  );
  console.log("Fetched Attributes", attributes);
  return (
    <div>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="d-flex align-items-center justify-content-between text-center flex-wrap">
                <h1 className="page-title fw-800 primFont mb-4 ">Attributes</h1>
                <div className="text-center">
                  <a
                    href="#_"
                    data-bs-toggle="modal"
                    data-bs-target="#addAttributeDetails"
                    type="button"
                    className="prim-btn cmsbtnPrim mb-4"
                  >
                    Add Attribute
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
                          value={searchString}
                          onChange={(e) => {
                            setSearchString(e.target.value);
                          }}
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
                        value={to}
                        onChange={(e) => {
                          setTo(e.target.value);
                        }}
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
                      <select
                        className="dashInput sm-dropdown mb-3"
                        onChange={(e) => {
                          setStatus(e.target.value);
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
                                  <th>Attribute Name</th>
                                  <th>Added On</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {attributes &&
                                Object.keys(attributes).length > 0 &&
                                attributes.docs.length > 0
                                  ? attributes.docs.map((item, index) => (
                                      <tr className="tableRow">
                                        <td>{index + 1}</td>
                                        <td>{item?.attributeName}</td>
                                        <td>03/02/2020</td>
                                        <td>
                                          <div className="maindropdown">
                                            <button className="maindropbtn cGreen">
                                              Active
                                              <i className="fas fa-caret-down ps-2" />
                                            </button>
                                            <div className="customDropdown-content">
                                              <a
                                                href="#"
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#inactivateThis"
                                              >
                                                In-Active
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
                                                data-bs-toggle="modal"
                                                data-bs-target="#attributeDetails"
                                              >
                                                <i className="far fa-eye" />
                                                View
                                              </a>
                                              <a
                                                className="dropdown-item"
                                                href="#"
                                                data-bs-toggle="modal"
                                                data-bs-target="#editAttributeDetails "
                                                type="button"
                                              >
                                                <i className="fas fa-edit" />
                                                Edit
                                              </a>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    ))
                                  : "No Attributes"}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {attributes?.docs?.length > 0 && (
                  <Pagination
                    totalDocs={attributes?.totalDocs}
                    totalPages={attributes?.totalPages}
                    currentPage={attributes?.page}
                    setPage={setPage}
                    hasNextPage={attributes?.hasNextPage}
                    hasPrevPage={attributes?.hasPrevPage}
                  />
                )}
                {/* <div className="row align-items-center  my-md-3 p-md-3 p-2 m-2 table-responsive">
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
                </div> */}
                {/* User Management Ends */}
              </div>
            </section>
          </div>
        </div>
      </div>
      {/*?php include('../layout/footer.php') ?*/}
      {/*Attribute Details Start */}
      <div
        className="modal fade"
        id="attributeDetails"
        tabIndex={-1}
        aria-labelledby="attributeDetailsLabel"
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
                <div className="row">
                  <div className="col-md-7 mx-auto">
                    <h4 className="section-heading fw-800 my-5">
                      Attribute Details
                    </h4>
                    <div className="primContentWrap mb-2 d-md-flex justify-content-start">
                      <label htmlFor className="mb-1 text-start">
                        Atribute Name
                      </label>
                      <p>Colour</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex justify-content-start">
                      <label htmlFor className="mb-1 text-start">
                        Atribute Value
                      </label>
                      <p>Blue , Black</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex justify-content-start">
                      <label htmlFor className="mb-1 text-start">
                        Atribute Type
                      </label>
                      <p>Dropbox</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex justify-content-start">
                      <label htmlFor className="mb-1 text-start">
                        Status
                      </label>
                      <p>Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="prim-btn cmsbtnPrim my-1 mb-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#"
                data-bs-dismiss="modal"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  Attribute Details End  */}
      {/* Add Attribute Details Start */}
      <div
        className="modal fade"
        id="addAttributeDetails"
        tabIndex={-1}
        aria-labelledby="addAttributeDetailsLabel"
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
                <div className="main-modal-msg">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <h4 className="section-heading fw-800 my-5">
                        Attribute Details
                      </h4>
                      <div className="inp-wrap sec-inp-wrap w-100 mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Name<span className="text-danger">*</span>
                        </label>
                        <input
                          id="course_name"
                          defaultValue="Enter Option A"
                          type="text"
                          placeholder="Enter Atribute Name"
                          className="auth-input passInput"
                          value={attributeName}
                          onChange={(e) => {
                            setattributename(e.target.value);
                          }}
                        />
                      </div>
                      <div className="inp-wrap sec-inp-wrap w-100 mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Value<span className="text-danger">*</span>
                        </label>
                        <input
                          id="course_name"
                          defaultValue="Enter Option A"
                          type="text"
                          placeholder="Enter Atribute Value"
                          className="auth-input passInput"
                          value={attributeValue}
                          onChange={(e) => {
                            setattributevalue(e.target.value);
                          }}
                        />
                      </div>
                      <div className="text-end mb-2">
                        <button className="notBtn primColor">
                          <u>Add More Field</u>
                        </button>
                      </div>
                      <div className="modal-select-sec mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Type<span className="text-danger">*</span>
                        </label>
                        <select
                          className="dashInput sm-dropdown"
                          onChange={(e) => {
                            setattributetype(e.target.value);
                          }}
                        >
                          <option value="Select Value">Select Value</option>
                          <option value="Brown">Brown</option>
                          <option value="Black">Black</option>
                          <option value="Black">Purple</option>
                        </select>
                      </div>
                      <div className="modal-select-sec mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Status<span className="text-danger">*</span>
                        </label>
                        <select
                          className="dashInput sm-dropdown"
                          onChange={(e) => {
                            setstatus(e.target.value);
                          }}
                        >
                          <option value>Select Status</option>
                          <option value={true}>Active</option>
                          <option value={false}>InActive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={(e) => {
                      attributeName.length > 0 &&
                      attributeValue.length > 0 &&
                      attributeType.length > 0 &&
                      statuss
                        ? dispatch(
                            addAttribute(
                              attributeName,
                              attributeValue,
                              attributeType,
                              statuss,
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
                    className="prim-btn cmsbtnPrim my-1 mb-2"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#"
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
      {/*Add Attribute Details End  */}
      {/* Edit Attribute Details Start */}
      <div
        className="modal fade"
        id="editAttributeDetails"
        tabIndex={-1}
        aria-labelledby="editAttributeDetailsLabel"
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
                <div className="main-modal-msg">
                  <div className="row">
                    <div className="col-md-10 mx-auto">
                      <h4 className="section-heading fw-800 my-5">
                        Edit Attribute
                      </h4>
                      <div className="inp-wrap sec-inp-wrap w-100 mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Name<span className="text-danger">*</span>
                        </label>
                        <input
                          id="course_name"
                          defaultValue="Enter Option A"
                          type="text"
                          placeholder="Enter Atribute Name"
                          className="auth-input passInput"
                        />
                      </div>
                      <div className="inp-wrap sec-inp-wrap w-100 mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Value<span className="text-danger">*</span>
                        </label>
                        <input
                          id="course_name"
                          defaultValue="Enter Option A"
                          type="text"
                          placeholder="Enter Atribute Value"
                          className="auth-input passInput"
                        />
                        <div className="text-end mb-2">
                          <button className="notBtn primColor">
                            <u>Add More Field</u>
                          </button>
                        </div>
                      </div>
                      <div className="inp-wrap sec-inp-wrap w-100 mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Value<span className="text-danger">*</span>
                        </label>
                        <input
                          id="course_name"
                          defaultValue="Enter Option A"
                          type="text"
                          placeholder="Enter Atribute Value"
                          className="auth-input passInput"
                        />
                        <div className="text-end mb-2">
                          <button className="notBtn text-danger">
                            <u>Delete</u>
                          </button>
                        </div>
                      </div>
                      <div className="modal-select-sec mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Atribute Type<span className="text-danger">*</span>
                        </label>
                        <select className="dashInput sm-dropdown">
                          <option value="Select Value">Select Value</option>
                          <option value="Dropbox" selected>
                            Dropbox
                          </option>
                          <option>02</option>
                        </select>
                      </div>
                      <div className="modal-select-sec mb-4">
                        <label
                          htmlFor="prod_name"
                          className="d-block primLable my-2 px-md-3 px-1 text-start"
                        >
                          Status<span className="text-danger">*</span>
                        </label>
                        <select className="dashInput sm-dropdown">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="prim-btn cmsbtnPrim my-1 mb-2"
                    type="button"
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
      {/*Edit Attribute Details End  */}
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
  );
};

export default AttributeManagement;
