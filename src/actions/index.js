import ombd from '../apis/omdb';

export const searchValue = (value) => {
    return {
        type: 'SEARCH_VALUE',
        payload: value
    };
};

export const fetchError = (error) => {
    return {
        type: 'FETCH_ERROR',
        payload: error
    }
}

export const fetchSuccess = () => {
    return {
        type: 'FETCH_SUCCESS',
        payload: ''
    }
}

export const fetchMovies = () => async (dispatch, getState) => {
    await ombd.get(`?apikey=13348aee&s=${getState().searchValue}&page=1`)
    .then(response => {
        if (response.data.Response === "False") {
            dispatch(fetchError(response.data.Error))
        } else {
            dispatch(fetchSuccess())
            dispatch({
            type: 'FETCH_MOVIES',
            payload: response.data.Search
            })
        }
    })
    .catch(
        dispatch(fetchError('There has been a network error please try again'))
    )
};

export const selectMovie = (movieId) => {
    return {
        type: 'SELECT_MOVIE',
        payload: movieId
    }
}

export const fetchDetails = (movieID) => async (dispatch, getState) => {
    await ombd.get(`?apikey=13348aee&i=${movieID}&page=1`)
    .then(response => {
        dispatch(fetchSuccess())
        dispatch({
            type: 'FETCH_DETAILS',
            payload: response.data
        })
    })
    .catch(error => console.log(error))

        
}