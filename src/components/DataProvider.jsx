import React, { createContext, useContext, useState } from 'react'





const DataContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [detailedItem, setDetailedItem] = useState({});
    const [detailsImages, setDetailsImages] = useState([]);

    const [searchResults, setSearchResults] = useState([]);

    const [trendingMovies, setTrendingMovies] = useState();
    const [playingNowMovies, setPlayingNowMovies] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [topRatedMovies, setTopRatedMovies] = useState();
    const [upcomingMovies, setUpcomingMovies] = useState();

    const [trendingSeries, setTrendingSeries] = useState();
    const [airingTodaySeries, setAiringTodaySeries] = useState();
    const [onTheAirSeries, setOnTheAirSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [topRatedSeries, setTopRatedSeries] = useState();

    const [menuOpened, setMenuOpened] = useState(false);


    return (
        <DataContext.Provider
            value={{
                searchResults,
                trendingMovies,
                playingNowMovies,
                popularMovies,
                topRatedMovies,
                upcomingMovies,
                trendingSeries,
                airingTodaySeries,
                onTheAirSeries,
                popularSeries,
                topRatedSeries,
                detailedItem,
                detailsImages,
                menuOpened,
                setSearchResults,
                setTrendingMovies,
                setPlayingNowMovies,
                setPopularMovies,
                setTopRatedMovies,
                setUpcomingMovies,
                setTrendingSeries,
                setAiringTodaySeries,
                setOnTheAirSeries,
                setPopularSeries,
                setTopRatedSeries,
                setDetailedItem,
                setDetailsImages,
                setMenuOpened
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider