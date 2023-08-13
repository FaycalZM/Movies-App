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

/* ******************************************************* */

const SerieDetailsPage = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    let favorites = JSON.parse(localStorage.getItem('favorites'));
    if (!favorites)
        favorites = [];

    const { id } = useParams();
    const [detailsImages, setDetailsImages] = useState([]);
    const [detailedItem, setDetailedItem] = useState({});
    const [similarSeries, setSimilarSeries] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [cast, setCast] = useState([]);
    const [isSerieInFavorites, setIsSerieInFavorites] = useState(checkIsItemInFavorites(favorites, detailedItem));


    const itemURL = `${apiBaseURL}/tv/${id}`;
    const imagesURL = `${apiBaseURL}/tv/${id}/images`;
    const similarURL = `${apiBaseURL}/tv/${id}/similar`;
    const recommendationsURL = `${apiBaseURL}/tv/${id}/recommendations`;
    const castURL = `${apiBaseURL}/tv/${id}/credits`;

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
            fetchList(similarURL, setSimilarSeries);
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
            setIsSerieInFavorites(checkIsItemInFavorites(favorites, detailedItem));
        }, [detailedItem]
    );


    if (detailedItem.backdrop_path)
        document.getElementById("root").style.backgroundImage = `url(${imagesBaseURL}${detailedItem.backdrop_path})`;



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
                    <h1>{detailedItem.name} </h1>
                    <h2>
                        {
                            detailedItem.first_air_date ? detailedItem.first_air_date.split('-')[0] : null
                        }
                        <span> - </span>
                        {
                            detailedItem.last_air_date ? detailedItem.last_air_date.split('-')[0] : null
                        }
                    </h2>

                    <p>
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
                                    : null
                            }
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

                    <p className='count'>seasons : <span>{detailedItem.number_of_seasons}</span> </p>
                    <p className='count'>episodes : <span>{detailedItem.number_of_episodes}</span> </p>

                    <div className='buttons'>
                        <a
                            href={detailedItem.homepage}
                            target='_blank'
                            className='read-more btn'>
                            read more
                        </a>
                        <button
                            onClick={() => {
                                detailedItem.type = 'tv';
                                if (!isSerieInFavorites) {
                                    favorites.push(detailedItem);
                                    setIsSerieInFavorites(true);
                                    localStorage.setItem('favorites', JSON.stringify(favorites));
                                }
                                else
                                    alert('the series is already in favorites! ');
                            }}
                            className='add-to-favorites btn'
                        >
                            <FaStar className={`favorites-star ${isSerieInFavorites ? "added-to-favorites" : null}`} />
                            {
                                isSerieInFavorites
                                    ? "added to favorites"
                                    : "add to favorites"
                            }
                        </button>
                    </div>

                </div>
            </div>

            <h3 style={{
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

            <h3 style={{
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
                similarSeries.length
                    ? <CategorySection
                        category={"similar series"}
                        type={"tv"}
                        list={similarSeries}
                    />
                    : null
            }

            {
                recommendations.length
                    ? <CategorySection
                        category={"recommendations"}
                        type={"tv"}
                        list={recommendations}
                    />
                    : null
            }

        </div>
    )
}

export default SerieDetailsPage