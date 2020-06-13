import React from 'react';
import { connect } from 'react-redux';
import fetchDetails from '../../actions/fetchDetails';
import './movieList.css'
//TODO refactor css classnames

class MovieList extends React.Component {
    renderList() {
        return this.props.fetchedMovie.map((movie) => {
            return (
                <div className="container" key={movie.imdbID}>
                    <div className="movie-content" onClick={() => this.props.fetchDetails(movie.imdbID)}>
                        <img className='list-image' src={movie.Poster} alt='a poster of the movie'/>
                        <div>
                            <h3 className="movie-title multi-line-truncate">{movie.Title}</h3>
                            <p>{movie.Year}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render () {
        return <div className="movie-list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { fetchedMovie: state.fetchedMovie}
}

export default connect(mapStateToProps, {fetchDetails})(MovieList);