import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </>
  );
};

export default MovieCard;
