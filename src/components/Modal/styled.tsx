import styled from 'styled-components';
import { horizontalPadding } from '../../shared/styles/constants';
import { colorBlackish, colorWhite } from '../../shared/styles/colors';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  
  .modal {
    position: relative;
    padding: ${horizontalPadding};
    margin: ${horizontalPadding};
    background-color: ${colorBlackish};
    
    &-close {
      position: absolute;
      top: 12px;
      right: 12px;
      
      color: ${colorWhite};
      background-color: transparent;
    }
  }
`;
