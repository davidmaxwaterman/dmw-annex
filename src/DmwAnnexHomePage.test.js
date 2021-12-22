import { render, screen } from '@testing-library/react';
import DmwAnnexHomePage from './DmwAnnexHomePage';

test('renders home page without crashing', () => {
  render( <DmwAnnexHomePage /> );
});
