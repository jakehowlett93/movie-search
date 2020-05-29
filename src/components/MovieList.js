import React from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions';

class MovieList extends React.Component {
    renderList() {
        return this.props.fetchedMovies.map((movie) => {
            return (
                <div className="item" key={movie.imdbID}>
                    <div className="content" onClick={() => this.props.fetchDetails(movie.imdbID)}>
                        <img className='ui tiny left floated image' src={movie.Poster} alt='a poster of the movie'/>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </div>
                </div>
            )
        })
    }

    render () {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { fetchedMovies: state.fetchedMovies}
}

export default connect(mapStateToProps, {fetchDetails})(MovieList);