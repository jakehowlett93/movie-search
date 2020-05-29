import React from 'react';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions';
import './movieList.css'

class MovieList extends React.Component {
    renderList() {
        return this.props.fetchedMovies.map((movie) => {
            return (
                <div className="container" key={movie.imdbID}>
                    <div className="content" onClick={() => this.props.fetchDetails(movie.imdbID)}>
                        <h3 className="movie-title">{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img className='image' src={movie.Poster} alt='a poster of the movie'/>
                    </div>
                </div>
            )
        })
    }

    render () {
        return <div className="">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { fetchedMovies: state.fetchedMovies}
}

export default connect(mapStateToProps, {fetchDetails})(MovieList);