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
        <h1 className="display-1">Cakes</h1>
        <Carousel photos={photos.filter(photo => photo.tags === 'cake')}/>
        <div className='cupcake-cont'>
        <h1 className="display-1">Cupcakes</h1>
        <Carousel photos={photos.filter(photo => photo.tags === 'cupcake')}/>
        </div>
        <div className='combo-cont'>
        <h1 className="display-1">Combo</h1>
        <Carousel photos={photos.filter(photo => photo.tags === 'combo')}/>
        </div>
        </>
    )
}