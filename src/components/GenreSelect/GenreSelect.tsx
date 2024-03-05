import React from 'react';
import { GenreOptionStyled, GenreSelectStyled } from './styled.tsx';
import { GenreSelectProps } from './types.ts';

const GenreSelect: React.FC<GenreSelectProps> = ({ genres, selectedGenre, onSelect }) => {
  return (
    <GenreSelectStyled>
      {genres.map((genre) => (
        <GenreOptionStyled
          data-cy="genre-option"
          key={genre}
          className={selectedGenre === genre ? 'selected' : ''}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </GenreOptionStyled>
      ))}
    </GenreSelectStyled>
  );
};

export default GenreSelect;
