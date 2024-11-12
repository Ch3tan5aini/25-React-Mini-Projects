import React from 'react'
import Accordion from './components/Accordion'
import RandomColorGenerator from './components/RandomColor'
import StarRating from './components/StarRating'
import ImageSlider from './components/ImageSlider'
import './App.css'
import LoadMoreData from './components/loadMoreData'

const App = () => {
  return (
    <div className='container'>
      {/* <Accordion /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list?"} page={"1"} limit={"10"} /> */}
      <LoadMoreData />
    </div>
  )
}

export default App
