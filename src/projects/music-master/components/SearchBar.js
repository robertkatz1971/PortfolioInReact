import React, { useState } from "react";

const SearchBar = ({ searchCallback, placeHolder }) => {

    const [searchString, setSearchString] = useState('');

    const updateSearchString = (event) => {
        setSearchString(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key == 'Enter') {
            searchCallback(searchString);
        }
    }

    return (
        <>
            <input 
                placeholder={placeHolder}
                onChange={updateSearchString} 
                onKeyDown={handleKeyDown}
            />
            <button onClick={searchCallback}>Search</button>
        </>
    );
}

export default SearchBar;
