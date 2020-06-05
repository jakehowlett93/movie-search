import React from 'react';
import { connect } from 'react-redux';
import './MovieDetail.css';



const MovieDetail = ({ fetchedDetails}) => {
    if (!fetchedDetails) {
        return <div>Search the Open Movie Database</div>
    }
    
    return (
        <div className="details">
            <h1>{fetchedDetails.Title} </h1>
            <div className="images">
                <img className="details-image" src={fetchedDetails.Poster} alt='The selected movie poster'></img>
                <img className="blurred-image" src={fetchedDetails.Poster} alt='The selected movie poster'></img>

            </div>
            <p className="details-paragraph">
                <br />
                <span className="bold-text">Rating: </span>{fetchedDetails.Ratings[0].Value}
                <br />
                <span className="bold-text">Release: </span>{fetchedDetails.Released}
                <br />
                <span className="bold-text">Runtime: </span>{fetchedDetails.Runtime}
                <br />
                <span className="bold-text">Cast: </span>{fetchedDetails.Actors}
                <br />
                <span className="bold-text">Plot: </span>{fetchedDetails.Plot}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
   return { fetchedDetails: state.fetchedDetails }
};

export default connect(mapStateToProps, {})(MovieDetail)