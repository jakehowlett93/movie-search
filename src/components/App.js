import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import SearchBar from './SearchBar';

const App = () => {
    return (
    <div className="ui container relaxed grid">
        <div className="ui row">
            <SearchBar />
        </div>
        <div className="ui row">
            <div className="column six wide">
                <MovieList />
            </div>
            <div className="column wide">
                <MovieDetail />
            </div>
        </div>   
    </div>
    )
};

export default App;