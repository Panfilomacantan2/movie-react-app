import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const App = () => {
  const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_SECRET_API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchMovies("star wars");
  }, []);

  const fetchMovies = async (title) => {
    try {
      const data = await axios.get(`${API_URL}&s=${title}`);

      if (movies === undefined) {
        alert("NO Movies");
      } else {
        setMovies(data.data.Search);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(movies);

  return (
    <div className="app">
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchMovies={fetchMovies}
      />
     

      {movies?.length < 0 ? (
        <h1>No Movies Available!</h1>
      ) : (
        <div className="movie_container">
          {movies.map((movie, index) => (
            <Link to="/details" key={index}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
