import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import MovieCard from './MovieCard'
// import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=be441347';

// const movie1 = {
//     "Title": "Goodfellas",
//     "Year": "1990",
//     "imdbID": "tt0099685",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
// };


function App() {

  //created state here, using useState hook.
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Goodfellas');
  }, []);

  return (
    <div className="app">
      <h1>Movie World</h1>

{/* onChange event sets setSearchTerm setter function to target value. */}
      <div className="search">
        <input 
        placeholder="Search for Movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />

{/* Added onclick event to use searchTerm state*/}
        <img 
        // src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 
      ? (
        <div className="container">
          {movies.map((movie) => (<MovieCard movie={movie}/>
          ))}
        </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
    </div> 
  );
}

export default App;
