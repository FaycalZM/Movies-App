import React from 'react'
import '../../style/typeInput.css'
import { MdKeyboardArrowDown } from 'react-icons/md'

const TypeInput = ({ setSearchedType }) => {
    return (
        <div className="type-popup">
            <input type="radio" name="type" id="movie" />
            <input type="radio" name="type" id="tv" />
            <input type="checkbox" id="checkbox" />
            <label
                htmlFor="checkbox"
                className="type-popup__button">
                type
                <MdKeyboardArrowDown />
            </label>
            <div className="type-popup__list-container">
                <ul className="type-popup__list">
                    <li onClick={() => {
                        setSearchedType("movie");
                    }}>
                        <label htmlFor="movie">
                            <span>
                                movie
                            </span>
                        </label>
                    </li>
                    <li onClick={() => {
                        setSearchedType("tv");
                    }}>
                        <label htmlFor="tv">
                            <span>
                                serie
                            </span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TypeInput