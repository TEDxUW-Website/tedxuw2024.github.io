import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../../images/carosel1.jpg';
import image2 from '../../images/Carousel2.jpg';
import image3 from '../../images/Carousel3.jpg';
import image4 from '../../images/Carousel4.jpg';
import image5 from '../../images/Carousel5.jpg';
import image6 from '../../images/Carousel6.jpg';
import './Carousel.css';

const responsive = {
  superLargeDesktop: {
    // screens greater than 4000px
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    // screens greater than 1024px
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    // screens greater than 464px
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    // screens less than 464px
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageCarousel = () => {
  return (
    <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img src={image1} alt="TEDx Image 1" />
      </div>
      <div>
        <img src={image2} alt="TEDx Image 2" />
      </div>
      <div>
        <img src={image3} alt="TEDx Image 3" />
      </div>
      <div>
        <img src={image4} alt="TEDx Image 4" />
      </div>
      <div>
        <img src={image5} alt="TEDx Image 5" />
      </div>
      <div>
        <img src={image6} alt="TEDx Image 6" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
