const selectMovie = (movieId) => {
    return {
        type: 'SELECT_MOVIE',
        payload: movieId
    };
};

export default selectMovie;