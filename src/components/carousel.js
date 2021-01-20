import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ProductCarousel = ({photos}) => {

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const renderImages = () => {
    return photos.map(photo => {
        return <img className='product-picture' src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`}/>
    })
}
return(
    <div className='ml-4'>
        <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={1000}
        infinite={true}
        >
            {renderImages()}
        </Carousel>
    </div>
)
}