import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Modal from './Modal';

describe('Modal', () => {
  let modalRoot: HTMLElement;

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
  });

  it('renders children content in a portal', () => {
    const modalContent = 'This is modal content';
    render(
      <Modal handleClose={() => {}}>
        <div>{modalContent}</div>
      </Modal>
    );

    expect(screen.getByText(modalContent)).toBeInTheDocument();
    expect(modalRoot).toHaveTextContent(modalContent);
  });

  it('calls handleClose when the close button is clicked', async () => {
    const mockHandleClose = jest.fn();
    render(
      <Modal handleClose={mockHandleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    await userEvent.click(screen.getByText('X'));
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
