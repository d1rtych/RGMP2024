import styled from 'styled-components';
import { horizontalPadding, verticalPadding, verticalPaddingX2 } from '../../shared/styles/constants';
import { colorBlackish, colorRed, colorWhite } from '../../shared/styles/colors';

export const MovieDetailsStyled = styled.div`
  padding: ${verticalPaddingX2} ${horizontalPadding};
  background-color: ${colorBlackish};

  .movie {
    &-container {
      display: flex;
    }

    &-poster {
      height: 455px;
      width: 322px;
      margin-right: ${horizontalPadding};
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-details {
      display: flex;
      flex-direction: column;

      &__row {
        display: flex;
        align-items: center;
      }

      &__title {
        margin: 0;
        font-size: 40px;
        font-weight: 300;
      }

      &__vote {
        margin-left: ${horizontalPadding};
        padding: ${verticalPadding};
        border: 1px solid ${colorWhite};
        border-radius: 50%;

        font-size: 20px;
        font-weight: 300;
        line-height: 1;
      }

      &__genre {
        margin-bottom: ${horizontalPadding};
        color: ${colorWhite};
        opacity: 0.5;
      }

      &__release-date,
      &__runtime {
        font-weight: 300;
        font-size: 24px;
        color: ${colorRed};
      }

      &__release-date {
        margin-right: ${horizontalPadding};
      }
      
      &__description {
        margin-top: ${horizontalPadding};
        color: ${colorWhite};
        font-size: 20px;
        opacity: 0.5;
      }
    }
  }
`;
