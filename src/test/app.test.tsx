import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { within } from '@testing-library/react';
import App from '../App';

function renderRoute(route: string) {
  window.history.pushState({}, '', route);
  render(<App />);
}

describe('App', () => {
  it('renders the core homepage messaging and strips query params from the canonical url', async () => {
    renderRoute('/?utm_source=instagram');

    expect(
      await screen.findByRole('heading', {
        name: /tre humphries/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/i design and build physical systems, controls, and the software around them/i)
    ).toBeInTheDocument();

    expect(document.title).toBe('Tre Humphries | Mechanical Engineer & Systems Builder');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toMatch(
      /mechanical engineer and systems builder/i
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://trehumphries.com/'
    );
  });

  it('renders the experience page', async () => {
    renderRoute('/experience');

    expect(
      await screen.findByRole('heading', {
        name: /corporate engineering/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/gaf roads \/ standard industries/i)).toBeInTheDocument();
  });

  it('renders the client work page', async () => {
    renderRoute('/client-work');

    expect(
      await screen.findByRole('heading', {
        name: /independent delivery for paying clients/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/website \+ lead \/ service-area system/i)).toBeInTheDocument();
    expect(document.title).toBe('Client Work | Tre Humphries');

    const liveSiteLinks = screen.getAllByRole('link', { name: /open live site/i });
    expect(liveSiteLinks).toHaveLength(2);
    expect(liveSiteLinks[0]).toHaveAttribute('href', 'https://allseasonsmo.com/home/');
    expect(liveSiteLinks[1]).toHaveAttribute('href', 'https://www.home-ems.net/');
  });

  it('renders the consulting page', async () => {
    renderRoute('/consulting');

    expect(
      await screen.findByRole('heading', {
        name: /scoped engineering work with clear deliverables and a clean handoff/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/controls audit & design-for-hire/i)).toBeInTheDocument();
  });

  it('renders the projects index page', async () => {
    renderRoute('/projects');

    expect(
      await screen.findByRole('heading', {
        name: /independent technical work built out of curiosity/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/programmable flying creatures/i)).toBeInTheDocument();
    expect(document.title).toBe('Engineering Projects | Tre Humphries');
  });

  it('renders the living cv route and honors filter search params', async () => {
    renderRoute('/living-cv?type=experiment&domain=embedded');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /living cv/i,
      })
    ).toBeInTheDocument();

    const timelineRegion = screen.getByRole('region', { name: /archive timeline/i });

    expect(within(timelineRegion).getAllByText(/servo spider/i).length).toBeGreaterThan(0);
    expect(within(timelineRegion).queryByText(/homeems/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /experiments/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /embedded/i })).toHaveAttribute('aria-pressed', 'true');
    expect(document.title).toBe('Living CV | Tre Humphries');
  });

  it('renders a project detail page from the slug route', async () => {
    renderRoute('/projects/flying-creatures');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /programmable flying creatures/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/^Questions$/i)).toBeInTheDocument();
    expect(document.title).toBe('Programmable Flying Creatures | Tre Humphries');
  });

  it('renders the cv page with embedded pdf controls', async () => {
    renderRoute('/cv');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /current cv/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId('cv-pdf-viewer')).toHaveAttribute('data-pdf-url', '/cv/tre-humphries-cv.pdf');
    expect(screen.getByTestId('react-pdf-page')).toHaveAttribute('data-page-number', '1');
    expect(screen.getAllByRole('link', { name: /open pdf/i })[0]).toHaveAttribute(
      'href',
      '/cv/tre-humphries-cv.pdf'
    );
    expect(screen.getAllByRole('link', { name: /download pdf/i })[0]).toHaveAttribute(
      'href',
      '/cv/tre-humphries-cv.pdf'
    );
    expect(document.title).toBe('CV | Tre Humphries');
  });

  it('fails gracefully for an invalid project slug', async () => {
    renderRoute('/projects/not-a-real-project');

    expect(await screen.findByText(/that project page does not exist/i)).toBeInTheDocument();
    expect(document.title).toBe('Project Not Found | Tre Humphries');
  });

  it('navigates homepage anchors correctly from another route', async () => {
    renderRoute('/projects');

    fireEvent.click(screen.getByRole('link', { name: /^about$/i }));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
      expect(window.location.hash).toBe('#about');
    });

    expect(
      screen.getByRole('heading', {
        name: /a mechanical engineer who keeps getting pulled toward the full system/i,
      })
    ).toBeInTheDocument();
  });
});
