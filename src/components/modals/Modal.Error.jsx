import Swal from "sweetalert2";

export default function Error(err) {
  return Swal.fire({
    icon: "error",
    title: "ERROR",
    text: err ? err : "Internal Server Error",
    showConfirmButton: false,
    timer: 3000,
    background: "#2B3047",
    color: "white",
    width: 595,
  });
}
