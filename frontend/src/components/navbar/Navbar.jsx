import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Navbar({ isLoggedIn, logout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
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

            <Link to="/cart"><i className="bi bi-cart-check-fill" ></i></Link>

            <i className="bi bi-person-circle" onClick={handleLogout}></i>

           </div>
          </div>
        ) : (
          <div className="logoutlink">
            <button style={{marginRight: "30px"}}>
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
