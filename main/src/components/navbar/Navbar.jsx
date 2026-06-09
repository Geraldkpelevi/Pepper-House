import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar({ isLoggedIn, logout }) {
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setProfileOpen(false);
    logout();
    navigate("/");
  };

  const toggleProfileMenu = () => {
    setProfileOpen((prev) => !prev);
  };

  const closeProfileMenu = () => {
    setProfileOpen(false);
  };
  return (
    <div className="nav-container shadow sticky-top">
      <nav className="nav-bar">
        <div className="brandName">
          <img
            src="https://th.bing.com/th/id/R.764d3c2b31f4d02cbdcf91c6aca3ea89?rik=ICG5P7dkkozoQA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fPepper.png&ehk=%2bmsLiD7vFrSz%2fWvD4dTPHlc0Bh80UND07feiXbGqIr8%3d&risl=&pid=ImgRaw&r=0"
            alt="Pepper House Logo"
            width={65}
            height={65}
          />

          <h1 className="">Pepper House </h1>
        </div>
        {isLoggedIn ? (
          <div className="logoutlink">
            <Link to="/home">Home</Link>

            <Link to="/menu">Menu</Link>

            <Link to="/download">Download</Link>

            <Link to="/contact-us">Contact Us</Link>

            <div className="profile-icon">
              <Link to="/cart">
                <i className="bi bi-cart-check-fill"></i>
              </Link>

              <div className="profile-dropdown-container" ref={profileRef}>
                <div className="notification-icon"
                  type="button"
                  className="profile-btn"
                  onClick={toggleProfileMenu}
                >
                  <i className="bi bi-person-circle"></i>
                </div>
                <div
                  className={`profile-dropdown ${profileOpen ? "show" : ""}`}
                >
                  <Link to="/profile" onClick={closeProfileMenu}>
                    <p>Profile</p>
                  </Link>
                  <button
                    style={{ color: "red" }}
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="logoutlink">
            <button style={{ marginRight: "30px" }}>
              <Link to="/sign-in">Sign In</Link>
            </button>

            <button>
              <Link to="/sign-up">Sign Up</Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
