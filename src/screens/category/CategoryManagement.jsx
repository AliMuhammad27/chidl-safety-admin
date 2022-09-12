import React, { useEffect, useState } from "react";
import useWindowTitle from "screens/hooks/UseWindowTitle";
import Pagination from "components/Pagination";
import { closeModals } from "util/closeModal";
import {
  addCategory,
  getAllCategories,
  toggleActiveStatus,
  getCategoryDetails,
  editCategory,
  deleteTax,
} from "redux/action/category";
import { useSelector, useDispatch } from "react-redux";
import Toasty from "util/toast";
const CategoryManagement = () => {
  const dispatch = useDispatch();
  useWindowTitle("category-management");
  const [categoryName, setcategoryname] = useState("");
  const [statuss, setstatuss] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [id, setid] = useState("");
  useEffect(() => {
    console.log("Fetching Categories");
    dispatch(getAllCategories(searchString, status, from, to, page, perPage));
  }, [searchString, status, from, to, page, perPage]);
  const categories = useSelector(
    (state) => state.category?.categories?.category
  );
  console.log("Fetched Categories", categories);
  console.log("id is setting", id);
  const categoryInfo = useSelector(
    (state) => state?.category?.category?.category
  );
  console.log("categoryInfo", categoryInfo);
  useEffect(() => {
    if (id) {
      dispatch(getCategoryDetails(id));
    }
  }, [id]);
  return (
    <div>
      <div className="app-content content dashboard">
        <div className="content-wrapper">
          <div className="content-body">
            {/* Basic form layout section start */}
            <section id="configuration">
              <div className="d-flex align-items-center justify-content-between text-center flex-wrap">
                <h1 className="page-title fw-800 primFont mb-4 ">Categories</h1>
                <div className="text-center">
                  <a
                    href="./index.php"
                    className="prim-btn cmsbtnPrim mb-4"
                    data-bs-toggle="modal"
                    data-bs-target="#add_Category"
                    type="button"
                  >
                    Add Category
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
                                  <th>Category Name</th>
                                  <th>Added On</th>
                                  <th>No of Products</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {categories &&
                                Object.keys(categories).length > 0 &&
                                categories.docs.length > 0
                                  ? categories.docs.map((item, index) => (
                                      <tr className="tableRow">
                                        <td>{index + 1}</td>
                                        <td>{item?.categoryName}</td>
                                        <td>03/02/2020</td>
                                        <td>24</td>
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
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#categoryDetails"
                                                onClick={(e) => {
                                                  setid(item?._id);
                                                  setcategoryname(
                                                    item?.categoryName
                                                  );
                                                  setstatuss(item?.status);
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
                                                data-bs-target="#edit_Category"
                                                onClick={(e) => {
                                                  setid(item?._id);
                                                  setcategoryname(
                                                    item?.categoryName
                                                  );
                                                  setstatuss(item?.status);
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
                                  : "No Categories"}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center  my-md-3 p-md-3 p-2 m-2 table-responsive">
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
                  {categories?.docs?.length > 0 && (
                    <Pagination
                      totalDocs={categories?.totalDocs}
                      totalPages={categories?.totalPages}
                      currentPage={categories?.page}
                      setPage={setPage}
                      hasNextPage={categories?.hasNextPage}
                      hasPrevPage={categories?.hasPrevPage}
                    />
                  )}
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
                <img
                  src="
                images/sure.png"
                  alt="sure"
                />
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
                <img
                  src="
                images/check.png"
                  alt="check"
                />
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
      {/* Category Details Details Start */}
      <div
        className="modal fade"
        id="categoryDetails"
        tabIndex={-1}
        aria-labelledby="categoryDetailsLabel"
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
                <h4 className="heading-lg fw-800 my-5">Category Details</h4>
                <div className="row">
                  <div className="col-md-8 mx-auto col-10">
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        Category Name
                      </label>
                      <p>{categoryName}</p>
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        Status
                      </label>
                      {statuss ? <p>Active</p> : <p>In-Active</p>}
                    </div>
                    <div className="primContentWrap mb-2 d-md-flex text-start">
                      <label htmlFor className="mb-1">
                        No. of Products
                      </label>
                      <p>4</p>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="prim-btn cmsbtnPrim my-1"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_Category"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Category Details Details End  */}
      {/* Add Category Package Modal Start */}
      <div
        className="modal fade"
        id="add_Category"
        tabIndex={-1}
        aria-labelledby="add_CategoryLabel"
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
                  <h4 className="section-heading fw-800 my-3">Add Category</h4>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="ser_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Category Name<span className="text-danger">*</span>
                  </label>
                  <input
                    id="ser_name"
                    type="text"
                    placeholder="Enter Category Name"
                    className="auth-input passInput mx-0"
                    value={categoryName}
                    onChange={(e) => {
                      setcategoryname(e.target.value);
                    }}
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="f_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Category Status<span className="text-danger">*</span>
                  </label>
                  <select
                    className="modal-select"
                    value={statuss}
                    onChange={(e) => {
                      setstatuss(e.target.value);
                    }}
                  >
                    <option value>Select Status</option>
                    <option value="true">Active</option>
                    <option value="false">InActive</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={(e) => {
                      categoryName.length > 0 && statuss
                        ? dispatch(
                            addCategory(
                              categoryName,
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
      {/*  Add Category Package Modal End  */}
      {/* Edit Category Package Modal Start */}
      <div
        className="modal fade"
        id="edit_Category"
        tabIndex={-1}
        aria-labelledby="edit_CategoryLabel"
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
                  <h4 className="section-heading fw-800 my-3">Edit Category</h4>
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="ser_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Category Name<span className="text-danger">*</span>
                  </label>
                  <input
                    id="ser_name"
                    type="text"
                    placeholder="Enter Category Name"
                    value={categoryName}
                    onChange={(e) => {
                      setcategoryname(e.target.value);
                    }}
                    className="auth-input passInput mx-0"
                  />
                </div>
                <div className="inp-wrap sec-inp-wrap mb-3">
                  <label
                    htmlFor="f_name"
                    className="d-block primLable my-2 px-md-3 px-1"
                  >
                    Category Status<span className="text-danger">*</span>
                  </label>
                  <div className="col-xxl-8 text-lg-end text-start">
                    <div className="align-items-center d-md-flex filter-wrap w-100 mb-3 justify-content-end">
                      <select
                        className="dashInput sm-dropdown mb-3"
                        value={statuss}
                        onChange={(e) => {
                          setstatuss(e.target.value);
                        }}
                      >
                        <option value="Status">Status</option>
                        <option value="true">Active</option>
                        <option value="false">InActive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    onClick={(e) => {
                      dispatch(
                        editCategory(
                          id,
                          categoryName,
                          statuss,
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

export default CategoryManagement;
