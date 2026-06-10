import "./AddItem.css";

function AddItem() {
  return (
    <div className="update-product-container">
      <div className="update-product-card">
        <h2>Update Product</h2>

        <p className="subtitle">
          Refresh product details with updated price, rating,
          description, or a new image.
        </p>

        <form className="update-product-form">
          {/* Product Name */}
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="e.g. Tomato Basil Sauce"
            />
          </div>

          {/* Price & Rating */}
          <div className="row">
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                placeholder="0.00"
              />
            </div>

            <div className="form-group">
              <label>Rating</label>
              <input
                type="number"
                step="0.1"
                placeholder="4.5"
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="7"
              placeholder="Update the product description with the latest details..."
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label>Product Image</label>

            <div className="upload-box">
              <input type="file" />
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button
              type="button"
              className="cancel-btn"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="update-btn"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;