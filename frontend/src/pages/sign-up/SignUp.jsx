import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { SignUpService } from "./SignUpService.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset: resetform,
  } = useForm();

  const onSubmit = (userData) => {
    SignUpService(userData, navigate);
    resetform();
  };

  return (
    <>
    <div className="container p-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    {...register("username", {
                      required: "username is required",
                    })}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                  />
                  {errors.username && (
                    <p className="text-danger">
                      {errors.username && errors.username.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    {...register("email", { required: "email is required" })}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-danger">
                      {errors.email && errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "password is required",
                      minLength: {
                        value: 6,
                        message: "password must be at least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                        message:
                          "password must contain at least one letter and one number",
                      },
                    })}
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <p className="text-danger">
                      {errors.password && errors.password.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    {...register("confirmPassword", {
                      required: "confirm password is required",
                    })}
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-danger">
                      {errors.confirmPassword && errors.confirmPassword.message}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", { required: "phone is required" })}
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-danger">
                      {errors.phone && errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-center">
                    Already have an account? <Link to="/sign-in">Sign In</Link>
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

export default SignUp;
