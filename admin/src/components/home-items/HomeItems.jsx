
import { Link } from "react-router-dom";
import "./HomeItems.css";
function HomeItems() {
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
          <Link to="/add-item"><h3>
            <i className="bi bi-plus-circle"></i> Add Items
          </h3></Link>
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
            <tr>
              <td>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/047/140/114/large_2x/a-hamburger-with-cheese-lettuce-tomato-and-ketchup-free-photo.jpg"
                  alt="Food"
                  width={40}
                  height={40}
                />
              </td>
              <td>Food Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/047/140/114/large_2x/a-hamburger-with-cheese-lettuce-tomato-and-ketchup-free-photo.jpg"
                  alt="Food"
                  width={40}
                  height={40}
                />
              </td>
              <td>Food Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/047/140/114/large_2x/a-hamburger-with-cheese-lettuce-tomato-and-ketchup-free-photo.jpg"
                  alt="Food"
                  width={40}
                  height={40}
                />
              </td>
              <td>Food Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/047/140/114/large_2x/a-hamburger-with-cheese-lettuce-tomato-and-ketchup-free-photo.jpg"
                  alt="Food"
                  width={40}
                  height={40}
                />
              </td>
              <td>Food Name</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default HomeItems;
