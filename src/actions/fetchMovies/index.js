import ombd from '../../apis/omdb';
import clearDetails from '../clearDetails'
import fetchError from '../fetchError';
import fetchSuccess from '../fetchSuccess';

const fetchMovies = () => async (dispatch, getState) => {
    await ombd.get(`?apikey=13348aee&s=${getState().searchValue}&page=1`)
    .then(response => {
        dispatch(clearDetails())
        if (response.data.Response === "False") {
            dispatch(fetchError(response.data.Error))
        } else {
            dispatch(fetchSuccess())
            dispatch({
            type: 'FETCH_MOVIES',
            payload: response.data.Search
            })
        }
    })
    .catch(e => console.log(e))
};

export default fetchMovies;