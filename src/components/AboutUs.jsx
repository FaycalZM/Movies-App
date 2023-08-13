import React from 'react'
import { FaReact } from 'react-icons/fa'



const AboutUs = () => {
  return (
    <>
      <div className='aboutUS'>
        <h1>About this app</h1>
        <p>
          this app is made using REACT JS
          <FaReact className='react-icon' />
          (vite)
          where the data is fetched using TMDB's (The movie database) free API
          <img
            className='tmdb-short-logo'
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="" />
        </p>
      </div>
    </>
  )
}

export default AboutUs
