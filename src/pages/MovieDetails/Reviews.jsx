import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieReviews } from 'services/api';
import { useRequest } from 'hooks/useRequest';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie] = useRequest(fetchMovieReviews, movieId);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {movie.map(item => (
        <li key={item.id}>
          <p>Author: {item.author}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
