import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Origional"
        fetchUrl={requests.fetchPopular}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchLatest} /> */}
      <Row title="Romance Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=cf2c099c8df08fca611ad223dad09e6b
// cf2c099c8df08fca611ad223dad09e6b
// https://api.themoviedb.org/3/movie/581392/images?api_key=cf2c099c8df08fca611ad223dad09e6b&language=en-US
