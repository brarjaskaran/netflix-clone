import React from "react";
import "./Banner.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner({ title }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchUpcoming);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchdata();
  }, []);
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `https://image.tmdb.org/t/p/original/`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      {/* <div className="banner--fadeBottom"></div> */}
    </header>
  );
}

export default Banner;
