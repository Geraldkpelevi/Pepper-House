import axios from "axios";
import { toast } from "react-toastify";

const URL = "http://localhost:3000/api/users/signup";

export function SignUpService(userData, navigate) {
  axios
    .post(URL, userData)
    .then((response) => {
      console.log("User signed up successfully:", response.data);

      if (response.status === 200) {
        toast.success(response.data.message, { autoClose: 300 });
        navigate("/sign-in");
      }else {
        console.error("Unexpected response status:", response.status);
      }
    })
    .catch((error) => {
      toast.error(error.response?.data || error.message, { autoClose: 300 });
      console.error(
        "Error signing up:",
        error.response?.data || error.message
      );
    });
}