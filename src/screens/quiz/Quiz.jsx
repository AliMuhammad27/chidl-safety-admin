import React from "react";

const Quiz = () => {
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
                <a href="./" className="prim-btn cmsbtnPrim mb-4 me-3">
                  Add New Question
                </a>
                <a href="./editQuiz.php" className="prim-btn cmsbtnSec mb-4">
                  Edit
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
    </div>
  );
};

export default Quiz;
