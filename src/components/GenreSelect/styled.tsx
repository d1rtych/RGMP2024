import styled from 'styled-components';
import { colorBlackish, colorRed, colorWhite } from '../../shared/styles/colors.ts';
import { horizontalPadding } from '../../shared/styles/constants.ts';

export const GenreSelectStyled = styled.div`
  margin-top: 10px;
  padding: 10px ${horizontalPadding};
  display: flex;
  align-items: center;
  background-color: ${colorBlackish};
  color: ${colorWhite};
`;

export const GenreOptionStyled = styled.button`
  padding: 10px 0;
  margin-right: 20px;
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
