import React from 'react';
import Header from './Header';
import { MovieCard } from './MovieCard';

import { GenreResponseProps, MovieProps } from '../interfaces/interfaces';

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {
  // Complete aqui

  return (
    <div className='container'>
      <Header title={props.selectedGenre.title} />
      <main>
        <div className='movies-list'>
          {props.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
