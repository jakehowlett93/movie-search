const searchedValueReducer = (state = '', action) => {
    if (action.type === 'SEARCH_VALUE') {
        return action.payload;
    }

    return state;
}

export default searchedValueReducer