import './App.css';
import React from 'react';
import {useEffect} from 'react';


const API_URL = 'http://www.omdbapi.com?apikey=be441347'
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
    <h1>App</h1> 
  );
}

export default App;
