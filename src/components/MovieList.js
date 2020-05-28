import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

class MovieList extends React.Component {
    renderList() {
        return this.props.movies.map((movie) => {
            return (
                <div className="item" key={movie.title}>
                    <div className="content" onClick={() => this.props.selectMovie(movie)}><h3>{movie.title}</h3></div>
                </div>
            )
        })
    }

    render () {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return { movies: state.movies}
}

export default connect(mapStateToProps, { selectMovie })(MovieList);