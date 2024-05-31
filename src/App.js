import './App.css';
import React from 'react';
import {useEffect} from 'react';
import MovieCard from './MovieCard'
// import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=be441347';

const movie1 = {
    "Title": "Goodfellas",
    "Year": "1990",
    "imdbID": "tt0099685",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
};


function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
  useEffect(() => {
    searchMovies('Goodfellas');
  }, []);

  return (
    <div className="app">
      <h1>Movie World</h1>

      <div className="search">
        <input 
        placeholder="Search for Movies"
        value="Goodfellas"
        onChange={() => {}}
        />

        <img 
        // src={SearchIcon} 
        alt="search" 
        onClick={() => {}}
        />
      </div>

      <div className="container">
        <MovieCard movie1={movie1}/>
      </div>
    </div> 
  );
}

export default App;
