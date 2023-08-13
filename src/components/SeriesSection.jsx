/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import { useData } from './DataProvider';


const SeriesSection = () => {
    const { trendingSeries } = useData();

    if (!trendingSeries) {
        return <h1
            style={{
                fontSize: "4rem",
                textAlign: "center",
                textTransform: "capitalize"
            }}
        >Loading...</h1>
    }
    else {
        let seriesList = trendingSeries.slice(0, 5);

        return (
            <>
                <div className='section-header'>
                    <h3>Series</h3>
                    <Link to={'/series'}>
                        see all
                    </Link>
                </div>
                <div className='cards-section'>
                    {
                        seriesList.map((serie) => {
                            return <Card
                                title={serie.name}
                                poster_path={serie.poster_path}
                                type={"tv"}
                                id={serie.id}
                                key={serie.id}
                            />
                        })
                    }
                </div>
            </>
        )
    }

}

export default SeriesSection