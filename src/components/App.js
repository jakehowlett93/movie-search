import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import SearchBar from './SearchBar';
import './app.css';

const App = () => {
    return (
    <div className="app-container ui container relaxed">
        <div className="ui fixed-left fixed-padding">
            <SearchBar />
        </div>
        <div className="ui movie-list">
            <MovieList />
        </div>  
        <div className="ui fixed-right fixed-padding">
            <MovieDetail />
        </div> 
    </div>
    )
};

export default App;