import React from 'react'
import '../style/homePage.css'
import MoviesSection from './MoviesSection'
import SeriesSection from './SeriesSection'





const HomePage = () => {

  return (
    <div >
      <MoviesSection />
      <SeriesSection />
    </div>
  )
}

export default HomePage