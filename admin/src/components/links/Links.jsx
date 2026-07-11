import { Link, useLocation } from "react-router-dom";
import "./Links.css";

function Links() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="links">
      <Link to="/" className={isActive("/") ? "active" : ""}>
        <i className="bi bi-house-door"></i> Home
      </Link>
      <Link to="/menus" className={isActive("/menus") ? "active" : ""}>
        <i className="bi bi-list"></i> Menu
      </Link>
      <Link
        to="/add-product"
        className={isActive("/add-product") ? "active" : ""}
      >
        <i className="bi bi-plus-circle"></i> add Products
      </Link>
      <Link to="/orders" className={isActive("/orders") ? "active" : ""}>
        <i className="bi bi-cart"></i> Orders
      </Link>
      <Link
        to="/categories"
        className={isActive("/categories") ? "active" : ""}
      >
        <i className="bi bi-tags"></i> Categories
      </Link>
      <Link to="/customers" className={isActive("/customers") ? "active" : ""}>
        <i className="bi bi-people"></i> Customers
      </Link>
      <Link to="/logout" className={isActive("/logout") ? "active" : ""}>
        <i className="bi bi-box-arrow-right"></i> Logout
      </Link>
    </div>
  );
}

export default Links;
