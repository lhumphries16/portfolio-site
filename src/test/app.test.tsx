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
        name: /whole-system engineer/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/i build systems that have to work/i)).toBeInTheDocument();

    expect(document.title).toBe('Tre Humphries | Whole-System Engineer');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toMatch(
      /whole-system engineer/i
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://trehumphries.com/'
    );
  });

  it('renders the industrial page', async () => {
    renderRoute('/industrial');

    expect(
      await screen.findByRole('heading', {
        name: /controls, machines, hardware, and the systems around them/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/defined packages, not open-ended ownership/i)).toBeInTheDocument();
    expect(document.title).toBe('Industrial & Controls | Tre Humphries');
  });

  it('renders the web page', async () => {
    renderRoute('/web');

    expect(
      await screen.findByRole('heading', {
        name: /websites that look sharp, work cleanly, and hold up after handoff/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/website gallery/i)).toBeInTheDocument();
    expect(screen.getAllByText(/homeems/i).length).toBeGreaterThan(0);
    expect(document.title).toBe('Web & Digital Systems | Tre Humphries');
  });

  it('renders the about page', async () => {
    renderRoute('/about');

    expect(
      await screen.findByRole('heading', {
        name: /whole-system engineer/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/my work usually lands where hardware, controls, software/i)).toBeInTheDocument();
    expect(document.title).toBe('About | Tre Humphries');
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

    expect(screen.getAllByText(/controls systems audit/i).length).toBeGreaterThan(0);
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

  it('renders the index route and honors filter search params', async () => {
    renderRoute('/index?type=experiment&domain=embedded&from=2019&to=2019');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /personal archive. working catalog./i,
      })
    ).toBeInTheDocument();

    const timelineRegion = screen.getByRole('region', { name: /archive timeline/i });

    expect(within(timelineRegion).getAllByText(/servo spider/i).length).toBeGreaterThan(0);
    expect(within(timelineRegion).getAllByText(/jumper robot/i).length).toBeGreaterThan(0);
    expect(within(timelineRegion).queryByText(/homeems/i)).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /experiments/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /embedded/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('artifact-year-range-start')).toHaveValue('2019');
    expect(screen.getByTestId('artifact-year-range-end')).toHaveValue('2019');
    expect(document.title).toBe('The Index | Tre Humphries');
  });

  it('redirects the legacy living cv route to the index route', async () => {
    renderRoute('/living-cv?type=experiment&domain=embedded&from=2019&to=2019');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /personal archive. working catalog./i,
      })
    ).toBeInTheDocument();

    expect(window.location.pathname).toBe('/index');
    expect(window.location.search).toBe('?type=experiment&domain=embedded&from=2019&to=2019');
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

  it('navigates to the about page from another route', async () => {
    renderRoute('/projects');

    fireEvent.click(screen.getByRole('link', { name: /^about$/i }));

    await waitFor(() => {
      expect(window.location.pathname).toBe('/about');
    });

    expect(
      screen.getByRole('heading', {
        name: /whole-system engineer/i,
      })
    ).toBeInTheDocument();
  });

  it('opens the shared contact chooser from the header', async () => {
    renderRoute('/');

    fireEvent.click(screen.getAllByRole('button', { name: /contact/i })[0]);

    expect(await screen.findByRole('dialog', { name: /reach tre directly/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email me trehumphries16@gmail.com/i })).toHaveAttribute(
      'href',
      'mailto:trehumphries16@gmail.com'
    );
    expect(screen.getByRole('link', { name: /call or text \(573\) 933-0405/i })).toHaveAttribute(
      'href',
      'tel:5739330405'
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('dialog', { name: /reach tre directly/i })).not.toBeInTheDocument();
    });
  });

  it('clamps invalid year params back to the full artifact timeline', async () => {
    renderRoute('/index?from=9999&to=2010');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /personal archive. working catalog./i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId('artifact-year-range-start')).toHaveValue('2014');
    expect(screen.getByTestId('artifact-year-range-end')).toHaveValue('2026');
    expect(screen.queryByRole('button', { name: /reset/i })).not.toBeInTheDocument();
  });

  it('resets a narrowed year range back to the full timeline and clears year params', async () => {
    renderRoute('/index?from=2019&to=2024');

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /personal archive. working catalog./i,
      })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /reset/i }));

    await waitFor(() => {
      expect(screen.getByTestId('artifact-year-range-start')).toHaveValue('2014');
      expect(screen.getByTestId('artifact-year-range-end')).toHaveValue('2026');
      expect(window.location.search).toBe('');
    });
  });
});
