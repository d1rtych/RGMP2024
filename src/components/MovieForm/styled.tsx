import styled from 'styled-components';
import { colorMediumGray, colorRed, colorWhite } from '../../shared/styles/colors';
import { verticalPadding, verticalPaddingX2 } from '../../shared/styles/constants';

export const MovieFormStyled = styled.form`
  width: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .title {
    margin: 0;
    align-self: flex-start;
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .row {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: ${verticalPaddingX2};
  }

  label {
    margin-bottom: 5px;
    display: inline-block;
    font-size: 16px;
  }
  
  .form {
    &-group {
      position: relative;
      
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      
      .error {
        position: absolute;
        bottom: -20px;
        font-size: 12px;
        color: ${colorRed};
      }
    }

    &-control {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 4px;
      background-color: ${colorMediumGray};
      color: ${colorWhite};
      opacity: 0.7;
    }

    &-actions {
      width: 100%;
      margin-top: ${verticalPadding};
      display: flex;
      justify-content: end;
      
      button:last-child {
        margin-left: ${verticalPadding};
      }
    }
  }
`;
