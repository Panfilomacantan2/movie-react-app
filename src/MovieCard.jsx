import React from "react";

import defaultImg from "./styles/default_img.jpg";

const MovieCard = ({ movie: { Type, Title, Poster, Year, imdbID } }) => {
  return (
    <>
      <div className="card" key={imdbID}>
        <div className="card_img">
          <img src={Poster !== "N/A" ? Poster : defaultImg} alt={Title} />
        </div>
        <div className="card_info">
          <h4 className="type">{Type}</h4>
          <h3 className="title">{Title}</h3>
          <p className="year">{Year}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
