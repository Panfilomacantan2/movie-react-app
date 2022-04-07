import React, { useState, useEffect } from "react";

const Favorites = () => {
  let favorite;
  const [favorites, setFavorites] = useState([]);

  if (localStorage.getItem("favorites") === null) {
    favorite = [];
  } else {
    favorite = JSON.parse(localStorage.getItem("favorites"));
  }

  const handleRemoveToLocalStorage = (index) => {
    favorites.splice(index, 1);
    setFavorites(favorite);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    setFavorites(favorite);
  }, [favorite]);

  return (
    <section className="movie">
      <h4>
        {favorites.length ? "Favorites" : ""}{" "}
        {favorites.length ? favorites.length : "No favorites"}
      </h4>

      {favorites === null ? (
        <h1>No Movies Available!</h1>
      ) : (
        favorites.map((movie, index) => (
          <div className="movie_details" key={index}>
            <div className="movie_details_left">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <>
              <div className="movie_details_right">
                <h3>{movie.Title}</h3>
                <p>{movie.Plot}</p>
                <p>
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Released:</strong> {movie.Released}
                </p>
                <p>
                  <strong>Rated:</strong> {movie.Rated}
                </p>
                <p>
                  <strong>Runtime:</strong> {movie.Runtime}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Writer:</strong> {movie.Writer}
                </p>
                <p>
                  <strong>Actors:</strong> {movie.Actors}
                </p>
                <button onClick={() => handleRemoveToLocalStorage(index)}>
                  Remove from Favorites
                </button>
              </div>
            </>
          </div>
        ))
      )}
    </section>
  );
};

export default Favorites;
