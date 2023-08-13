/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import imagesBaseURL from '../data/imagesBaseURL';
import movieGenres from '../data/movieGenres.json'
import { useData } from './DataProvider';


const getPosterInfos = (genres, movie) => {
    let poster_title = movie.title;
    let poster_genre = genres.filter(
        (genre) => genre.id === movie.genre_ids[0]
    )
    return {
        poster_title,
        poster_genre
    }
}

/* ******************************************** */



const MoviesSection = () => {

    let { trendingMovies } = useData();

    if (!trendingMovies) {
        return <h1
            style={{
                fontSize: "4rem",
                textAlign: "center",
                textTransform: "capitalize"
            }}
        >Loading...</h1>
    }
    else {
        // poster values
        let { poster_title, poster_genre } = getPosterInfos(movieGenres, trendingMovies[0]);

        // to display just the 5 first movies
        let moviesList = trendingMovies.slice(0, 5);

        // changing the poster's  image
        let poster_img = trendingMovies[0].backdrop_path;

        return (
            <>
                <div
                    className='big-poster'
                    style={{
                        backgroundImage: `url(${imagesBaseURL}${poster_img})`
                    }}
                >
                    <h1>{poster_title}</h1>
                    <h2> {poster_genre[0].name} </h2>
                </div>
                <div className='section-header'>
                    <h3>Movies</h3>
                    <Link to={'/movies'}>
                        see all
                    </Link>
                </div>
                <div className='cards-section'>
                    {
                        moviesList.map((movie) => {
                            return <Card
                                title={movie.title}
                                poster_path={movie.poster_path}
                                type={"movie"}
                                id={movie.id}
                                key={movie.id}
                            />
                        })
                    }
                </div>
            </>
        )
    }


}

export default MoviesSection