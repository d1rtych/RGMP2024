import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
