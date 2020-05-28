import React from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions';

const SearchBar = ({ searchMovie, searchValue }) => {
  
    const onFormSubmit = (event) => {
        event.preventDefault();
    }
  
    return (
    <div className="ui container">
        <form onSubmit={onFormSubmit}>
            <div className="ui input">
                <input 
                className=""
                type="text"
                value={searchValue}
                onChange={(e) => searchMovie(e.target.value)}
                />
                <div className="ui teal button">Search</div>
            </div>
        </form>
    </div>
    );   
}

const mapStateToProps = (state) => {
    return { searchValue: state.searchValue }
}

export default connect(mapStateToProps, { searchMovie })(SearchBar);