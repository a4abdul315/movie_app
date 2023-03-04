import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //Api Key 1d65e5fe
  const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=1d65e5fe";

  //fetching the API
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("2012");
  }, []);

  return (
    <div className="app">
      <h1>Movie App</h1>

      <div className="search">
        <input placeholder="Search for movies" value={search} onChange={(e) => setSearch(e.target.value)} />
        <img src={SearchIcon} alt="searchIcon" onClick={() => searchMovies(search)}></img>
      </div>

      {/* Conditional Rendering */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
