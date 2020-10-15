const API_KEY = "cf2c099c8df08fca611ad223dad09e6b";

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchLatest: `/movie/latest?api_key=c${API_KEY}`,
  //   fetchTrending: ``,
  //   fetchTrending: ``,
  //   fetchTrending: ``,
};

export default requests;
