import React, { useState, memo } from 'react';

import { SortControlProps } from './types';
import { SortControlStyled } from './styled';
import { SORTING_OPTIONS } from '../../shared/constants';

const SortControl: React.FC<SortControlProps> = memo(({ currentSelection, onSortChange }) => {
  const [selectedValue, setSelectedValue] = useState(currentSelection);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelection = event.target.value as string;
    setSelectedValue(newSelection);
    onSortChange(newSelection);
  };

  return (
    <SortControlStyled>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={selectedValue} onChange={handleChange}>
        {SORTING_OPTIONS.map((option) => {
          return <option key={option.value} value={option.value}>{option.title}</option>
        })}
      </select>
    </SortControlStyled>
  );
});

export default SortControl;
