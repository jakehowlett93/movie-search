import ombd from '../../apis/omdb';
import fetchSuccess from '../fetchSuccess';

const fetchDetails = (movieID) => async (dispatch) => {
    await ombd.get(`?apikey=13348aee&i=${movieID}&page=1`)
    .then(response => {
        dispatch(fetchSuccess())
        dispatch({
            type: 'FETCH_DETAILS',
            payload: response.data
        })
    })
    .catch(e => console.log(e))
};

export default fetchDetails;