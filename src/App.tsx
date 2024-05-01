import React from 'react';
import { Outlet } from 'react-router-dom';

import AppBody from './components/AppBody/AppBody';
import { ContainerStyled } from './components/AppBody/styled';

const App: React.FC = () => {
  return (
    <ContainerStyled>
      <Outlet />
      <AppBody />
    </ContainerStyled>
  );
}

export default App;
