import React, { useState } from 'react'
import imageBaseURL from '../data/imagesBaseURL'
import '../style/card.css'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router'


const CardFavorite = ({ title, poster_path, id, type, setFavorites }) => {
    const navigate = useNavigate();
    return (
        <div
            className='infos-wrapper'>
            <div
                className='card fav-card'
                style={{ backgroundImage: `url(${imageBaseURL}${poster_path})` }}>
                <button onClick={() => {
                    let favorites = JSON.parse(localStorage.getItem('favorites'));
                    let newFavorites = favorites.filter(favorite => favorite.id !== id);
                    localStorage.setItem('favorites', JSON.stringify(newFavorites));
                    setFavorites(newFavorites);
                }}>
                    <FaTrash className='trash-icon' />
                </button>

            </div>
            <h1
                onClick={() => {
                    navigate(`/${type}/${id}`);
                }}
            > {title} </h1>

        </div>

    )
}

export default CardFavorite