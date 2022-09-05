import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import ImageSelector from "components/ImageSelector";
import { addService } from "redux/action/service";
const AddService = ({ history }) => {
  const [serviceName, setservicename] = useState("");
  const [about, setabout] = useState("");
  const [amount, setamount] = useState("");
  const [is_edit, setisedit] = useState(true);
  const [image, setimage] = useState("");
  const [availability, setavailability] = useState([
    { scheduleDate: "", startTime: "", endTime: "" },
  ]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchParam, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [sort, setsort] = useState();
  const dispatch = useDispatch();
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...availability];
    list[index][name] = value;
    setavailability(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...availability];
    list.splice(index, 1);
    setavailability(list);
  };

  const handleServiceAdd = () => {
    setavailability([
      ...availability,
      { scheduleDate: "", startTime: "", endTime: "" },
    ]);
  };
  const formData = new FormData();
  formData.append("serviceName", serviceName);
  formData.append("about", about);
  formData.append("amount", amount);
  formData.append("reciepts", image);
  formData.append("availability", JSON.stringify(availability));
  console.log("Availability", availability);
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
                    <ImageSelector
                      image={image}
                      setImage={setimage}
                      is_edit={is_edit}
                    />
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
                        value={serviceName}
                        placeholder="Service Name"
                        className="auth-input passInput"
                        onChange={(e) => {
                          setservicename(e.target.value);
                        }}
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
                          value={amount}
                          placeholder="Enter Amount"
                          onChange={(e) => {
                            setamount(e.target.value);
                          }}
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
                        <form className="App" autoComplete="off">
                          <div className="form-field">
                            {availability.map((singleService, index) => (
                              <div key={index} className="services">
                                <div className="first-division">
                                  <input
                                    name="scheduleDate"
                                    type="date"
                                    id="scheduleDate"
                                    value={singleService.scheduleDate}
                                    onChange={(e) =>
                                      handleServiceChange(e, index)
                                    }
                                    required
                                  />
                                  <input
                                    name="startTime"
                                    type="time"
                                    id="startTime"
                                    value={singleService.startTime}
                                    onChange={(e) =>
                                      handleServiceChange(e, index)
                                    }
                                    required
                                  />
                                  <input
                                    name="endTime"
                                    type="time"
                                    id="endTime"
                                    value={singleService.endTime}
                                    onChange={(e) =>
                                      handleServiceChange(e, index)
                                    }
                                    required
                                  />
                                  {availability.length - 1 === index &&
                                    availability.length < 4 && (
                                      <button
                                        type="button"
                                        onClick={handleServiceAdd}
                                        className="add-btn"
                                      >
                                        <i
                                          class="fa fa-plus"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    )}
                                </div>
                                <div className="second-division">
                                  {availability.length !== 1 && (
                                    <button
                                      type="button"
                                      onClick={() => handleServiceRemove(index)}
                                      className="remove-btn"
                                    >
                                      <i
                                        class="fa fa-trash"
                                        aria-hidden="true"
                                      ></i>
                                    </button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* <div className="output">
                            <h2>Output</h2>
                            {availability &&
                              availability.map((singleService, index) => (
                                <ul key={index}>
                                  {singleService.service && (
                                    <li>{singleService.service}</li>
                                  )}
                                </ul>
                              ))}
                          </div> */}
                        </form>
                        {/* <button className="notBtn primColor">
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </button> */}
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
                        value={about}
                        onChange={(e) => {
                          setabout(e.target.value);
                        }}
                        rows={5}
                        className="w-100"
                        placeholder="Enter Description"
                        defaultValue={""}
                      />
                    </div>
                    <button
                      className="prim-btn cmsbtnPrim"
                      onClick={(e) => {
                        dispatch(
                          addService(
                            formData,
                            searchParam,
                            from,
                            to,
                            sort,
                            page,
                            perPage,
                            history
                          )
                        );
                        e.preventDefault();
                      }}
                    >
                      Add
                    </button>
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
