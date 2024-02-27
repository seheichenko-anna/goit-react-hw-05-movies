import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { fetchTrendingMovies } from 'services/api';
import { useRequest } from 'hooks/useRequest';

const Home = () => {
  const [movies] = useRequest(fetchTrendingMovies);
  const location = useLocation();

  if (!movies) {
    return <h1>Loading...</h1>;
  }
  return (
    <section>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id}>
            <Link
              state={{ from: location }}
              to={`movies/${movie.id.toString()}`}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
