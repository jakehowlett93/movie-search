export const selectMovie = (movie) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
};

export const searchMovie = (searchValue) => {
    return {
        type: 'MOVIE_SEARCHED',
        payload: searchValue
    };
};