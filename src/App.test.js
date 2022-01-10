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

test('contains link to 1 Player Game page', () => {
  render(<App />);

  const link = screen.getByRole('link', {
    name: /1 player game/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toEqual('/game?players=1');
});

test('contains link to 2 Player Game page', () => {
  render(<App />);

  const link = screen.getByRole('link', {
    name: /2 player game/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toEqual('/game?players=2');
});

test('contains link to How to Play page', () => {
  render(<App />);

  const link = screen.getByRole('link', {
    name: /how to play/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toEqual('/howtoplay');
});

test('contains link to Exit', () => {
  render(<App />);

  const link = screen.getByRole('link', {
    name: /exit/i,
  });

  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toEqual('/exit');
});
