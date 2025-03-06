import { render, screen } from '@testing-library/react';
import App from './App';

test('kontrollon nëse renderohet teksti', () => {
  render(<App />);
  const textElement = screen.getByText(/Ultrawebthinking është LIVE/i);
  expect(textElement).toBeInTheDocument();
});

