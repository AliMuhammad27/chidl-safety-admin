import Swal from "sweetalert2";

const Success = (message, heading, iconHtml) =>
  Swal.fire({
    // iconHtml: '<img src="images/question.png" class="img-fluid">',
    // iconHtml: `${
    //   iconHtml ? iconHtml : '<img src="images/question.png" class="img-fluid">'
    // }`,
    title: `${heading ? heading : "Completed"}`,
    text: `${message ? message : "Completed"}`,
    showCloseButton: true,
    cancelButtonText: "Ok",
    customClass: {
      cancelButton: "px-3 py-1 site-btn mr-sm-1 mt-1",
    },
    background: "#fff",
    color: "black",
    width: 595,
    heightAuto: true,
  });

export default Success;
