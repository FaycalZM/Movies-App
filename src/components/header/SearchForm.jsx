import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu"
import TypeInput from './TypeInput'
import '../../style/searchForm.css'
import apiBaseURL from '../../data/apiBaseURL'
import { fetchList } from '../../data/fetch'
import { useData } from '../../components/DataProvider'
import { useNavigate } from 'react-router'


const SearchForm = () => {
    const [searchedType, setSearchedType] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const { setSearchResults } = useData();
    const searchURL = `${apiBaseURL}/search/${searchedType}?query=${searchQuery}&page=1`;

    const navigate = useNavigate();

    return (
        <div className='searchForm-ct'>
            <form
                id='search-form'
                className='searchForm'
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!searchedType)
                        alert('please select the search type before you submit!');
                    else {
                        fetchList(searchURL, setSearchResults);
                        navigate(`/search/${searchedType}/${searchQuery}`);
                    }
                }}
            >
                <input
                    type="text"
                    id="inputField"
                    placeholder='Search...'
                    onChange={(e) => {
                        let value = e.target.value;
                        setSearchQuery(value.replace(" ", "%20").replace(":", "%3A").replace("&", "%26"));
                    }}
                />
                <button
                    style={{
                        background: "transparent",
                        border: "none"
                    }}
                    type='submit'>
                    <LuSearch className='searchIcon' />
                </button>

            </form>

            <TypeInput
                setSearchedType={setSearchedType}
            />

        </div>

    )
}

export default SearchForm