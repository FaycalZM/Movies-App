import apiBaseURL from './apiBaseURL'



const trendingMoviesURL = `${apiBaseURL}trending/movie/day?language=en-US`
const playingNowURL = `${apiBaseURL}movie/now_playing`
const popularMoviesURL = `${apiBaseURL}movie/popular`
const topRatedMoviesURL = `${apiBaseURL}movie/top_rated`
const upcomingURL = `${apiBaseURL}movie/upcoming`
const movieGenresURL = `${apiBaseURL}genre/movie/list`

export {
    trendingMoviesURL,
    playingNowURL,
    popularMoviesURL,
    topRatedMoviesURL,
    upcomingURL,
    movieGenresURL
}