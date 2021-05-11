import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiService {
  getTradingMovies() {
    return axios
      .get('/trending/all/week?api_key=3e91b5df25eb12a3a6040f68d69bdd3f')
      .then(response => response.data.results);
  }

  getMoviesOnSearch(query) {
    return axios
      .get(
        `/search/movie?api_key=3e91b5df25eb12a3a6040f68d69bdd3f&query=${query}`,
      )
      .then(response => response.data.results);
  }
  getMovieById(movieId) {
    return axios
      .get(`/movie/${movieId}?api_key=3e91b5df25eb12a3a6040f68d69bdd3f`)
      .then(response => response.data);
  }
  getMovieCredits(movieId) {
    return axios
      .get(`/movie/${movieId}/credits?api_key=3e91b5df25eb12a3a6040f68d69bdd3f`)
      .then(response => response.data.cast);
  }
  getMovieReviews(movieId) {
    return axios
      .get(`/movie/${movieId}/reviews?api_key=3e91b5df25eb12a3a6040f68d69bdd3f`)
      .then(response => response.data.results);
  }
}
