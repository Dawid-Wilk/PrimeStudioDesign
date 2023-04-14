import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Slider = () => {
  return (
    <Carousel className='carousela' pause={false} interval={2500} fade={false}>
      {/* Slajdy */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/gory.jpeg"
          alt="First"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/plaza.jpeg"
          alt="Second"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/wulkan.jpeg"
          alt="Third"
        />
      </Carousel.Item>
      {/* Dodaj kolejne slajdy tutaj */}
    </Carousel>
  );
}

export default Slider;
