import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  params: {
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDRkZGEyZmJkYWRjYzM4MzA3YjRkNGIwODA2YzdkOCIsInN1YiI6IjY1ZGM4NGY2MDNiZjg0MDE0NWFlMWRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.apXfUMyhDnAyhpb6kM76W5Ct9L6XBCVSDWsij85cCAU',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/day', options);
  return data.results;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data.results;
};

export const fetchMoviesByQuery = async ({ query }) => {
  const { data } = await axios.get(`search/movie`, {
    ...options,
    params: { ...options.params, query },
  });
  return data.results;
};
