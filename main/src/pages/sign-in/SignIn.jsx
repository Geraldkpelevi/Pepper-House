import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignInService } from "./SignInService.js";

function SignIn({login}) {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (userData) => {
  SignInService(userData, navigate, login);
  reset();
};

  return (
    <>
    <div className="container p-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4" style={{color:"tomato"}}>Sign In</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    {...register("username", { required: "Username is required" })}
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    {...register("password", { required: "password is required" })} 
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className=" d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-center">
                    Don't have an account?{" "}
                    <Link to="/sign-up">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignIn;
