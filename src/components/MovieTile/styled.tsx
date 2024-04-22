import styled from 'styled-components';
import { verticalPadding } from '../../shared/styles/constants';
import { colorBlackish, colorMediumGray, colorRed } from '../../shared/styles/colors';

export const MovieTileStyled = styled.div`
  position: relative;
  width: 322px;

  &:hover {
    .movie-menu {
      display: block;
    }
  }

  .movie {
    &-menu {
      position: absolute;
      top: 5px;
      right: 10px;
      
      display: none;
      padding: ${verticalPadding};
      
      font-weight: bold;
      line-height: 1;
      letter-spacing: 2px;
      cursor: pointer;
      
      &__bar {
        position: absolute;
        top: 12px;
        right: 10px;
        
        width: 40%;
        padding: 5px;
        border-radius: 3px;
        
        background-color: ${colorBlackish};
      }
      
      &__close {
        display: flex;
        justify-content: end;
        
        span {
          cursor: pointer;
          padding: 0 3px;
        }
      }

      &__item {
        margin: 0;
        padding: 5px;
        cursor: pointer;

        &:hover {
          background-color: ${colorRed};
        }
      }
    }

    &-poster {
      height: 455px;
      width: 322px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-info {
      margin-top: ${verticalPadding};
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-title {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
    }
    
    &-year {
      padding: 2px 12px;
      border: 1px solid ${colorMediumGray};
      font-size: 14px;
      border-radius: 5px;
    }
    
    &-genres {
      margin: 5px 0 0;
      font-size: 14px;
    }
  }
`;
