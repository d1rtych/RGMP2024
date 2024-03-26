import styled from 'styled-components';
import { colorWhite } from '../../shared/styles/colors';
import { verticalPaddingX2 } from '../../shared/styles/constants';

export const ConfirmationStyled = styled.div`
  width: 570px;
  display: flex;
  flex-direction: column;
  color: ${colorWhite};
  
  .title {
    margin: 0 0 ${verticalPaddingX2};
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
  }
  
  .actions {
    display: flex;
    justify-content: end;
  }
`;
