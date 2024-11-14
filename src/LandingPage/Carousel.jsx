import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-full max-h-96 object-cover"
          src="/assets/mainimg.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full max-h-96 object-cover"
          src="/assets/mainimg.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full max-h-96 object-cover"
          src="/assets/cycle.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BootstrapCarousel;
