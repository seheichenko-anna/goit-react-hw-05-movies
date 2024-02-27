import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import Home from 'pages/Home/Home';
import Cast from 'pages/MovieDetails/Cast';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Reviews from 'pages/MovieDetails/Reviews';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
