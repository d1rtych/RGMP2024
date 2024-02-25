import styled from 'styled-components';
import React from 'react';
import { ButtonProps } from './types.ts';
import { colorRed, colorWhite } from '../../shared/styles/colors.ts';

export const BlurredButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: ${colorRed};
  border: none;
  border-radius: 4px;
  color: ${colorWhite};
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #e60000;
  }
`;

export const BlurredButton: React.FC<ButtonProps> = ({children, onClick}) => {
  return (
    <BlurredButtonStyled onClick={() => onClick}>{children}</BlurredButtonStyled>
  );
};
