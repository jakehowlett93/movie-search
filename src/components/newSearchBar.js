import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const SearchBar = ({ selectMovie }) => {
    return (
        <div className="item">
            <div className="content" onClick={() => selectMovie('hi')}><h3>{'movie title'}</h3></div>
        </div>
    )
}

const mapStateToProps = (state) => {
return { movies: state.movies}
}

export default connect(mapStateToProps, { selectMovie })(SearchBar);