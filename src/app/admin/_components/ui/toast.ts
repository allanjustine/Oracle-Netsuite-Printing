import { Bounce, toast } from "react-toastify";

export function Toast(
  msg: any,
  type: "success" | "error" | "info" | "warn" | "warning"
) {
  toast[type](msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
}
