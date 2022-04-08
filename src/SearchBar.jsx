import React from "react";
import { Link } from "react-router-dom";

import "./styles/App.scss";
import searchIcon from "./styles/search.svg";
import avatarIcon from "./styles/avatar.svg";
import hamburger from "./styles/hamburger.jpg";

const searchBar = ({ search, setSearch, fetchMovies }) => {   
  const handleOnClick = () => {
    if (!search.trim()) {
      console.log("input pls!");
      return;
    }
    fetchMovies(search.toLowerCase());
  };

  return (
    <nav className="nav_bar">
      <div className="search_wrapper">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <img src={searchIcon} alt="search" onClick={handleOnClick} />
      </div>

      <Link style={{ textDecoration: "none" }} to="/favorites">
        <button className="btn_favorites">Favorites</button>
      </Link>

      <div className="login_btn">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button type="button">
            LOGIN <img src={avatarIcon} alt="avatar" />
          </button>
        </Link>
      </div>

      <img className="hamburger" src={hamburger} alt="hamburger" />
    </nav>
  );
};

export default searchBar;
