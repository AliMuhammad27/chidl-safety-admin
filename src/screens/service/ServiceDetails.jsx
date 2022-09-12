import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServiceDetails } from "redux/action/service";
import { Link } from "react-router-dom";
import { imageUrl } from "util/api";
import moment from "moment";
function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
}
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const ServiceDetails = ({ match }) => {
  const serviceInfo = useSelector((state) => state?.service?.service?.service);
  console.log("serviceInfo", serviceInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Getting Service Details");
    dispatch(getServiceDetails(match.params.id));
  }, [match.params.id]);
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
              <h1 className="page-title fw-800 primFont mb-0">
                Service Details
              </h1>
            </div>
            <div className="box">
              <div className="row">
                <div className="col-xxl-8">
                  <div className="d-lg-flex mb-3">
                    <div className="serviceimgWrap mb-3">
                      <img
                        src={`${imageUrl}${serviceInfo?.serviceImage}`}
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div className="mb-2">
                      <Link
                        to={`/edit-service/${match.params.id}`}
                        className="prim-btn cmsbtnSec mx-3"
                      >
                        <i className="fas fa-pen pe-2" />
                        Edit
                      </Link>
                    </div>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Service Name
                    </label>
                    <p>{serviceInfo?.serviceName}</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Amount
                    </label>
                    <p>$ {serviceInfo?.amount}</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      About Service
                    </label>
                    <p>{serviceInfo?.about}</p>
                  </div>
                </div>
                <div className="col-xxl-4">
                  <div className="box">
                    <h4 className="heading-sm fw-800 primFont text-center mb-3">
                      Availibility
                    </h4>
                    {serviceInfo?.availability?.map((item, index) => (
                      <div className="d-xxl-flex">
                        <label
                          htmlFor
                          className="flex-shrink-0 flex-grow-1 primColor"
                        >
                          {
                            weekday[
                              new Date(
                                moment(item?.scheduleDate).format("ll")
                              ).getDay()
                            ]
                          }
                        </label>
                        <p>
                          {" "}
                          <span>{tConvert(item?.startTime)}</span>{" "}
                          <span className="mx-4">-</span>{" "}
                          <span>{tConvert(item?.endTime)}</span>{" "}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
