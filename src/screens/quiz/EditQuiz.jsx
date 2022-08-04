import React from "react";

const EditQuiz = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center justify-content-between text-center flex-wrap">
              <div className="d-flex align-items-center mb-4">
                <h1 className="page-title fw-800 primFont me-3 border-right pe-2">
                  Quiz
                </h1>
                <small className="primColor mb-2">
                  Passing Criteria : <span>80 %</span>{" "}
                </small>
              </div>
              <div className="text-center">
                <a
                  href="#_"
                  type="button"
                  data-bs-target="#addQuestion"
                  data-bs-toggle="modal"
                  className="prim-btn cmsbtnPrim mb-4 me-3"
                >
                  Add New Question
                </a>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques1"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques1"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques1"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques1"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques2"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques2"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques2"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques2"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques3"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques3"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques3"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques3"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques4"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques4"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques4"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques4"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques5"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques5"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques5"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques5"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques6"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques6"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques6"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques6"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques7"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques7"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques7"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques7"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Question Box */}
            <div className="box my-3">
              <div className="d-flex question-wrapper">
                <h6 className="heading-sm primFont fw-800">Q1</h6>
                <div>
                  {/* Question */}
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo. Proin sodales pulvinar
                    tempor. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Nam fermentum,
                    nulla luctus pharetra vulputate, felis tellus mollis orci,
                    sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Aenean euismod bibendum
                    laoreet. Proin gravida dolor sit amet lacus
                  </p>
                  {/* Options */}
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option A"
                      defaultChecked
                      name="ques8"
                    />
                    Option A
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      id="check"
                      defaultValue="Option B"
                      name="ques8"
                    />
                    Option B
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option C"
                      name="ques8"
                    />
                    Option C
                    <span className="radioCheckmark" />
                  </label>
                  <label className="radioWrap my-1 mb-3">
                    <input
                      type="radio"
                      className="radio_input"
                      defaultValue="Option D"
                      name="ques8"
                    />
                    Option D
                    <span className="radioCheckmark" />
                  </label>
                </div>
              </div>
              <div className="text-end">
                <button
                  className="notBtn text-danger primFont fw-600 px-3"
                  data-bs-target="#deleteThis"
                  type="button"
                  data-bs-toggle="modal"
                >
                  <u>Delete</u>
                </button>
                <button
                  type="button"
                  data-bs-target="#editQuestion"
                  data-bs-toggle="modal"
                  className="notBtn primColor primFont fw-600 px-3"
                >
                  <u>Edit</u>
                </button>
              </div>
            </div>
            {/* Pagination start */}
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
                      <li className="paginate_button page-item">
                        {" "}
                        <a href="#" className="page-link">
                          04
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
            {/* Pagination End */}
          </section>
        </div>
      </div>
      <div>
        {/*Add New Question Modal  Start */}
        <div
          className="modal fade"
          id="addQuestion"
          tabIndex={-1}
          aria-labelledby="addQuestionLabel"
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
              <div className="modal-body pb-5 mx-md-3">
                <form action="#">
                  <div className="main-modal-msg my-2">
                    <h4 className="section-heading fw-800">Add New Question</h4>
                  </div>
                  <div className="inp-wrap sec-inp-wrap mb-3">
                    <label htmlFor="add_ques" className="primFont fw-600">
                      Question No: 3
                    </label>
                    <textarea
                      name
                      id="add_ques"
                      rows={5}
                      className="w-100 m-0"
                      placeholder="Enter Question"
                      defaultValue={""}
                    />
                  </div>
                  {/* Options */}
                  <div>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        defaultValue="Option A"
                        defaultChecked
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          type="text"
                          placeholder="Enter Option A"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        id="check"
                        defaultValue="Option B"
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          type="text"
                          placeholder="Enter Option B"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        defaultValue="Option C"
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          type="text"
                          placeholder="Enter Option C"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        defaultValue="Option D"
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          type="text"
                          placeholder="Enter Option D"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <p className="primFont fw-400 cBlack ms-md-5">
                      <i>Note: Select the Correct Answer</i>
                    </p>
                  </div>
                  <div className="modal-footer justify-content-start">
                    <button
                      className="prim-btn cmsbtnPrim my-1"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="prim-btn cmsbtnSec my-1"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*  Add New Question Modal End  */}
        {/*Edit Question Modal  Start */}
        <div
          className="modal fade"
          id="editQuestion"
          tabIndex={-1}
          aria-labelledby="editQuestionLabel"
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
              <div className="modal-body pb-5 mx-md-3">
                <form action="#">
                  <div className="main-modal-msg my-2">
                    <h4 className="section-heading fw-800">Edit Question</h4>
                  </div>
                  <div className="inp-wrap sec-inp-wrap mb-3">
                    <label htmlFor="add_ques" className="primFont fw-600">
                      Question No: 3
                    </label>
                    <textarea
                      name
                      id="add_ques"
                      rows={5}
                      className="w-100 m-0"
                      placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
                      defaultValue={""}
                    />
                  </div>
                  {/* Options */}
                  <div>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        defaultValue="Option A"
                        defaultChecked
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          defaultValue="Enter Option A"
                          type="text"
                          placeholder="Enter Option A"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        id="check"
                        defaultValue="Option B"
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          defaultValue="Enter Option B"
                          type="text"
                          placeholder="Enter Option B"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        defaultValue="Option C"
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          defaultValue="Enter Option C"
                          type="text"
                          placeholder="Enter Option C"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <label className="radioWrap my-1 mb-3">
                      <input
                        type="radio"
                        className="radio_input"
                        defaultValue="Option D"
                        name="ques1"
                      />
                      <span className="radioCheckmark" />
                      <div className="inp-wrap sec-inp-wrap w-50 w_100">
                        <input
                          id="course_name"
                          defaultValue="Enter Option D"
                          type="text"
                          placeholder="Enter Option D"
                          className="auth-input passInput"
                        />
                      </div>
                    </label>
                    <p className="primFont fw-400 cBlack ms-md-5">
                      <i>Note: Select the Correct Answer</i>
                    </p>
                  </div>
                  <div className="modal-footer justify-content-start">
                    <button
                      className="prim-btn cmsbtnPrim my-1"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className="prim-btn cmsbtnSec my-1"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*  Edit Question Modal End  */}
        {/*Delete  Modal  Start */}
        <div
          className="modal fade"
          id="deleteThis"
          tabIndex={-1}
          aria-labelledby="deleteThisLabel"
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
                  <h4 className="section-heading fw-800 my-4">Delete?</h4>
                  <p className="prim-text primFont fw-400  my-2">
                    Are you sure you want to delete this?
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    className="prim-btn cmsbtnPrim my-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteConfirmation"
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
        {/*  Delete  Modal End  */}
        {/*Delete confirmation Modal  Start */}
        <div
          className="modal fade"
          id="deleteConfirmation"
          tabIndex={-1}
          aria-labelledby="deleteConfirmationLabel"
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
                  <h4 className="section-heading fw-800">Successfully</h4>
                  <p className="prim-text primFont fw-400 my-2">
                    Successfully Deleted !
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
        {/*  Delete confirmation Modal End  */}
      </div>
    </div>
  );
};

export default EditQuiz;
