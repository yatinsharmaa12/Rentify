import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'; 
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'; 
import boxData from '../assets1/BicycleData.json';
import "./item.css"

const BicycleList = () => {

  const [likedBoxes, setLikedBoxes] = useState(new Array(boxData.length).fill(false));
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [index, setIndex] = useState(null);

  const toggleLike = (index) => {
    const updatedLikedBoxes = [...likedBoxes];
    updatedLikedBoxes[index] = !updatedLikedBoxes[index];
    setLikedBoxes(updatedLikedBoxes);
    setIndex(index);
  };

  useEffect(() => {
    if (showMessage) {
      const timeout = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showMessage]);

  useEffect(() => {
    if (showMessage) {
      setMessage(likedBoxes[index] ? 'Item added to your wishlist!' : 'Item removed from your wishlist!');
    }
  }, [likedBoxes, showMessage, index]);

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
        Bicycle on rent
      </h1>
      <h4 className="text">Checkout our huge collection of bicycles on rent</h4>
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
                  onClick={() => {
                    toggleLike(index);
                    setShowMessage(true);
                  }} //Pass index 
                />
              </div>
              <h3 className="item-name">{box.name}</h3>
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

export default BicycleList;
