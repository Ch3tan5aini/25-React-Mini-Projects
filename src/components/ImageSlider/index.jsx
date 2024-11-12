import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

export default function ImageSlider({ url, limit, page }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false)


    async function fetchImages(endpoint, limit, page = 1) {
        try {
            setLoading(true);
            const response = await fetch(`${endpoint}page=${page}&limit=${limit}`)
            const apiImages = await response.json();

            if (apiImages) {
                setImages(apiImages)
                setLoading(false)

            }
        } catch (error) {
            console.log(error);
            setLoading(true);
        }
    }
    function handlePrevious() {
        currentSlide === 0 ? setCurrentSlide(images.length - 1) : setCurrentSlide(currentSlide - 1)
    }
    function handleNext() {
        currentSlide === images.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }
    function handleIndicator(index) {
        setCurrentSlide(index)
    }

    useEffect(() => {
        if (url !== '') fetchImages(url, limit, page)
    }, [url])

    if (loading) {
        return <div><h3>Loading Please Wait!</h3></div>
    }

    return <div className='imageSlider'>
        <BsArrowLeftCircleFill className='arrow arrow-left' size={"2rem"} onClick={handlePrevious} />
        {
            images && images.length ?
                images.map((imageData, index) => (
                    <img src={imageData.download_url} alt={imageData.download_url} key={imageData.id} className={currentSlide === index ? 'current-image' : 'inactive'} />
                ))
                : <h2>NO Images Found</h2>
        }
        <span className='indicators'>
            {
                images && images.length ?
                    images.map((_, index) => (
                        <button className={currentSlide === index ? 'active current-indicator' : 'current-indicator'} onClick={() => handleIndicator(index)} key={index}></button>
                    ))
                    : null
            }
        </span>
        <BsArrowRightCircleFill className='arrow arrow-right' size={"2rem"} onClick={handleNext} />
    </div>
}