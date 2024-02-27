import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCredits } from 'services/api';
import { useRequest } from 'hooks/useRequest';

const Cast = () => {
  const { movieId } = useParams();
  const [movie] = useRequest(fetchMovieCredits, movieId);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {movie?.cast.map(item => (
        <li key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            width="150"
            alt={item.name}
          />
          <p>{item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
