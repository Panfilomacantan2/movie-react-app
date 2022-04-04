import React from "react";

const searchBar = ({ search, setSearch, fetchMovies }) => {
  return (
    <>
      <input
        placeholder="Search for movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => fetchMovies(search)}>Search</button>
    </>
  );
};

export default searchBar;
