import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const SearchBar = ({ selectMovie }) => {
  
    const onFormSubmit = (event) => {
        event.preventDefault();
    }
  
    return (
    <div>
        <form onClick={() => selectMovie('hello')}>
            <div>
                <label>Movie Search</label>
                <input 
                type="text"
                />
            </div>
        </form>
    </div>
    );   
}

const mapStateToProps = (state) => {
    return { searchValue: state.searchValue }
}

export default connect(mapStateToProps, { selectMovie })(SearchBar);