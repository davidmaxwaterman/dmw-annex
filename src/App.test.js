import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome page without crashing', () => {
  render(<App />);
});

test('contains link to about page', () => {
  render(<App />);

  const link = screen.getByRole('link', {
    name: /about/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toEqual('/about');
});

test('contains link to home page', () => {
  render(<App />);

  const link = screen.getByRole('link', {
    name: /home/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toEqual('/');
});
