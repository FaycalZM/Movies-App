/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import '../../style/card.css'
import { useData } from '../DataProvider';
import CardListContainer from '../CardListContainer';
import { airingTodayURL } from '../../data/seriesURLs';
import { fetchList } from '../../data/fetch';

const AiringToday = () => {
  const { airingTodaySeries, setAiringTodaySeries } = useData();
  useEffect(
    () => {
      if (airingTodaySeries) return;
      fetchList(airingTodayURL, setAiringTodaySeries);
    }, []
  )
  return <CardListContainer
    category={"airing_today"}
    type={"tv"}
    cardsList={airingTodaySeries}
  />
}

export default AiringToday