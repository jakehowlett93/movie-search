const searchValue = (value) => {
    return {
        type: 'SEARCH_VALUE',
        payload: value
    };
};

export default searchValue;