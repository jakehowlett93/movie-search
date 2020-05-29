import ombd from '../apis/omdb';

export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
};

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
        payload: response
    });
};