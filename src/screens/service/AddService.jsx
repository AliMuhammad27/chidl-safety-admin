import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const AddService = () => {
  const [serviceName, setservicename] = useState("");
  const [about, setabout] = useState("");
  const [amount, setamount] = useState("");
  const [scheduledata, setscheduledate] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [image, setimage] = useState("");
  const [is_edit, setisedit] = useState(true);
  const dispatch = useDispatch();

  const inputArr = [
    {
      type: "date",
      id: 1,
      value: "",
    },
    {
      type: "time",
      id: 2,
      value: "",
    },
    {
      type: "time",
      id: 3,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "date",
          value: "",
        },
        {
          type: "time",
          value: "",
        },
        {
          type: "time",
          value: "",
        },
      ];
    });
  };

  const handleChange = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <div className="d-flex align-items-center my-3">
              <Link
                className="fas fa-arrow-left me-3 go-back-icon"
                to="/services"
              />
              <h1 className="page-title fw-800 primFont mb-0">Add Service</h1>
            </div>
            <div className="box">
              <form action="#">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="upload_div mb-5"
                      onclick="document.getElementById('uploadImg').click()"
                    >
                      <div className="upload_div_content">
                        <i className="fas fa-upload primColor" />
                        <p>
                          Upload Service Image
                          <br /> OR <br />
                          Drag an Image to Upload
                        </p>
                      </div>
                      <img
                        src="../../images/storeImg.png"
                        alt="image"
                        className="img-fluid"
                        onclick="document.getElementById('upload-store-img').click()"
                      />
                      <input type="file" className="d-none" id="uploadImg" />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="ser_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Service Name <span className="text-danger">*</span>
                      </label>
                      <input
                        id="ser_name"
                        type="text"
                        placeholder="Service Name"
                        className="auth-input passInput"
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
                          className="auth-input passInput"
                        />
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="availibility"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Availibility<span className="text-danger">*</span>
                      </label>
                      {/* <div className="d-lg-flex">
                        <input className="inputDate my-3" type="date" />
                        <input className="inputDate my-3" type="date" />
                        <input className="inputDate my-3" type="date" />
                      </div> */}
                      {/* <div className="text-end">
                        <button
                          className="notBtn primColor"
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div> */}
                      <div>
                        <button
                          className="notBtn primColor"
                          onClick={(e) => {
                            e.preventDefault();
                            addInput();
                          }}
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        {arr.map((item, i) => {
                          return (
                            <div className="d-lg-flex">
                              <input
                                className="inputDate my-3"
                                onChange={handleChange}
                                value={item.value}
                                id={i}
                                type={item.type}
                                size="40"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3">
                      <label
                        htmlFor="text_area"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Service Name <span className="text-danger">*</span>
                      </label>
                      <textarea
                        name
                        id="text_area"
                        rows={5}
                        className="w-100"
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                    </div>
                    <button className="prim-btn cmsbtnPrim">Add</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddService;
