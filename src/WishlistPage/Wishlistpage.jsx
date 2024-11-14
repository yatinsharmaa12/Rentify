import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./Wishlist.css"; // Import CSS file for styling

const WishlistPage = ({ updateLikedBoxes }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/wishlist');
      setWishlist(response.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8080/api/wishlist/remove/${itemId}`);
      setWishlist(wishlist.filter(item => item.id !== itemId));
      updateLikedBoxes(); // callback function to update likedBoxes in ElecItemList
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  };

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">My Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.map((item, index) => (
          <div key={index} className="wishlist-item">
            <div className="wishlist-item-content">
              <div className="wishlist-item-img">
                <img src={item.imageUrl} alt={item.title} className="wishlist-item-image" />
                <FontAwesomeIcon
                  icon={faSolidHeart}
                  className="wishlist-icon"
                  style={{ color: 'red' }}
                  onClick={() => removeFromWishlist(item.id)}
                />
              </div>
              <h3 className="wishlist-item-name">{item.title}</h3>
              <div className="wishlist-item-details">
                <p className="wishlist-item-price">{item.price}</p>
                <p className="wishlist-item-delivery"><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="fast-delivery-icon" /> {item.deliveryTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
