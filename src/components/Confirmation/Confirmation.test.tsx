import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Confirmation from './Confirmation';

describe('Confirmation', () => {
  it('renders the confirmation dialog', () => {
    render(<Confirmation onConfirm={() => {}} />);
    expect(screen.getByText('Delete Movie')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete this movie?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('calls onConfirm when the confirm button is clicked', async () => {
    const mockOnConfirm = jest.fn();
    render(<Confirmation onConfirm={mockOnConfirm} />);

    await userEvent.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });
});
