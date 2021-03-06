import React from 'react';
import { connect } from 'react-redux';
import fetchMovies from '../../actions/fetchMovies'
import searchValue from '../../actions/searchValue';

import './SearchBar.css';

const sanitizeSearchValue = (value) => {
    value
        .trim()
        .replace(/\s+/g, '+')
        .toLowerCase();
    return value;
}

const SearchBar = ({ fetchMovies, searchValue, currentValue }) => {
  
    const onFormSubmit = (event) => {
        event.preventDefault();
        fetchMovies()
    }

    return (
    <div className="">
        <form onSubmit={onFormSubmit} >
            <div className="">
                <input 
                className="searchbar"
                type="text"
                value={currentValue}
                onChange={(e) => searchValue(sanitizeSearchValue(e.target.value))}
                />
            </div>
        </form>
    </div>
    );   
}

const mapStateToProps = (state) => {
    return { currentValue: state.searchedValue }
}

export default connect(mapStateToProps, { fetchMovies, searchValue })(SearchBar);