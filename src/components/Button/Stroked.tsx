import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from './types';
import { colorRed, colorWhite } from '../../shared/styles/colors';

const StrokedButtonStyled = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border-radius: 4px;
  color: ${colorWhite};
  cursor: pointer;
  font-size: 16px;
  border: 1px solid ${colorRed};

  &:hover {
    border-color: #e60000;
  }
`;
export const StrokedButton: React.FC<ButtonProps> = ({children, onClick, type = 'button'}) => {
  return (
    <StrokedButtonStyled type={type} onClick={onClick}>{children}</StrokedButtonStyled>
  );
};
