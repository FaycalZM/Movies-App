import React from 'react'
import Error404Svg from '../assets/icons/oops-404-error-with-a-broken-robot-not-css.svg'
import '../style/notFound404Page.css'

const NotFound404 = () => {
  return (
    <div>
      <img  
        className='illustration'
        src={Error404Svg}
        alt="not found 404" />
    </div>
  )
}

export default NotFound404