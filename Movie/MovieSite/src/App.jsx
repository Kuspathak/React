import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css'

const App = () => {

  const API_URL='http://www.omdbapi.com?apikey=b6003d8a'

  const [searchTerm,setSearchTerm]=useState("");
  const [movies,setMovies]=useState([]);


  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

const handelClick=(e)=>{
  setSearchTerm(e.target.value)
}

  return (
    <div className='app'>
      <h1>Ocean of Movies</h1>

      <div className='search'>
        <input
        type='text'
        value={searchTerm}
        onChange={handelClick}
        placeholder='Search for Movies'/>

       <img
       src='public\search.svg'
       alt='search'
       onClick={()=>searchMovies(searchTerm)}
      
       />
        </div>   

          {
          movies && movies.length > 0 ? (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies found</h2>
            </div>
          )
        }
          

      </div>
  )
}

export default App