import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Profile({logout}) {

  const navigate = useNavigate();

   const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

        {/* Header */}
        <div style={{backgroundColor:"tomato"}} className=" text-white p-4 d-flex align-items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="rounded-circle border"
            width="90"
            height="90"
          />

          <div>
            <h3 className="mb-1">Welcome, John Doe 👋</h3>
            <p className="mb-0 text-light">
              Manage your personal information and account settings
            </p>
          </div>
        </div>

        <div className="row g-0">

          {/* Sidebar */}
          <div className="col-md-3 border-end bg-light p-4">

            <h5 className="mb-4">Account</h5>

            <div className="d-flex flex-column gap-3">

              <Link
                to="/edit-profile"
                className="btn btn-outline-dark text-start"
              >
                Edit Profile
              </Link>

              <Link
                to="/order-history"
                className="btn btn-outline-dark text-start"
              >
                Order History
              </Link>
              <Link
                to="/favorites"
                className="btn btn-outline-dark text-start"
              >
                Payments
              </Link>
              <Link
                to="/settings"
                className="btn btn-outline-dark text-start"
              >
                Settings
              </Link>

              <button
                className="btn btn-danger text-start"
                onClick={handleLogout}
              >
                Logout
              </button>
                

            </div>
          </div>

          {/* Profile Details */}
          <div className="col-md-9 p-4">

            <h4 className="mb-4">Profile Information</h4>

            <div className="row g-4">

              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-3">
                  <small className="text-muted">Full Name</small>
                  <h6 className="mb-0">John Doe</h6>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-3">
                  <small className="text-muted">Email</small>
                  <h6 className="mb-0">
                    johndoe@gmail.com
                  </h6>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-3">
                  <small className="text-muted">Phone</small>
                  <h6 className="mb-0">
                    +965 1234 5678
                  </h6>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 shadow-sm p-3">
                  <small className="text-muted">Address</small>
                  <h6 className="mb-0">
                    Kuwait City, Kuwait
                  </h6>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;