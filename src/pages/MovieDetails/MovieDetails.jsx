import React, { Suspense, useRef } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from 'react-router-dom';

import { fetchMovieDetails } from 'services/api';
import { useRequest } from 'hooks/useRequest';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie] = useRequest(fetchMovieDetails, movieId);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/');

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <section>
        <Link to={goBackRef.current}>Go back</Link>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title || movie.name}
          width="300"
        />
        <h2>{movie.title || movie.name}</h2>
        <p>User score: {movie.vote_average} </p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{movie.genres.map(genre => `${genre.name} `)}</p>
      </section>
      <section>
        <nav>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetails;
