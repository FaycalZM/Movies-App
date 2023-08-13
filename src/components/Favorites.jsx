import React, { useState } from 'react'
import CardFavorite from './CardFavorite'
import '../style/card.css'





const Favorites = () => {

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')));

  return (
    <>
      <h1 style={{
        fontSize: "3rem",
        marginBottom: "1.5rem",
        marginTop: "2rem",
        textAlign: "center",
        textTransform: "capitalize"
      }}>
        my favorites
      </h1>
      <div
        className='container'>
        {
          favorites.length
            ? favorites.map((movie) => {
              return <CardFavorite
                title={movie.title ? movie.title : movie.name}
                poster_path={movie.poster_path}
                id={movie.id}
                type={movie.type}
                key={movie.id}
                setFavorites={setFavorites}
              />
            })
            : <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: '400',
                textTransform: 'capitalize'
              }}
            >
              no items in favorites
            </h1>
        }
      </div>
    </>

  )
}

export default Favorites