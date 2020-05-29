import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import { searchValue } from '../actions';

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
                className=""
                type="text"
                value={currentValue}
                onChange={(e) => searchValue(e.target.value)}
                />
                <input type="button" className="" value="Search" onClick={onFormSubmit}></input>
            </div>
        </form>
    </div>
    );   
}

const mapStateToProps = (state) => {
    return { currentValue: state.searchValue }
}

export default connect(mapStateToProps, { fetchMovies, searchValue })(SearchBar);