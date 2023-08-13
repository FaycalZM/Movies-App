import React from 'react'
import { Routes, Route } from 'react-router'
import Header from './header/Header'
import { NotFound404 } from '../exports'
import RoutingData from '../data/RoutingData'



const MainContentPage = () => {
    
    
    return (
        <section className='content-section'>
            <Header/>
            <Routes>
                {
                    RoutingData.map(
                        (route, index) => {
                            return <Route
                                path={route.path}
                                element={route.element}
                                key={index}
                            />
                        }
                    )
                }
                <Route path='*' element={<NotFound404 />} />
            </Routes>
        </section>
    )
}

export default MainContentPage