import React from 'react'
import Card from './Card'
import { useParams } from 'react-router';
import { useData } from './DataProvider';


const CardListContainer = ({ type, category, cardsList }) => {


    let { searchType } = useParams();
    let { searchResults } = useData();
    let categoryName = category.split('_').join(' ');
    return (
        <>
            <h1 style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                textAlign: "center",
                textTransform: "capitalize"
            }}>
                {categoryName}
            </h1>

            <div className='container'>
                {
                    cardsList
                        ? cardsList.map((card) => {
                            return <Card
                                title={card.title ? card.title : card.name}
                                poster_path={card.poster_path}
                                id={card.id}
                                type={type ? type : searchType}
                                key={card.id}
                            />
                        })
                        : searchResults.map((card) => {
                            return <Card
                                title={card.title ? card.title : card.name}
                                poster_path={card.poster_path}
                                id={card.id}
                                type={type ? type : searchType}
                                key={card.id}
                            />
                        })

                }
            </div>
        </>
    )
}

export default CardListContainer