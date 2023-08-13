import apiBaseURL from './apiBaseURL'



const trendingSeriesURL = `${apiBaseURL}trending/tv/day?language=en-US`
const airingTodayURL = `${apiBaseURL}tv/airing_today`
const onTheAirURL = `${apiBaseURL}tv/on_the_air`
const popularSeriesURL = `${apiBaseURL}tv/popular`
const topRatedSeriesURL = `${apiBaseURL}tv/top_rated`
const serieGenresURL = `${apiBaseURL}genre/tv/list`

export {
    trendingSeriesURL,
    airingTodayURL,
    onTheAirURL,
    popularSeriesURL,
    topRatedSeriesURL,
    serieGenresURL
}