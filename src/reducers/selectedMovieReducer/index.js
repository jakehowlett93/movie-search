const selectedMovieReducer = (state = '', action) => {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return action.payload;
        default:
            return state;
    };
};

export default selectedMovieReducer;