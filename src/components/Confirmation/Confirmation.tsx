import React from 'react';

import { ConfirmationStyled } from './styled';
import { FilledButton } from '../Button';
import { ConfirmationProps } from './types';

const Confirmation: React.FC<ConfirmationProps> = ({ onConfirm }) => {
  return (
    <ConfirmationStyled>
      <h2 className="title">Delete Movie</h2>
      <p>Are you sure you want to delete this movie?</p>

      <div className="actions">
        <FilledButton onClick={onConfirm}>Confirm</FilledButton>
      </div>
    </ConfirmationStyled>
  );
}

export default Confirmation;
