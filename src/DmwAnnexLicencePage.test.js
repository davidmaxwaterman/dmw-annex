import { render, screen } from '@testing-library/react';
import DmwAnnexLicencePage from './DmwAnnexLicencePage';

test('renders licence page without crashing', () => {
    render( < DmwAnnexLicencePage / > );
});

test('scroller exists', () => {
    const dom = render( < DmwAnnexLicencePage / > );
    const { container } = dom;
    const scroller = container.querySelector('.scroller');

    expect(scroller).toBeInTheDocument();
});

test('scroller fills viewport', () => {
    const dom = render( < DmwAnnexLicencePage / > );
    const { container } = dom;
    const scroller = container.querySelector('.scroller');

    screen.debug();

    expect(scroller).toBeInTheDocument();
});

test('back anchor exists', () => {
    render( < DmwAnnexLicencePage / > );

    const back = screen.getByText(/back/i);

    expect(back).toBeInTheDocument();
    expect(back.getAttribute('href')).toEqual('/');
});