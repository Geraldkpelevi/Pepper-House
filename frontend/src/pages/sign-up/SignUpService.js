import axios from "axios";

const URL = "http://localhost:3000/api/users/signup";

export function SignUpService(userData, navigate) {
  axios
    .post(URL, userData)
    .then((response) => {
      console.log("User signed up successfully:", response.data);

      if (response.status === 200) {
        navigate("/sign-in");
      }else {
        console.error("Unexpected response status:", response.status);
      }
    })
    .catch((error) => {
      console.error(
        "Error signing up:",
        error.response?.data || error.message
      );
    });
}