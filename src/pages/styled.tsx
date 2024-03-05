import styled from 'styled-components';

export const CounterStyled = styled.div`
  height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  .counter {
    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    &-result {
      margin: 0 15px;
    }
    
    &-button {
      min-width: 50px;
      font-size: 20px;
    }
  }
`;
