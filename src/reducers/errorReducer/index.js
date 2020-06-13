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

export default errorReducer;