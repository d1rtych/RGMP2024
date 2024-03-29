import styled from 'styled-components';

import { horizontalPadding, verticalPadding } from './shared/styles/constants';
import { colorBlackish, colorRed, colorWhite } from './shared/styles/colors';

import backgroundImg from './assets/images/movies-bg.jpg';

export const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const BannerStyled = styled.div`
  height: 398px;
  padding: ${verticalPadding} ${horizontalPadding};
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg}) center no-repeat;
  background-size: cover;
`;

export const HeaderRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoStyled = styled.div`
  color: ${colorRed};
  font-size: 20px;
`;

export const TitleStyled = styled.h1`
  max-width: 950px;
  margin: 70px auto 20px;
  color: ${colorWhite};
  text-transform: uppercase;
  font-weight: 300;
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
