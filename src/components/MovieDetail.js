import React from 'react';
import { connect } from 'react-redux';

const MovieDetail = ({ movie }) => {
    if (!movie) {
        return <div>Select a movie</div>
    }
    
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {movie.title} 
                <br />
                Duration: {movie.duration}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
   return { movie: state.selectedMovie }
};

export default connect(mapStateToProps)(MovieDetail)