import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AC button', () => {
  render(<App />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
