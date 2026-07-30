import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('opens and closes a project details modal', () => {
  render(<App />);

  fireEvent.click(screen.getAllByRole('button', { name: /view more/i })[0]);

  expect(screen.getByRole('dialog')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /close self-playing flute details/i }));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
