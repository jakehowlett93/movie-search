import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        {title: 'movie1', duration: 2.16},
        {title: 'movie2', duration: 2.00},
        {title: 'movie3', duration: 1.16},
        {title: 'movie4', duration: 3.16}
    ];
};

const selectedMovieReducer = (selectedMovie = null, action) => {
    if (action.type === 'MOVIE_SELECTED') {
        return action.payload;
    }

    return selectedMovie;
};

const searchedValueReducer = (searchValue = '', action) => {
    if (action.type === 'MOVIE_SEARCHED') {
        return action.payload;
    }

    return searchValue
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    searchValue: searchedValueReducer
});