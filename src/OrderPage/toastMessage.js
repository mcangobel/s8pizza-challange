import { toast } from "react-toastify"

export const showErrorToast = (message = "Bir hata oluştu!") => {
  toast.error(message, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored"
  })
}