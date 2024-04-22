import styled from 'styled-components';

import { horizontalPadding, verticalPadding } from '../../shared/styles/constants';
import { colorWhite } from '../../shared/styles/colors';

export const BannerStyled = styled.div`
  height: 398px;
  padding: ${verticalPadding} ${horizontalPadding};
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.filmmakersacademy.com/wp-content/uploads/2020/01/EOQ_tMzWAAIWpoV.jpg') center no-repeat;
  background-size: cover;
`;

export const HeaderRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleStyled = styled.h1`
  max-width: 950px;
  margin: 70px auto 20px;
  color: ${colorWhite};
  text-transform: uppercase;
  font-weight: 300;
`;
