import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { searchValue } from '../actions';

import './SearchBar.css';

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
                onChange={(e) => searchValue(e.target.value)}
                />
            </div>
        </form>
    </div>
    );   
}

const mapStateToProps = (state) => {
    return { currentValue: state.searchValue }
}

export default connect(mapStateToProps, { fetchMovies, searchValue })(SearchBar);