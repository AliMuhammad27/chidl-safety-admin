import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuiz, getAllQuiz } from "redux/action/quiz";
import Toasty from "util/toast";

const Quiz = ({ history }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("Fetching Quiz Questions");
    dispatch(getAllQuiz(searchString, status, from, to, page, perPage));
  }, []);
  const quizes = useSelector((state) => state.quiz?.quizes?.course);
  console.log("Fetched Quizes", quizes);
  const [quizduration, setquizduration] = useState(0);
  const [quizinfo, setquizinfo] = useState([]);
  const [inputfields, setInputfields] = useState([
    {
      quizquestion: "",
      quizoption1: "",
      quizoption2: "",
      quizoption3: "",
      quizoption4: "",
      correctanswer: "",
    },
  ]);
  const [loading, setloading] = useState(false);
  const [passingmarks, setpassingmakrs] = useState();
  const [totalmarks, settotalmarks] = useState();
  const [showaddquestion, setshowaddquestion] = useState(true);
  const adminToken = useSelector((state) => state?.auth?.token);
  console.log("AdminToken", adminToken);
  // const handleServiceChange = (e, index, val) => {
  //   const { name, value } = e.target;
  //   if (e.target.name == "correctanswer") {
  //     list[index][name] = val;
  //   }
  //   const list = [...quizinfo];
  //   list[index][name] = value;
  //   setquizinfo(list);
  // };
  const formData = new FormData();
  formData.append("passingmarks", passingmarks);
  formData.append("totalmarks", totalmarks);
  formData.append("quizinfo", JSON.stringify(quizinfo));

  const handlechangeinput = (index, event, value) => {
    console.log("event.target.value", event.target.value, value);
    const values = [...inputfields];
    value
      ? (values[index][event.target.name] = value)
      : event.target.name == "quizmarks"
      ? (values[index][event.target.name] = Number(event.target.value))
      : (values[index][event.target.name] = event.target.value);
    setInputfields(values);
    console.log("blockkkkk");
    setquizinfo(inputfields);
  };
  console.log("QuizInfo", quizinfo);

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
                {/* <small className="primColor mb-2">
                  Passing Criteria : <span>80 %</span>{" "}
                </small> */}
              </div>
              <div className="text-center">
                <div className="text-center">
                  <Link
                    href="#_"
                    type="button"
                    data-bs-target="#addQuestion"
                    data-bs-toggle="modal"
                    className="prim-btn cmsbtnPrim mb-4 me-3"
                  >
                    Add New Question
                  </Link>
                </div>
                <Link to="/edit-quiz/:id" className="prim-btn cmsbtnSec mb-4">
                  Edit
                </Link>
              </div>
            </div>
            {/* Question Box */}
            {quizes && Object.keys(quizes).length > 0 && quizes.docs.length > 0
              ? quizes.docs.map((item, index) => (
                  <div className="box my-3">
                    <div className="d-flex question-wrapper">
                      <h6 className="heading-sm primFont fw-800">
                        Q{index + 1}
                      </h6>
                      <div>
                        {/* Question */}
                        <p>{item?.quizinfo[0]?.quizquestion}</p>
                        {/* Options */}
                        <label className="radioWrap my-1 mb-3">
                          <input
                            type="radio"
                            className="radio_input"
                            name="ques1"
                          />
                          {item?.quizinfo[0]?.quizoption1}
                          <span className="radioCheckmark" />
                        </label>
                        <label className="radioWrap my-1 mb-3">
                          <input
                            type="radio"
                            className="radio_input"
                            id="check"
                            name="ques1"
                          />
                          {item?.quizinfo[0]?.quizoption2}
                          <span className="radioCheckmark" />
                        </label>
                        <label className="radioWrap my-1 mb-3">
                          <input
                            type="radio"
                            className="radio_input"
                            defaultValue="Option C"
                            name="ques1"
                          />
                          {item?.quizinfo[0]?.quizoption3}
                          <span className="radioCheckmark" />
                        </label>
                        <label className="radioWrap my-1 mb-3">
                          <input
                            type="radio"
                            className="radio_input"
                            defaultValue="Option D"
                            name="ques1"
                          />
                          {item?.quizinfo[0]?.quizoption4}
                          <span className="radioCheckmark" />
                        </label>
                      </div>
                    </div>
                    <h2 className="note-answer mt-2">
                      Correct answer is option:{" "}
                      <span> {item?.quizinfo[0]?.correctanswer}</span>
                    </h2>
                  </div>
                ))
              : "No Quizes Available"}

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
                      {" "}
                      <div className="main-modal-msg my-2">
                        <h4 className="section-heading fw-800">
                          Add New Question
                        </h4>
                      </div>
                      {inputfields?.map((inputfield, index) => (
                        <>
                          <div className="inp-wrap sec-inp-wrap mb-3">
                            <label
                              htmlFor="add_ques"
                              className="primFont fw-600"
                            >
                              Question
                            </label>
                            <textarea
                              name="quizquestion"
                              value={inputfield.quizquestion}
                              onChange={(e) => handlechangeinput(index, e)}
                              id="add_ques"
                              rows={5}
                              className="w-100 m-0"
                              placeholder="Enter Question"
                              defaultValue={""}
                            />
                            <label
                              htmlFor="add_ques"
                              className="primFont fw-600"
                            >
                              Passing Marks
                            </label>
                            <div className="inp-wrap sec-inp-wrap w-50 w_100">
                              <input
                                value={passingmarks}
                                onChange={(e) =>
                                  setpassingmakrs(e.target.value)
                                }
                                id="course_name"
                                type="number"
                                placeholder="Enter Option A"
                                className="auth-input passInput"
                              />
                            </div>
                          </div>

                          <label className="radioWrap my-1 mb-3">
                            <input
                              type="radio"
                              className="radio_input"
                              defaultValue="Option A"
                              name="correctanswer"
                              value={inputfield.correctanswer}
                              onChange={(event) =>
                                handlechangeinput(index, event, 1)
                              }
                            />
                            <span className="radioCheckmark" />
                            <div className="inp-wrap sec-inp-wrap w-50 w_100">
                              <input
                                id="course_name"
                                name="quizoption1"
                                value={inputfield.quizoption1}
                                onChange={(e) => {
                                  handlechangeinput(index, e);
                                }}
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
                              name="correctanswer"
                              value={inputfield.correctanswer}
                              onChange={(event) =>
                                handlechangeinput(index, event, 2)
                              }
                              defaultValue="Option B"
                            />
                            <span className="radioCheckmark" />
                            <div className="inp-wrap sec-inp-wrap w-50 w_100">
                              <input
                                id="course_name"
                                type="text"
                                value={inputfield.quizoption2}
                                onChange={(e) => {
                                  handlechangeinput(index, e);
                                }}
                                name="quizoption2"
                                placeholder="Enter Option B"
                                className="auth-input passInput"
                              />
                            </div>
                          </label>
                          <label className="radioWrap my-1 mb-3">
                            <input
                              type="radio"
                              name="correctanswer"
                              value={inputfield.correctanswer}
                              onChange={(event) =>
                                handlechangeinput(index, event, 3)
                              }
                              className="radio_input"
                              defaultValue="Option C"
                            />
                            <span className="radioCheckmark" />
                            <div className="inp-wrap sec-inp-wrap w-50 w_100">
                              <input
                                id="course_name"
                                name="quizoption3"
                                value={inputfield.quizoption3}
                                onChange={(e) => {
                                  handlechangeinput(index, e);
                                }}
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
                              name="correctanswer"
                              value={inputfield.correctanswer}
                              onChange={(event) =>
                                handlechangeinput(index, event, 4)
                              }
                            />
                            <span className="radioCheckmark" />
                            <div className="inp-wrap sec-inp-wrap w-50 w_100">
                              <input
                                id="course_name"
                                name="quizoption4"
                                value={inputfield.quizoption4}
                                onChange={(e) => {
                                  handlechangeinput(index, e);
                                }}
                                type="text"
                                placeholder="Enter Option D"
                                className="auth-input passInput"
                              />
                            </div>
                          </label>
                          <div>
                            <div className="inp-wrap sec-inp-wrap mb-3">
                              <label
                                htmlFor="add_ques"
                                className="primFont fw-600"
                              >
                                Total Marks
                              </label>
                              <input
                                value={totalmarks}
                                onChange={(e) => settotalmarks(e.target.value)}
                                id="course_name"
                                type="number"
                                placeholder="Enter Question Marks"
                                className="auth-input passInput"
                              />
                            </div>
                            <p className="primFont fw-400 cBlack ms-md-5">
                              <i>Note: Select the Correct Answer</i>
                            </p>
                          </div>
                        </>
                      ))}
                      {/* Options */}
                      <div className="modal-footer justify-content-start">
                        <button
                          className="prim-btn cmsbtnPrim my-1"
                          type="button"
                          data-bs-dismiss="modal"
                          onClick={(e) => {
                            dispatch(
                              addQuiz(
                                formData,
                                searchString,
                                status,
                                from,
                                to,
                                page,
                                perPage,
                                history
                              )
                            );
                          }}
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
