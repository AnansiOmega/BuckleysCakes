import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ProductCarousel = ({photos}) => {

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4
    },
    smallDesktop: {
      breakpoint: { max: 1300, min: 1100 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1100, min: 800 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };

const renderImages = () => {
    return photos.map(photo => {
        return <img key={photo.id} className='product-picture rounded ml-2 mr-2 fluid' src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} alt={photo.title}/>
    })
}
return(
    <div>
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