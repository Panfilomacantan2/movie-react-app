import React from "react";
import { Link } from "react-router-dom";

import "./styles/App.scss";
import searchIcon from "./styles/search.svg";
import avatarIcon from "./styles/avatar.svg";

const searchBar = ({ search, setSearch, fetchMovies }) => {
  const handleOnClick = () => {
    if (!search.trim()) {
      console.log("input plsss!");

      
      return;
    }

    fetchMovies(search);
  };

  return (
    <nav className="nav_bar">
      <div className="search_wrapper">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={handleOnClick} />
      </div>

      <div className="login_btn">
        <Link to="/login">
          <button type="button">
            LOGIN <img src={avatarIcon} alt="avatar" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default searchBar;
