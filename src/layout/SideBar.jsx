import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { imageUrl } from "util/api";
import { logOut } from "redux/action/auth";
const SideBar = () => {
  const dispatch = useDispatch();
  const adminInfo = useSelector((state) => state.auth?.admin);
  console.log("adminInfo", adminInfo);
  return (
    <div>
      {/* fixed-top*/}
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu fixed-top navbar-light navbar-border">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs"
                  href="#"
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="navbar-brand" href="../dashboard/index.php">
                  {" "}
                  <img
                    className="brand-logo img-fluid"
                    alt="admin logo"
                    src="images/logo.png"
                  />{" "}
                </a>{" "}
              </li>
              <li className="nav-item d-md-none">
                {" "}
                <a
                  className="nav-link open-navbar-container"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbar-mobile"
                >
                  <i className="fa fa-ellipsis-v" />
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav me-auto float-start"></ul>
              <ul className="nav navbar-nav float-end nav-right align-items-center">
                <li>
                  <span className="d-inline-block msgIcon">
                    <i className="fas fa-comment-alt" />
                  </span>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i className="far fa-bell" />{" "}
                    <span className="badge badge-pill badge-default badge-danger badge-default badge-up">
                      5
                    </span>{" "}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right notificationDiv">
                    <li className="dropdown-menu-header d-none">
                      <h6 className="dropdown-header m-0">Notifications</h6>
                    </li>
                    <li className="scrollable-container media-list ps-container ps-theme-dark">
                      <a href="../profile/notifications.php">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="fas fa-circle primColor" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              Lorem ipsum dolor sit amet, consectetur elit.
                              Aenean euismod bibendum laoreet.
                            </h6>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                May 25, 2021 10:30 PM
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="../profile/notifications.php">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="fas fa-circle primColor" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              Lorem ipsum dolor sit amet, consectetur elit.
                              Aenean euismod bibendum laoreet.
                            </h6>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                May 25, 2021 10:30 PM
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="../profile/notifications.php">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="fas fa-circle primColor" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              Lorem ipsum dolor sit amet, consectetur elit.
                              Aenean euismod bibendum laoreet.
                            </h6>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                May 25, 2021 10:30 PM
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                      <a href="../profile/notifications.php">
                        <div className="media d-flex">
                          <div className="media-left flex-shrink-0 align-self-top">
                            <i className="fas fa-circle primColor" />
                          </div>
                          <div className="media-body flex-grow-1">
                            <h6 className="media-heading">
                              Lorem ipsum dolor sit amet, consectetur elit.
                              Aenean euismod bibendum laoreet.
                            </h6>
                            <small>
                              <time
                                className="media-meta"
                                dateTime="2015-06-11T18:29:20+08:00"
                              >
                                May 25, 2021 10:30 PM
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item"
                        href="../profile/notifications.php"
                      >
                        {" "}
                        <u>View All</u>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <span className="avatar avatar-online">
                      {" "}
                      <img
                        src={`${imageUrl}${adminInfo?.userImage}`}
                        alt="avatar"
                      />{" "}
                    </span>
                    <div className="user-details">
                      <div className="userName">
                        {adminInfo?.firstName} {adminInfo?.lastName}
                        <br />
                        <span className="cGray">Admin</span>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right profile-menu">
                    <Link className="dropdown-item" to="/profile">
                      <i className="far fa-user-circle" />
                      View Profile
                    </Link>
                    <button
                      className="dropdown-item"
                      href="#"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="logoutModal"
                      onClick={(e) => {
                        dispatch(logOut());
                      }}
                    >
                      <i className="fa fa-power-off" />
                      Logout
                    </button>
                  </div>
                </li>
                <li className="nav-item mobile-menu d-none d-md-block mr-auto">
                  <a
                    className="nav-link nav-menu-main menu-toggle is-active"
                    href="#"
                  >
                    <i className="ft-menu font-large-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/*menu start here*/}
      <div
        className="main-menu menu-fixed menu-light menu-accordion"
        data-scroll-to-active="true"
      >
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className="nav-item">
              <Link to="/dashboard">
                <i className="fa fa-home" />
                <span className="menu-title" data-i18n>
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users">
                <i className="fas fa-users" />
                <span className="menu-title">Users</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services">
                <i className="fas fa-toolbox" />
                <span className="menu-title" data-i18n>
                  service
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/courses">
                <i className="fas fa-graduation-cap" />
                <span className="menu-title" data-i18n>
                  course
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../quiz/index.php">
                {" "}
                <i className="fas fa-lightbulb" />{" "}
                <span className="menu-title" data-i18n>
                  Quiz
                </span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/products">
                <i className="fas fa-box-open" />
                <span className="menu-title" data-i18n>
                  Product Managment
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="/attribute-management">
                <i className="fab fa-steam-symbol" />
                <span className="menu-title" data-i18n>
                  Attribute Managment
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../orderManagement/index.php">
                <i className="fas fa-clipboard-list" />
                <span className="menu-title" data-i18n>
                  Order Managment
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../payLogs/index.php">
                <i className="fas fa-boxes" />
                <span className="menu-title" data-i18n>
                  Pay Logs
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="/category-management">
                <i className="fas fa-th" />
                <span className="menu-title" data-i18n>
                  Category Management
                </span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/subscription-management">
                <i className="fas fa-thumbs-up" />
                <span className="menu-title" data-i18n>
                  Subscription Management
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <a href="../feedbacks/index.php">
                <i className="fas fa-th-large" />
                <span className="menu-title" data-i18n>
                  Feedbacks
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../cms/index.php">
                <i className="fas fa-th-large" />
                <span className="menu-title" data-i18n>
                  CMS
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*menu end here*/}
    </div>
  );
};
export default SideBar;
