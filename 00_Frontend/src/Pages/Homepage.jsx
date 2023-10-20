import React from 'react';
import HomeCarousel from '../Customer/Components/Carousel/HomeCarousel';
import { homeCarouselData } from '../Customer/Components/Carousel/HomeCaroselData';

const Homepage = () => {
  return (
    <div className=''>
      <HomeCarousel images={homeCarouselData} />
    </div>
  );
};

export default Homepage;
