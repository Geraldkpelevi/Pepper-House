import axios from "axios";
import { toast } from "react-toastify";
const URL = "http://localhost:3000/api/users/signin";

export function SignInService(userData, navigate, login) {
  axios
    .post(URL, userData)
    .then((response) => {
      // console.log("SignIn response status:", response.status, response.data);

      if (response.status === 200) {
        toast.success(response.data.message, { autoClose: 150 });
        login();
        navigate("/home");
      } else {
        console.error("Unexpected response status:", response.status);
      }
    })
    .catch((error) => {
      toast.error(error.response?.data || error.message, { autoClose: 300 });
      console.error("Error signing in:", error.response?.data || error.message);
    });
}
