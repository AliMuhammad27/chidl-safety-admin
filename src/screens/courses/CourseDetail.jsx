import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourseDetails } from "redux/action/course";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl, baseURL } from "util/api";
const CourseDetail = ({ match }) => {
  const courseInfo = useSelector((state) => state?.course?.course?.course);
  console.log("courseInfo", courseInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Getting Service Details");
    dispatch(getCourseDetails(match.params.id));
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
                to="/courses"
              />
              <h1 className="page-title fw-800 primFont mb-0">
                Course Details
              </h1>
            </div>
            <div className="box my-4">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-xxl-4 col-lg-6">
                      <div className="serviceimgWrap mb-3">
                        <img
                          src={`${imageUrl}${courseInfo?.courseImage}`}
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-8  col-lg-6 text-end">
                      <Link
                        to="/edit-course/:id"
                        className="prim-btn cmsbtnPrim mb-2"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-10">
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Course Name
                    </label>
                    <p>{courseInfo?.courseName}</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      About Course
                    </label>
                    <p>{courseInfo?.aboutCourse}</p>
                  </div>
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      Amount
                    </label>
                    <p>$ {courseInfo?.amount}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box my-4">
              <h4 className="heading-sm fw-800 primFont mb-3">Content</h4>
              <div className="row">
                <div className="col-xl-10">
                  <div className="primContentWrap mb-2 d-xl-flex">
                    <label htmlFor className="mb-1">
                      {courseInfo.content[0].contentName}
                    </label>
                    <div>
                      <p>{courseInfo.content[0].contentDescription}</p>
                      {courseInfo.content[0].contentFiles.map((item, index) => (
                        <div className="content-wrap mb-2 d-flex flex-wrap align-items-end">
                          <a
                            title="Download"
                            href={`${baseURL}/../${item}`}
                            className="primColor fw-400"
                            download="file"
                          >
                            <img
                              src="images/file.png"
                              className="me-3"
                              alt="file"
                            />
                          </a>
                        </div>
                      ))}
                    </div>
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

export default CourseDetail;
