import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

describe('Counter Component', () => {
  test('initially displays 0 as the counter value', () => {
    render(<Counter />);
    const counterValue = screen.getByText(/Counter: 0/i);
    expect(counterValue).toBeInTheDocument();
  });

  test('increments counter value by 1 when the + button is clicked', async () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    await userEvent.click(incrementButton);
    const counterValue = screen.getByText(/Counter: 1/i);
    expect(counterValue).toBeInTheDocument();
  });

  test('decrements counter value by 1 when the - button is clicked', async () => {
    render(<Counter />);
    // Increment first to avoid going into negative for this test case
    const incrementButton = screen.getByText('+');
    await userEvent.click(incrementButton);
    // Then decrement
    const decrementButton = screen.getByText('-');
    await userEvent.click(decrementButton);
    const counterValue = screen.getByText(/Counter: 0/i);
    expect(counterValue).toBeInTheDocument();
  });
});
