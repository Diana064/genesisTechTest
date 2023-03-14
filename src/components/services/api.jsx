import axios from 'axios';

axios.defaults.baseURL = 'http://api.wisey.app/api/v1/core/preview-courses';

export const getCourses = async () => {
  const response = await axios.get();
  console.log(JSON.stringify(response.data));
};
// export const getSearchMovies = async nameFilm => {
//   const response = await axios.get(
//     `search/movie?api_key=${API_KEY}&language=en-US&query=${nameFilm}&page=1&include_adult=false`
//   );

//   return response.data.results;
// };
// export const getMovieDetails = async movieId => {
//   const response = await axios.get(
//     `movie/${movieId}?api_key=${API_KEY}&language=en-US`
//   );

//   return response.data;
// };
// export const getMovieCredits = async movieId => {
//   const response = await axios.get(
//     `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
//   );
//   console.log(response.data.cast);
//   return response.data.cast;
// };
// export const getMovieReviews = async movieId => {
//   const response = await axios.get(
//     `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   );

//   return response.data.results;
// };
