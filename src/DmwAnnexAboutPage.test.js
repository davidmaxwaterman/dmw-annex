import { render, screen } from '@testing-library/react';
import DmwAnnexAboutPage from './DmwAnnexAboutPage';

test('renders licence page without crashing', () => {
  render( <DmwAnnexAboutPage /> );
});

test('licence text exists', () => {
  render( <DmwAnnexAboutPage /> );

  const text = screen.getByText(/Apache2.0 license/i);

  expect(text).toBeInTheDocument();
});

test('back anchor exists & links to root', () => {
  render( <DmwAnnexAboutPage /> );

  const back = screen.getByRole('link', {
    name: /back/i,
  });

  expect(back).toBeInTheDocument();
  expect(back.getAttribute('href')).toEqual('/');
});
