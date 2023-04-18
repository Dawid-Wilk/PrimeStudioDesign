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
          src="./images/01.jpg"
          alt="First"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/02.jpg"
          alt="Second"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/03.jpg"
          alt="Third"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/04.jpg"
          alt="Third"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/05.jpg"
          alt="Third"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/06.jpg"
          alt="Third"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/07.jpg"
          alt="Third"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/08.jpg"
          alt="Third"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
