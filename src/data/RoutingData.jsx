
import { HomePage, Movies, Series, Favorites, AboutUs }
    from '../exports'
import { NowPlaying, TopRatedMovies, PopularMovies, Upcoming }
    from '../components/moviesComponents/moviesExports'
import { AiringToday, OnTheAir, PopularSeries, TopRatedSeries }
    from '../components/seriesComponents/seriesExports'
import MovieDetailsPage from '../components/MovieDetailsPage'
import SerieDetailsPage from '../components/SerieDetailsPage'
import CardListContainer from '../components/CardListContainer'



const RoutingData = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/movie/:id',
        element: <MovieDetailsPage />
    },
    {
        path: '/tv/:id',
        element: <SerieDetailsPage />
    },
    {
        path: '/search/:searchType/:query',
        element: <CardListContainer
            category={"search_results"} />
    },
    {
        path: '/movies',
        element: <Movies />
    },
    {
        path: '/now_playing',
        element: <NowPlaying />
    },
    {
        path: '/top_rated_movies',
        element: <TopRatedMovies />
    },
    {
        path: '/popular_movies',
        element: <PopularMovies />
    },
    {
        path: '/upcoming',
        element: <Upcoming />
    },
    {
        path: '/series',
        element: <Series />
    },
    {
        path: '/airing_today',
        element: <AiringToday />
    },
    {
        path: '/on_the_air',
        element: <OnTheAir />
    },
    {
        path: '/popular_series',
        element: <PopularSeries />
    },
    {
        path: '/top_rated_series',
        element: <TopRatedSeries />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
    {
        path: '/about',
        element: <AboutUs />
    },
]

export default RoutingData