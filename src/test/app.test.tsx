import { render, screen } from '@testing-library/react';
import App from '../App';

function renderRoute(route: string) {
  window.history.pushState({}, '', route);
  render(<App />);
}

describe('App', () => {
  it('renders the core homepage messaging', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        name: /tre humphries/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/i design and build physical systems, controls, and the software around them/i)
    ).toBeInTheDocument();
  });

  it('renders the experience page', () => {
    renderRoute('/experience');

    expect(
      screen.getByRole('heading', {
        name: /corporate engineering/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/gaf roads \/ standard industries/i)).toBeInTheDocument();
  });

  it('renders the client work page', () => {
    renderRoute('/client-work');

    expect(
      screen.getByRole('heading', {
        name: /independent delivery for paying clients/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/website \+ lead \/ service-area system/i)).toBeInTheDocument();
  });

  it('renders the consulting page', () => {
    renderRoute('/consulting');

    expect(
      screen.getByRole('heading', {
        name: /scoped engineering work with clear deliverables and a clean handoff/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/controls audit & design-for-hire/i)).toBeInTheDocument();
  });

  it('renders the projects index page', () => {
    renderRoute('/projects');

    expect(
      screen.getByRole('heading', {
        name: /independent technical work built out of curiosity/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/programmable flying creatures/i)).toBeInTheDocument();
  });

  it('renders a project detail page from the slug route', () => {
    renderRoute('/projects/flying-creatures');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /programmable flying creatures/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/^Questions$/i)).toBeInTheDocument();
  });
});
