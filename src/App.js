import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const App = () => {
  const defaultTile = "spider";
  const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_SECRET_API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async (title) => {
    try {
      const data = await axios.get(`${API_URL}&s=${title}`);

      setMovies(data.data.Search);
    } catch (err) {
      console.log(err, "No results found");
    }
  };

  useEffect(() => {
    if (!search.trim()) {
      fetchMovies(defaultTile);
    } else {
      fetchMovies(search);
    }

    fetchMovies(defaultTile);
  }, [search]);

  return (
    <div className="app">
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchMovies={fetchMovies}
      />

      {movies === undefined ? (
        <h1>No Movies Available!</h1>
      ) : (
        <div className="movie_container">
          {movies.map((movie, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/details/${movie.imdbID}`}
              key={index}
            >
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

//TODO: add favorites page and heart icon to click
