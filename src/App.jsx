/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './App.css'
import './style/sidebarNav.css'
import SideBarNav from './components/SideBarNav'
import MainContentPage from './components/MainContentPage'
import imagesBaseURL from './data/imagesBaseURL'
import { trendingMoviesURL } from './data/movieURLs'
import { trendingSeriesURL } from './data/seriesURLs'
import { useData } from './components/DataProvider'
import { fetchList } from './data/fetch'



function App() {

  if (localStorage.getItem('favorites')) {
    console.log("item exists");
  }
  else {// create the favorites array
    console.log("item doesn't exist");
    localStorage.setItem('favorites', JSON.stringify([]));
  }


  const { trendingMovies, setTrendingSeries, setTrendingMovies } = useData();

  // getting the trending movies and series

  useEffect(
    () => {
      fetchList(trendingMoviesURL, setTrendingMovies);
    }, []
  )

  useEffect(
    () => {
      fetchList(trendingSeriesURL, setTrendingSeries);
    }, []
  )

  // changing the page's background image
  if (trendingMovies) {
    let poster_img = trendingMovies[0].backdrop_path;
    document.getElementById("root").style.backgroundImage = `url(${imagesBaseURL}${poster_img})`
  }




  return (
    <main className='main-page'>
      <SideBarNav />
      <MainContentPage />
    </main>
  )
}

export default App
