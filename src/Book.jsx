import React, { useState } from 'react';
import './Book.css'; 

const Book = ({ image, price, url, onRemove }) => {

  const handleClick = () => {
    setSelected(!selected); // Toggle highlight
  };

  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`book ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div className="book-top">
        <button onClick={onRemove} className="remove-button">
          <span>Remove</span>
        </button>
        <img src={image} alt="book-cover" className="book-cover" />
      </div>

      <div className="book-info">
        <p className="price">{price}</p>
        <a
          href={url}
          className="learn-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Book;
