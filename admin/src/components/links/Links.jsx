import { Link } from "react-router-dom"
import './Links.css'
function Links() {
  return (
    <div className='links'>
        <Link to="/"><i className="bi bi-house-door"></i> Home</Link>
        <Link to="/menus"><i className="bi bi-list"></i> Menu</Link>
        <Link to="/add-product"><i className="bi bi-plus-circle"></i> add Products</Link>
        <Link to="/orders"><i className="bi bi-cart"></i> Orders</Link>
        <Link to="/categories"><i className="bi bi-tags"></i> Categories</Link>
        <Link to="/customers"><i className="bi bi-people"></i> Customers</Link>
        <Link to="/logout"><i className="bi bi-box-arrow-right"></i> Logout</Link>
    </div>
  )
}

export default Links