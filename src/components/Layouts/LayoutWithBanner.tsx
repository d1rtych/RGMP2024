import React from 'react';
import { Outlet } from 'react-router-dom';

import Banner from '../Banner/Banner';

const LayoutWithBanner: React.FC<{ childComponent?: React.ReactNode }> = ({ childComponent }) => (
  <>
    <Banner />
    {childComponent || <Outlet />}
  </>
);


export default LayoutWithBanner;
