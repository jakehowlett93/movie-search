import React from 'react';
import { connect } from 'react-redux';
import './MovieDetail.css';



const MovieDetail = ({ fetchedDetails, error }) => {
    if (!fetchedDetails && !error) {
        return <div>Search the Open Movie Database</div>
    } else if (error) {
        return <div>{error}</div>
    }

    const ratings = fetchedDetails.Ratings === true ? fetchedDetails.Ratings[0].Value : 'N/A';
    const noImage = require('../../assets/noImage.png')
    const poster = fetchedDetails.Poster === 'N/A' ? noImage : fetchedDetails.Poster;    
    const altText = fetchedDetails.Poster === 'N/A' ? 'Could not find movie poster' : 'A poster of the movie'
    
    return (
        <div className="details">
            <h1 className="details-title">{fetchedDetails.Title} </h1>
            <div className="images">
                <img className="details-image" src={poster} alt={altText}></img>
                <img className="blurred-image" src={poster} alt={altText}></img>
            </div>
            <p className="details-paragraph">
                <br />
                <span className="bold-text">Rating: </span>{ratings}
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
   return { 
       fetchedDetails: state.fetchedDetails,
       error: state.error
    }
};

export default connect(mapStateToProps, {})(MovieDetail)