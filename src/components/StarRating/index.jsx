import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import './styles.css'

export default function StarRating({ noOfStars = 5 }) {

    const [starRating, setStarRating] = useState(0);
    const [starHover, setStarHover] = useState(0);

    function handleStarClick(currentStarIndex) {
        setStarRating(currentStarIndex)
        
    }

    function handleMouseIn(currentStarIndex) {
        setStarHover(currentStarIndex)

    }
    function handleMouseOut() {
        setStarHover(starRating)
    }

    useEffect(()=>{
        console.log("Updated Rating: ", starRating);
    },[starRating])

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((star, index) => {
                index += 1;
                return (<FaStar key={index}
                    className={index <= (starHover || starRating) ? "active" : "inactive"}
                    onClick={() => handleStarClick(index)}
                    onMouseMove={() => handleMouseIn(index)}
                    onMouseLeave={() => handleMouseOut(index)}
                    size={40}
                />)
            })}
    </div>
} 