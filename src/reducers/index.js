import { combineReducers } from 'redux';

const searchedValueReducer = (state = '', action) => {
    if (action.type === 'MOVIE_SEARCHED') {
        return action.payload;
    }

    return state;
}

const fetchedMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'MOVIES_FETCHED':
            return action.payload;
        default:
            return state;
    }
}

const selectedMovieReducer = (state = '', action) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return action.payload;
        default:
            return state;
    }
}

const fetchedDetailsReducer = (state = null, action) => {
    if (action.type === 'DETAILS_FETCHED') {
        console.log(action.payload)
        return action.payload;
    }

    return state;
};

export default combineReducers({
    searchValue: searchedValueReducer,
    fetchedMovies: fetchedMoviesReducer,
    selectedMovie: selectedMovieReducer,
    fetchedDetails: fetchedDetailsReducer
});