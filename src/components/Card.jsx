import React from 'react'
import imageBaseURL from '../data/imagesBaseURL'
import '../style/card.css'
import { useNavigate } from 'react-router'
import imageNotFound from '/no-image-icon-23485.png'



const Card = ({ title, poster_path, id, type }) => {
    const navigate = useNavigate();

    return (
        <div
            className='infos-wrapper'
            onClick={() => {
                navigate(`/${type}/${id}`);
            }}
        >
            <div
                className='card'
                style={poster_path
                    ? { backgroundImage: `url(${imageBaseURL}${poster_path})` }
                    : { backgroundImage: `url(${imageNotFound})` }}>
            </div>
            <h1> {title} </h1>


        </div>

    )
}

export default Card