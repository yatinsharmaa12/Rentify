import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'; 
import boxData from '../assets1/FittnessData.json';
import "./item.css";

const FitnessList = () => {
  const [likedBoxes, setLikedBoxes] = useState(new Array(boxData.length).fill(false));
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState(null);

  useEffect(() => {
    fetchLikedBoxes();
  }, []);

  const fetchLikedBoxes = async () => {
    try {
      // Fetch the user's liked items from the backend and update the likedBoxes state
      const response = await axios.get('http://localhost:8080/api/wishlist');
      const likedItems = response.data.map(item => item.title);
      setLikedBoxes(likedBoxes.map((box, index) => likedItems.includes(boxData[index].title)));
    } catch (error) {
      console.error('Error fetching liked items:', error);
    }
  };

  const toggleLike = async (box, index) => {
    const updatedLikedBoxes = [...likedBoxes];
    const isLiked = updatedLikedBoxes[index];
    updatedLikedBoxes[index] = !isLiked;
    setLikedBoxes(updatedLikedBoxes);
    setIndex(index);

    try {
      if (!isLiked) {
        await axios.post('http://localhost:8080/api/wishlist/add', box);
        setMessage('Item added to your wishlist!');
      } else {
        const wishlist = await axios.get('http://localhost:8080/api/wishlist');
        const item = wishlist.data.find((item) => item.title === box.title);
        if (item) {
          await axios.delete(`http://localhost:8080/api/wishlist/remove/${item.id}`);
          setMessage('Item removed from your wishlist!');
        }
      }
      setShowMessage(true);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showMessage]);

  return (
    <div>
      <h1 className="heading">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6000/6000363.png"
          className="phone"
          width="65px"
          height="50px"
          alt="phone"
        />
        Fitness on rent
      </h1>
      <h4 className="text">Checkout our huge collection of fitness on rent</h4>
      <div className="shop-section">
        {boxData.map((box, index) => (
          <div key={index} className={`box${index + 1} box`}>
            <div className="box-content">
              <div className="box-img">
                <img src={box.imageUrl} alt={box.title} className="box-image" />
                
                <button className="view-button">View</button>
               
                <FontAwesomeIcon
                  icon={likedBoxes[index] ? faSolidHeart : faHeart}
                  className="wishlist-icon"
                  style={{ color: likedBoxes[index] ? 'red' : 'black' }}
                  onClick={() => toggleLike(box, index)}
                />
              </div>
              <h3 className="item-name">{box.title}</h3>
              <div>
                <div className="p"><p>{box.price}</p></div>
                <div className="p1"><p><img src="https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg" alt="fast-delivery-icon" /> {box.deliveryTime}</p></div>
              </div>
              
              {showMessage && (
                <div className="message-box">
                  {message}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <h5 className="stock">No more items in stock</h5>
      <div className="out-stock">
       <button >Show items out of stock</button>
       </div>
    </div>
  );
}

export default FitnessList;
