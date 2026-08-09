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
        name: /i build the systems between the machine and the business/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: /view consulting/i,
      })
    ).toBeInTheDocument();
  });

  it('renders the consulting page', () => {
    renderRoute('/consulting');

    expect(
      screen.getByRole('heading', {
        name: /scoped engineering work with clear deliverables and a clean handoff/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/controls audit and design-for-hire/i)).toBeInTheDocument();
  });

  it('renders the projects index page', () => {
    renderRoute('/projects');

    expect(
      screen.getByRole('heading', {
        name: /independent engineering work i am actively building now/i,
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
