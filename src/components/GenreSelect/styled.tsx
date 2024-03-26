import styled from 'styled-components';

import { colorRed, colorWhite } from '../../shared/styles/colors';

export const GenreSelectStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${colorWhite};
`;

export const GenreOptionStyled = styled.button`
  padding: 10px 0;
  margin-right: 10px;
  background: none;
  border: none;
  color: ${colorWhite};
  cursor: pointer;
  border-bottom: 3px solid transparent;
  text-transform: uppercase;

  &.selected,
  &:hover {
    border-bottom-color: ${colorRed};
  }
`;
