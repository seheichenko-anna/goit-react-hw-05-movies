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
import s from './MovieDetails.module.css';

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
      <section className={s.movie_details}>
        <Link to={goBackRef.current} className={s.btn_goBack}>
          Go back
        </Link>
        <div className={s.wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title || movie.name}
            width="300"
          />

          <div>
            <h2>{movie.title || movie.name}</h2>
            <p>User score: {movie.vote_average} </p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(genre => `${genre.name} `)}</p>
          </div>
        </div>
      </section>
      <section>
        <nav>
          <ul className={s.list_links}>
            <li>
              <NavLink to="cast" className={s.item_link}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={s.item_link}>
                Reviews
              </NavLink>
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
