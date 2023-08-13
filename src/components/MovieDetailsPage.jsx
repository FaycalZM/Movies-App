/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '../style/detailsPage.css'
import IMDBLogo from '/IMDB-logo.png'
import { useParams } from 'react-router'
import apiBaseURL from '../data/apiBaseURL'
import imagesBaseURL from '../data/imagesBaseURL'
import CategorySection from './CategorySection'
import { fetchData, fetchList, fetchImages, fetchCast } from '../data/fetch'
import imageNotFound from '/no-image-icon-23485.png'


const checkIsItemInFavorites = (favorites, item) => {
    let filterResult = [];
    if (favorites && item) {
        filterResult = favorites.filter(favorite => favorite.id === item.id);
    }
    return filterResult.length > 0;
}

/*  ******************************************  */

const MovieDetailsPage = () => {



    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites)
        favorites = [];




    const { id } = useParams();
    const [detailsImages, setDetailsImages] = useState([]);
    const [detailedItem, setDetailedItem] = useState({});
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [cast, setCast] = useState([]);
    const [isMovieInFavorites, setIsMovieInFavorites] = useState(checkIsItemInFavorites(favorites, detailedItem));

    useEffect(
        () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }, [detailedItem]
    )

    const itemURL = `${apiBaseURL}/movie/${id}`;
    const imagesURL = `${apiBaseURL}/movie/${id}/images`;
    const similarURL = `${apiBaseURL}/movie/${id}/similar`;
    const recommendationsURL = `${apiBaseURL}/movie/${id}/recommendations`;
    const castURL = `${apiBaseURL}/movie/${id}/credits`;

    useEffect(
        () => {
            fetchData(itemURL, setDetailedItem);
        }, [itemURL]
    );

    useEffect(
        () => {
            fetchImages(imagesURL, setDetailsImages);
        }, [imagesURL]
    );

    useEffect(
        () => {
            fetchList(similarURL, setSimilarMovies);
        }, [similarURL]
    );

    useEffect(
        () => {
            fetchList(recommendationsURL, setRecommendations);
        }, [recommendationsURL]
    );

    useEffect(
        () => {
            fetchCast(castURL, setCast);
        }, [castURL]
    );

    useEffect(
        () => {
            setIsMovieInFavorites(checkIsItemInFavorites(favorites, detailedItem));
        }, [detailedItem]
    );


    let runtimeHours, runtimeMins = null;

    if (detailedItem) {
        runtimeHours = detailedItem.runtime ? Math.floor(detailedItem.runtime / 60) : null;
        runtimeMins = detailedItem.runtime ? detailedItem.runtime - runtimeHours * 60 : null;
        if (detailedItem.backdrop_path)
            document.getElementById("root").style.backgroundImage = `url(${imagesBaseURL}${detailedItem.backdrop_path})`;
    }


    return (
        <div className='details-section'>
            <div className='details'>
                {
                    <img
                        className='poster'
                        src={detailedItem.poster_path ? `https://image.tmdb.org/t/p/original${detailedItem.poster_path}` : `${imageNotFound}`}
                        alt="poster" />
                }

                <div className='infos'>
                    <h1>{detailedItem.title} </h1>
                    <h2>
                        {
                            detailedItem.release_date ? detailedItem.release_date.split('-')[0] : null
                        }
                    </h2>

                    <p>
                        <span className='duration'>
                            {runtimeHours}h {runtimeMins}min|
                        </span>
                        {
                            detailedItem.genres
                                ? detailedItem.genres.map(
                                    (genre, index) => {
                                        if (index !== detailedItem.genres.length - 1) {
                                            return <>
                                                <span key={index} className='genre'>
                                                    {genre.name}
                                                </span>
                                                <span>, </span>
                                            </>

                                        }
                                        else {
                                            return <span key={index} className='genre'>
                                                {genre.name}
                                            </span>
                                        }
                                    }
                                )
                                : null
                        }
                    </p>

                    <p>
                        <FaStar className='star' />
                        <span className='rating'>
                            {
                                detailedItem.vote_average
                                    ? detailedItem.vote_average.toFixed(1)
                                    : null}
                        </span>
                        <span className='proportion'>/10</span>
                        <img
                            src={IMDBLogo}
                            alt="IMDB logo"
                            style={{
                                height: '35px',
                                display: 'inline-block',
                                marginLeft: '.5rem'
                            }}
                        />
                    </p>
                    <p className='overview'>
                        {detailedItem.overview}
                    </p>

                    <div className='buttons'>
                        <a
                            href={detailedItem.homepage}
                            target='_blank'
                            className='read-more btn'>
                            read more
                        </a>
                        <button
                            onClick={() => {
                                detailedItem.type = 'movie';
                                if (!isMovieInFavorites) {
                                    favorites.push(detailedItem);
                                    setIsMovieInFavorites(true);
                                    localStorage.setItem('favorites', JSON.stringify(favorites));
                                }
                                else
                                    alert('the movie is already in favorites! ');
                            }}
                            className='add-to-favorites btn'
                        >
                            <FaStar className={`favorites-star ${isMovieInFavorites ? "added-to-favorites" : null}`} />
                            {
                                isMovieInFavorites
                                    ? "added to favorites"
                                    : "add to favorites"
                            }
                        </button>
                    </div>


                </div>
            </div>

            <h3
                className='cast-title'
                style={{
                    marginTop: "1rem",
                    fontSize: "1.9rem",
                    fontWeight: "500",
                    textTransform: "capitalize"
                }}>cast</h3>

            <div className='cast'>
                {
                    cast
                        ? cast.map((castMember) => {
                            let { id, name, profile_path, character } = castMember;
                            return <div className='cast-member'>
                                <div
                                    key={id}
                                    className='member-img'
                                    style={{
                                        backgroundImage: `url(${imagesBaseURL}${profile_path})`
                                    }}
                                ></div>
                                <h5>{name} </h5>
                                <h6>{character}</h6>
                            </div>
                        })
                        : null
                }
            </div>

            <h3
                className='images-title'
                style={{
                    marginTop: "1rem",
                    fontSize: "1.9rem",
                    fontWeight: "500",
                    textTransform: "capitalize"
                }}>images</h3>
            <div className='images'>
                {
                    detailsImages.length
                        ? detailsImages.map((image, index) => {
                            return <img
                                key={index}
                                src={`https://image.tmdb.org/t/p/original${image.file_path}`}
                                alt="image" />
                        })
                        : <h2 style={{
                            textAlign: "center",
                            fontSize: "3rem",
                            fontWeight: "300",
                            textTransform: "capitalize",
                            paddingRight: "1rem"
                        }}>no available images</h2>
                }
            </div>

            {
                similarMovies.length
                    ? <CategorySection
                        category={"similar movies"}
                        type={"movie"}
                        list={similarMovies}
                    />
                    : null
            }

            {
                recommendations.length
                    ? <CategorySection
                        category={"recommendations"}
                        type={"movie"}
                        list={recommendations}
                    />
                    : null
            }

        </div>
    )
}

export default MovieDetailsPage