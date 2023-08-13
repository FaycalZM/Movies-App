import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const CategorySection = ({ category, type, link_path = "", list }) => {
    let categoryName = category.split('_').join(' ');
    return (
        <>
            <div className='section-header'>
                <h3> {categoryName} </h3>
                {
                    link_path
                        ? <Link to={`/${link_path}`}>
                            see all
                        </Link>
                        : null
                }
            </div>
            <div className='cards-section'>
                {
                    list
                        ? list.slice(0, 5).map((movie) => {
                            return <Card
                                title={movie.title ? movie.title : movie.name}
                                poster_path={movie.poster_path}
                                type={type}
                                id={movie.id}
                                key={movie.id}
                            />
                        })
                        : <h2
                            style={{
                                fontSize: "4rem",
                                textAlign: "center",
                                textTransform: "capitalize"
                            }}
                        >Loading...</h2>
                }
            </div>
        </>
    )
}

export default CategorySection