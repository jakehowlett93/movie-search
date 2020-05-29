import ombd from '../apis/omdb';

export const searchValue = (value) => {
    return {
        type: 'MOVIE_SEARCHED',
        payload: value
    };
};

export const fetchMovies = () => async (dispatch, getState) => {
    const response = await ombd.get(`?apikey=13348aee&s=${getState().searchValue}&page=1`  );

    dispatch({
        type: 'MOVIES_FETCHED',
        payload: response.data.Search
    });
};

export const selectMovie = (movieId) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movieId
    }
}

export const fetchDetails = (movieID) => async (dispatch, getState) => {
    const response = await ombd.get(`?apikey=13348aee&i=${movieID}&page=1` );

        dispatch({
            type: 'DETAILS_FETCHED',
            payload: response.data
        })
}