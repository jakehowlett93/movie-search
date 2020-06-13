const fetchError = (error) => {
    return {
        type: 'FETCH_ERROR',
        payload: error
    };
};

export default fetchError;