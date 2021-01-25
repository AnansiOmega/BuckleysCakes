import React, { useEffect, useState } from 'react'
import { InfoCarousel } from '../components/infoCarousel'
import { ProductCarousel as Carousel } from '../components/carousel'
const API_KEY = process.env.REACT_APP_FLICKR_API_KEY


export const Home = () => {
    const [photos, setPhotos] = useState([])
    useEffect(()=> {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${API_KEY}&user_id=191886210%40N08&extras=tags%2C+description&format=json&nojsoncallback=1`)
        .then(resp => resp.json())
        .then(data => {
            setPhotos(data.photos.photo)
        })
    },[])

    return(
        <>
        <InfoCarousel />
        <section className="section section-shaped">
          <div className="shape shape-style-1 shape-inverse">
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
        <div className='ml-5 mr-5 product-cont'>
        <h1 className="display-1">Combos</h1>
        <Carousel photos={photos.filter(photo => photo.tags === 'combo')}/>
        <h1 className="display-1">Cakes</h1>
        <Carousel photos={photos.filter(photo => photo.tags === 'cake')}/>
        <h1 className="display-1">Cupcakes</h1>
        <Carousel photos={photos.filter(photo => photo.tags === 'cupcake')}/>
        </div>
        </section>
        </>
    )
}