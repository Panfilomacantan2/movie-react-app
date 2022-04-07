import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_SECRET_API_KEY}`;

  const getDetails = async () => {
    try {
      const data = await axios.get(`${API_URL}&i=${id}`);

      setDetails(data.data);
    } catch (err) {
      console.log(err, "No results found");
    }
  };
  useEffect(() => {
    getDetails();
  }, []);
  const {
    Poster,
    Title,
    Genre,
    Plot,
    Released,
    Rated,
    Runtime,
    Director,
    Writer,
    Actors,
  } = details;

  const handleClickToLocalStorage = () => {
    let favorites;

    if (localStorage.getItem("favorites") === null) {
      favorites = [];
    } else {
      favorites = JSON.parse(localStorage.getItem("favorites"));
    }

    favorites.push(details);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("added to favorites");
  };

  return (
    <section className="movie">
      <h4>Movie Details</h4>
      <div className="movie_details">
        <div className="movie_details_left">
          <img src={Poster} alt={Title} />
        </div>

        <div className="movie_details_right">
          <h3>{Title}</h3>
          <p>{Plot}</p>
          <p>
            <strong>Genre:</strong> {Genre}
          </p>
          <p>
            <strong>Released:</strong> {Released}
          </p>
          <p>
            <strong>Rated:</strong> {Rated}
          </p>
          <p>
            <strong>Runtime:</strong> {Runtime}
          </p>
          <p>
            <strong>Director:</strong> {Director}
          </p>
          <p>
            <strong>Writer:</strong> {Writer}
          </p>
          <p>
            <strong>Actors:</strong> {Actors}
          </p>
          <button onClick={handleClickToLocalStorage}>Add to Favorites</button>
        </div>
      </div>
      <div />
    </section>
  );
};

export default MovieDetails;
