import { Link } from "react-router-dom";
import { useAddProduct } from "./AddProduct.js";

import "./AddProduct.css";

function AddProduct() {
  const { formData, status, handleChange, handleFileChange, handleSubmit } =
    useAddProduct();

  return (
    <div className="update-product-container">
      <div className="update-product-card">
        <h2>Add Product</h2>

        <p className="subtitle">
          Refresh product details with updated price, rating, description, or a
          new image.
        </p>

        <form className="update-product-form" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="menuName"
              value={formData.menuName}
              onChange={handleChange}
              placeholder="e.g. Tomato Basil Sauce"
            />
          </div>

          {/* Price & Rating */}
          <div className="row">
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
              />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
                placeholder="4.5"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="e.g. Italian, Vegetarian"
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="7"
              value={formData.description}
              onChange={handleChange}
              placeholder="Update the product description with the latest details..."
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label>Product Image</label>

            <div className="upload-box">
              <input type="file" onChange={handleFileChange} />
            </div>
          </div>

          {status && <p className="form-status">{status}</p>}

          {/* Buttons */}
          <div className="button-group">
            <Link to="/">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </Link>

            <button type="submit" className="update-btn">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
