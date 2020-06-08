import { combineReducers } from 'redux';

const searchedValueReducer = (state = '', action) => {
    if (action.type === 'SEARCH_VALUE') {
        return action.payload;
    }

    return state;
}

const errorReducer = (state = '', action) => {
    switch (action.type) {
        case 'FETCH_ERROR':
            return action.payload;
        case 'FETCH_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

const fetchedMoviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const selectedMovieReducer = (state = '', action) => {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

const fetchedDetailsReducer = (state = null, action) => {
    if (action.type === 'FETCH_DETAILS') {
        console.log(action.payload)
        return action.payload;
    }

    return state;
};

export default combineReducers({
    searchValue: searchedValueReducer,
    error: errorReducer,
    fetchedMovies: fetchedMoviesReducer,
    selectedMovie: selectedMovieReducer,
    fetchedDetails: fetchedDetailsReducer
});