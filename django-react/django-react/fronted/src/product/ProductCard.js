import React from 'react';
import './ProductCard.css';

const products = [
    {
      image: 'https://example.com/image1.jpg', // replace with your image URLs
      title: 'Product Name',
      description: 'Brief product description goes here.',
      price: '$49.99'
    },
    {
      image: 'https://example.com/image2.jpg',
      title: 'Product Name',
      description: 'Brief product description goes here.',
      price: '$49.99'
    },
    {
      image: 'https://example.com/image3.jpg',
      title: 'Product Name',
      description: 'Brief product description goes here.',
      price: '$49.99'
    },
    {
      image: 'https://example.com/image4.jpg',
      title: 'Product Name',
      description: 'Brief product description goes here.',
      price: '$49.99'
    },
  ];

const ProductCard = ({ image, title, description, price }) => {
  return (

    
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="product-bottom">
          <span className="product-price">{price}</span>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
