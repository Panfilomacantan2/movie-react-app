import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_SECRET_API_KEY}`;
  const { id } = useParams();
  const [details, setDetails] = useState([]);

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

  console.log(details);
  return (
    <section className="movie">
      <h4>Movie Details Page</h4>
      <div className="movie_details">
        <div className="movie_details_left">
          <img src={details.Poster} alt={details.Title} />
        </div>

        <div className="movie_details_right">
          <h3>{details.Title}</h3>
          <p>{details.Plot}</p>
          <p>
            <strong>Genre:</strong> {details.Genre}
          </p>
          <p>
            <strong>Released:</strong> {details.Released}
          </p>
          <p>
            <strong>Rated:</strong> {details.Rated}
          </p>
          <p>
            <strong>Runtime:</strong> {details.Runtime}
          </p>
          <p>
            <strong>Director:</strong> {details.Director}
          </p>
          <p>
            <strong>Writer:</strong> {details.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {details.Actors}
          </p>
        </div>
      </div>
      <div />
    </section>
  );
};

export default MovieDetails;
