import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeItems.css";

function HomeItems() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/menusCategories/getAllMenusCategories")
      .then((response) => {
        if (response.data.ok) {
          setMenuItems(response.data.data);
        } else {
          setMenuItems([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching menu categories:", error);
        setMenuItems([]);
      });
  }, []);

  return (
    <div>
      <section className="home-items">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/140/114/large_2x/a-hamburger-with-cheese-lettuce-tomato-and-ketchup-free-photo.jpg"
            alt="Food"
            width={40}
            height={40}
          />
          <h2>Food Items</h2>
        </div>
        <div>
          <Link to="/add-product">
            <h3>
              <i className="bi bi-plus-circle"></i> Add Items
            </h3>
          </Link>
        </div>
      </section>
      <section className="items-list">
        <table className="items-table">
          <thead className="table-header">
            <tr className="">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length > 0 ? (
              menuItems.map((item) => (
                <tr key={item._id || item.menuName}>
                  <td>
                    <img
                      src={
                        item.menuImage ||
                        "https://static.vecteezy.com/system/resources/previews/047/140/114/large_2x/a-hamburger-with-cheese-lettuce-tomato-and-ketchup-free-photo.jpg"
                      }
                      alt={item.menuName || "Food"}
                      width={40}
                      height={40}
                    />
                  </td>
                  <td>{item.menuName || item.name || "—"}</td>
                  <td>{item.price ? `$${item.price}` : "—"}</td>
                  <td>{item.description || "—"}</td>
                  <td>{item.category || item.menuCategory || "—"}</td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="no-items">
                  No menu items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default HomeItems;
