// UpdateProduct.js
import React, { useState } from 'react';

const UpdateProduct = ({ product, onUpdate }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedProduct); // Pass the updated product to the parent component
  };

  return (
    <div className="update-product-form">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Product Title:</label>
          <input
            type="text"
            name="title"
            value={updatedProduct.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Product Price:</label>
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Product Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={updatedProduct.quantity}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
