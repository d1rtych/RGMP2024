import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { LogoStyled } from './styled';
import { TypographyBold } from '../../shared/styles/styled';

const Logo: React.FC = () => {
  const [searchParams] = useSearchParams();

  return (
    <LogoStyled>
      <Link to={{
        pathname: `/`,
        search: searchParams.toString(),
      }}>
        <TypographyBold>netflix</TypographyBold>
        <span>roulette</span>
      </Link>
    </LogoStyled>
  );
};

export default Logo;
