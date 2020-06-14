import React from 'react';
import MovieList from './movieList/MovieList';
import MovieDetail from './movieDetail/MovieDetail';
import SearchBar from './searchBar/SearchBar';
import './app.css';

const App = () => {
    return (
        <div className="wrapper">
            <div className="app-container">
                <div className='header'>
                    <img className='logo' src={require('../assets/omdbLogo.png')} alt='OMDb search'/>
                    <div className="searchbar-container">
                        <SearchBar />
                    </div>
                </div>
                <div className="list-details-container">
                    <div className="list-container">
                        <MovieList />
                    </div>  
                    <div className="details-container">
                        <MovieDetail />
                    </div>
                </div>
            </div>
        </div>

    )
};

export default App;