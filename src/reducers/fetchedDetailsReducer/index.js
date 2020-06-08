const fetchedDetailsReducer = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_DETAILS' :
            return action.payload;
        case 'CLEAR_DETAILS' :
            return action.payload;
        default :
            return state;
    };
};

export default fetchedDetailsReducer;