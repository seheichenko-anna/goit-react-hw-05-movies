import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCredits } from 'services/api';
import { useRequest } from 'hooks/useRequest';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movie] = useRequest(fetchMovieCredits, movieId);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className={s.cast_list}>
      {movie?.cast.map(item => (
        <li key={item.id} className={s.cast_item}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            width="150"
            alt={item.name}
            className={s.cast_img}
          />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
