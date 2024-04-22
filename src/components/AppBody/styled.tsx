import styled from 'styled-components';

import { horizontalPadding, verticalPadding } from '../../shared/styles/constants';
import { colorBlackish } from '../../shared/styles/colors';

export const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContentStyled = styled.div`
  margin-top: 10px;
  padding: 10px ${horizontalPadding};
  background-color: ${colorBlackish};
`;

export const MoviesFilter = styled.div`
  margin-bottom: ${verticalPadding};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const MoviesGrid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  
  row-gap: 32px;
`;
