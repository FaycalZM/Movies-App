/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider';
import CardListContainer from '../CardListContainer';
import { onTheAirURL } from '../../data/seriesURLs';
import { fetchList } from '../../data/fetch';

const OnTheAir = () => {
  const { onTheAirSeries, setOnTheAirSeries } = useData();
  useEffect(
    () => {
      if (onTheAirSeries) return;
      fetchList(onTheAirURL, setOnTheAirSeries);
    }, []
  )
  return <CardListContainer
    category={"on_the_air"}
    type={"tv"}
    cardsList={onTheAirSeries}
  />
}

export default OnTheAir