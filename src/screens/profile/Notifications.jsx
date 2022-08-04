import React from "react";

const Notifications = () => {
  return (
    <div className="app-content content dashboard">
      <div className="content-wrapper">
        <div className="content-body">
          {/* Basic form layout section start */}
          <section id="configuration">
            <h1 className="page-title fw-800 primFont my-3 mb-5">
              Notifications
            </h1>
            <div className="box">
              <div className="row my-2">
                <div className="col-12">
                  <div className="d-lg-flex border-bottom notif_box mb-4">
                    <div className="notif-icon me-lg-3">
                      <i className="fas fa-circle " />
                    </div>
                    <div className="w-100">
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin tis gravida dolor
                        sit amet is to accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor.
                      </p>
                      <div className="text-start">
                        <h6 className="notifTime">May 25, 2021 10:30 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-flex border-bottom notif_box mb-4">
                    <div className="notif-icon me-lg-3">
                      <i className="fas fa-circle " />
                    </div>
                    <div className="w-100">
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin tis gravida dolor
                        sit amet is to accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor.
                      </p>
                      <div className="text-start">
                        <h6 className="notifTime">May 25, 2021 10:30 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-flex border-bottom notif_box mb-4">
                    <div className="notif-icon me-lg-3">
                      <i className="fas fa-circle " />
                    </div>
                    <div className="w-100">
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin tis gravida dolor
                        sit amet is to accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor.
                      </p>
                      <div className="text-start">
                        <h6 className="notifTime">May 25, 2021 10:30 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-flex unread_notification border-bottom notif_box mb-4">
                    <div className="notif-icon me-lg-3">
                      <i className="fas fa-circle " />
                    </div>
                    <div className="w-100">
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin tis gravida dolor
                        sit amet is to accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor.
                      </p>
                      <div className="text-start">
                        <h6 className="notifTime">May 25, 2021 10:30 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-flex border-bottom notif_box mb-4">
                    <div className="notif-icon me-lg-3">
                      <i className="fas fa-circle " />
                    </div>
                    <div className="w-100">
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin tis gravida dolor
                        sit amet is to accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor.
                      </p>
                      <div className="text-start">
                        <h6 className="notifTime">May 25, 2021 10:30 PM</h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-lg-flex unread_notification border-bottom notif_box mb-4">
                    <div className="notif-icon me-lg-3">
                      <i className="fas fa-circle " />
                    </div>
                    <div className="w-100">
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet. Proin tis gravida dolor
                        sit amet is to accumsan et viverra justo commodo. Proin
                        sodales pulvinar tempor.
                      </p>
                      <div className="text-start">
                        <h6 className="notifTime">May 25, 2021 10:30 PM</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                            30
                          </a>{" "}
                        </li>
                        <li className="paginate_button page-item">
                          {" "}
                          <a href="#" className="page-link">
                            04
                          </a>{" "}
                        </li>
                        <li
                          className="paginate_button page-item next disabled "
                          i
                        >
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
