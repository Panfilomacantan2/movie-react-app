import axios from "axios";
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const App = () => {
  const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_SECRET_API_KEY}`;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async (title) => {
    try {
      const data = await axios.get(`${API_URL}&s=${title}`);
      setMovies(data.data.Search);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(movies);
  useEffect(() => {
    fetchMovies("star wars");
  }, []);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        fetchMovies={fetchMovies}
      />

      <h1>Search Term: {search}</h1>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </>
  );
};

export default App;
