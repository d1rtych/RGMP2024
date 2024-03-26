import React from 'react';

import AppHeader from './components/AppHeader/AppHeader';
import AppBody from './components/AppBody/AppBody';
import { ContainerStyled } from './App.styled';

const App: React.FC = () => {
  return (
    <ContainerStyled>
      <AppHeader />
      <AppBody />
    </ContainerStyled>
  );
}

export default App;
