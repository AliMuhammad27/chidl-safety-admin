import React, { useState, useEffect } from "react";
import { getCourseDetails } from "redux/action/course";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toasty from "util/toast";
import ImageSelector from "components/ImageSelector";
import ImageSelectDropzone from "components/ImageSelectDropzone";
import { baseURL } from "util/api";
const EditCourse = ({ match }) => {
  const courseInfo = useSelector((state) => state?.course?.course?.course);
  const dispatch = useDispatch();
  console.log("courseInfo", courseInfo);
  useEffect(() => {
    console.log("Running");
    dispatch(getCourseDetails(match.params.id));
  }, [match.params.id]);
  const [courseName, setcoursename] = useState("");
  const [aboutCourse, setaboutcourse] = useState("");
  const [amount, setamount] = useState("");
  const [image, setimage] = useState("");
  const [is_edit, setisedit] = useState(true);
  const [contentName, setcontentName] = useState("");
  const [contentDescription, setcontentdescription] = useState("");
  const [productImage, setProductImage] = useState([]);
  const [contentfiles, setcontentfiles] = useState([]);
  const [data, setData] = useState({
    project_images: [],
  });
  const { project_images } = data;
  const formData = new FormData();
  formData.append("courseName", courseName);
  formData.append("aboutCourse", aboutCourse);
  formData.append("amount", amount);
  formData.append("contentName", contentName);
  formData.append("reciepts", image);
  formData.append("contentDescription", contentDescription);
  console.log("project images", project_images);
  project_images.forEach((reciept) => formData.append("contentFiles", reciept));
  console.log("FormData", formData);
  useEffect(() => {
    if (courseInfo) {
      setcoursename(courseInfo?.courseName);
      setaboutcourse(courseInfo?.aboutCourse);
      setamount(courseInfo?.amount);
      setimage(courseInfo?.courseImage);
      setcontentName(courseInfo?.content[0]?.contentName);
      setcontentdescription(courseInfo?.content[0]?.contentDescription);
      setcontentfiles(courseInfo?.content[0]?.contentFiles);
    }
  }, [courseInfo]);
  const handlefileRemove = (index) => {
    const list = [...contentfiles];
    console.log("Running");
    list.splice(index, 1);
    setcontentfiles(list);
  };
  console.log("Testing", contentfiles);
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
              <h1 className="page-title fw-800 primFont mb-0">Edit Course</h1>
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
                    <div className="inp-wrap sec-inp-wrap mb-3  w-50 w_100">
                      <label
                        htmlFor="course_name"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Course Name<span className="text-danger">*</span>
                      </label>
                      <input
                        id="course_name"
                        type="text"
                        value={courseName}
                        onChange={(e) => {
                          setcoursename(e.target.value);
                        }}
                        placeholder="Course Name here"
                        defaultValue="Course A"
                        className="auth-input passInput"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3  w-50 w_100">
                      <label
                        htmlFor="num"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Amount <span className="text-danger">*</span>
                      </label>
                      <input
                        id="num"
                        type="number"
                        value={amount}
                        onChange={(e) => {
                          setamount(e.target.value);
                        }}
                        placeholder="Enter Amount"
                        defaultValue={123}
                        className="auth-input passInput ps-4"
                      />
                    </div>
                    <div className="inp-wrap sec-inp-wrap mb-3  w-100">
                      <label
                        htmlFor="text_area"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        About Course <span className="text-danger">*</span>
                      </label>
                      <textarea
                        id="text_area"
                        value={aboutCourse}
                        onChange={(e) => {
                          setaboutcourse(e.target.value);
                        }}
                        rows={5}
                        className="w-100 mx-0"
                        placeholder="ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio."
                        defaultValue={""}
                      />
                    </div>
                    {/* primary Box */}
                    {/* // */}
                    <div className="inp-wrap sec-inp-wrap mb-3  w-100">
                      <label
                        htmlFor="desc1"
                        className="d-block primLable my-2 px-md-3 px-1"
                      >
                        Content<span className="text-danger">*</span>
                      </label>
                      <div className="d-xl-flex">
                        <input
                          id="desc1"
                          type="text"
                          value={contentName}
                          onChange={(e) => {
                            setcontentName(e.target.value);
                          }}
                          placeholder="Enter Component Name"
                          defaultValue="Enter Component Name"
                          className="auth-input passInput w-25 w_100 mb-4"
                        />
                        <input
                          id="desc"
                          type="text"
                          value={contentDescription}
                          onChange={(e) => {
                            setcontentdescription(e.target.value);
                          }}
                          placeholder="Enter Decription"
                          defaultValue="Enter Component Description"
                          className="auth-input passInput w-75 w_100 mb-4"
                        />
                      </div>
                    </div>
                    {/* primary Box */}
                    <div className="box my-4">
                      <div className="row">
                        <div className="col-xl-10">
                          <div className="primContentWrap mb-2 d-xl-flex">
                            <div>
                              {contentfiles?.map((item, index) => (
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
                                  <div className="second-division">
                                    {contentfiles.length !== 0 && (
                                      <button
                                        type="button"
                                        onClick={() => handlefileRemove(index)}
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="upload_div mb-5">
                      <ImageSelectDropzone
                        max={5}
                        setproductimage={setProductImage}
                        files={data?.project_images}
                        setFiles={(project_images) =>
                          setData({ ...data, project_images })
                        }
                        accept="image/*,application/pdf,.doc,.docx,.xls,.xlsx,.csv,.tsv,.ppt,.pptx,.pages,.odt,.rtf"
                      />
                    </div>
                    {/* // */}
                    <button className="prim-btn cmsbtnPrim">Update</button>
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

export default EditCourse;
