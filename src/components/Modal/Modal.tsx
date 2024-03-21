import React from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from './types';
import { ModalStyled } from './styled';

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    throw new Error('Modal root element not found');
  }

  return (
    <>
      {createPortal(
        <ModalStyled>
          <div className="modal">
            <button className="modal-close" onClick={handleClose}>X</button>
            <div className="modal-content">
              {children}
            </div>
          </div>
        </ModalStyled>,
        modalRoot
      )}
    </>
  );
};

export default Modal;
