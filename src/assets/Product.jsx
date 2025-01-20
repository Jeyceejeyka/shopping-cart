import React from 'react';
import '../App.css'


const Product = ({ products, onAddToCart, searchQuery, handleSearch, sortOption, handleSortChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearch}
      />
      <select value={sortOption} onChange={handleSortChange}>
        <option value="name-asc">Sort by Name (A-Z)</option>
        <option value="name-desc">Sort by Name (Z-A)</option>
        <option value="price-asc">Sort by Price (Low to High)</option>
        <option value="price-desc">Sort by Price (High to Low)</option>
      </select>
      <ul className="ul">
        {products.map(product => (
          <li key={product.id} className="li">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
