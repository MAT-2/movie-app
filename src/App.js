import './App.css';
import React from 'react';
import {useEffect} from 'react';
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
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster != 'N/A' ? movie1.Poster : 'https://viaplaceholder.com/400'} alt={movie1.Title}/>
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default App;
