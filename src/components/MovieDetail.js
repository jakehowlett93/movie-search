import React from 'react';
import { connect } from 'react-redux';

const MovieDetail = ({ fetchedDetails}) => {
    if (!fetchedDetails) {
        return <div></div>
    }
    
    return (
        <div>
            <h3>{fetchedDetails.Title} </h3>
            <p>
                Title: {fetchedDetails.Title} 
                <br />
                Runtime: {fetchedDetails.Runtime}
                <br />
                Ratings: {fetchedDetails.Ratings[0].Value}
                <br />
                Plot: {fetchedDetails.Plot}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
   return { fetchedDetails: state.fetchedDetails }
};

export default connect(mapStateToProps, {})(MovieDetail)