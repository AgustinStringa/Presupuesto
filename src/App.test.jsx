import { render, screen } from '@testing-library/react';
import App from './App';

test('renders presupuesto header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /presupuesto/i });
  expect(headerElement).toBeInTheDocument();
});

