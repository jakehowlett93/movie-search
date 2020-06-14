import { combineReducers } from 'redux';
import searchedValueReducer from './searchedValueReducer';
import errorReducer from './errorReducer';
import selectedMovieReducer from './selectedMovieReducer';
import fetchedMovieReducer from './fetchedMovieReducer';
import fetchedDetailsReducer from './fetchedDetailsReducer'



export default combineReducers({
    searchedValue: searchedValueReducer,
    error: errorReducer,
    fetchedMovie: fetchedMovieReducer,
    selectedMovie: selectedMovieReducer,
    fetchedDetails: fetchedDetailsReducer
});