import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import SearchBar from './SearchBar';
import './app.css';


const App = () => {
    return (
    <div className="app-container">
        <img src={'./omdbLogo'} alt='OMDb search'/>
        <div className="fixed-searchbar fixed-padding">
            <SearchBar />
        </div>
        <div className="movie-list">
            <MovieList />
        </div>  
        <div className="fixed-details fixed-padding">
            <MovieDetail />
        </div> 
    </div>
    )
};

export default App;