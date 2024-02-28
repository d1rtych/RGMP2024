import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { ButtonProps } from './types.ts';
import { colorRed, colorWhite } from '../../shared/styles/colors.ts';

export const FilledButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: ${colorRed};
  border: none;
  border-radius: 4px;
  color: ${colorWhite};
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${darken(0.1, colorRed)}; // Затемнение на 10%
  }
`;

export const FilledButton: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <FilledButtonStyled onClick={onClick}>{children}</FilledButtonStyled>
  );
};
