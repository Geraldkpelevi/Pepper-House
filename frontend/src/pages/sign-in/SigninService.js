import axios from "axios";

const URL = "http://localhost:3000/api/users/signin";

export function SignInService(userData, navigate, login) {
  axios
    .post(URL, userData)
    .then((response) => {
      // console.log("SignIn response status:", response.status, response.data);

      if (response.status === 200) {
        login();
        navigate("/home");
      } else {
        console.error("Unexpected response status:", response.status);
      }
    })
    .catch((error) => {
      console.error("Error signing in:", error.response?.data || error.message);
    });
}
