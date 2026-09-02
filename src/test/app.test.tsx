import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

function renderRoute(route: string) {
  window.history.pushState({}, '', route);
  render(<App />);
}

afterEach(() => {
  cleanup();
  window.history.pushState({}, '', '/');
});

describe('App', () => {
  it('renders the homepage and strips query params from the canonical url', async () => {
    renderRoute('/?utm_source=instagram');

    expect(
      await screen.findByRole('heading', {
        name: /tre humphries turns messy requirements into clear working systems/i,
      })
    ).toBeInTheDocument();

    expect(document.title).toBe('Tre Humphries | Websites & Controls for Real Operating Businesses');
    expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toMatch(
      /established service businesses/i
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://trehumphries.com/'
    );
  });

  it('renders the web page with the approved pricing language', async () => {
    renderRoute('/web');

    expect(
      await screen.findByRole('heading', {
        name: /websites and digital systems for established service businesses and local brands/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/website engagements typically start around \$3,000/i)).toBeInTheDocument();
    expect(document.title).toBe('Web & Digital | Tre Humphries');
  });

  it('renders the controls page with bounded offer language', async () => {
    renderRoute('/controls');

    expect(
      await screen.findByRole('heading', {
        name: /scoped controls engineering for teams that need senior clarity/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/controls audit/i)).toBeInTheDocument();
    expect(screen.getByText(/controls design-for-hire/i)).toBeInTheDocument();
    expect(screen.getByText(/process & information flow audit/i)).toBeInTheDocument();
    expect(document.title).toBe('Controls Engineering | Tre Humphries');
  });

  it('renders the selected work page with the flagship and secondary case study', async () => {
    renderRoute('/work');

    expect(
      await screen.findByRole('heading', {
        name: /curated proof, not a dump of everything/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/homeems/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/bsb order system/i).length).toBeGreaterThan(0);
  });

  it('renders the homeems case study page', async () => {
    renderRoute('/work/homeems');

    expect(
      await screen.findByRole('heading', {
        name: /^homeems$/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/follow-on search strategy/i)).toBeInTheDocument();
    expect(screen.getByText(/130 relevant search terms/i)).toBeInTheDocument();
    expect(document.title).toBe('HomeEMS | Tre Humphries');
  });

  it('renders the order-system case study page', async () => {
    renderRoute('/work/brazilian-sweet-bites-order-system');

    expect(
      await screen.findByRole('heading', {
        name: /brazilian sweet bites order system/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/event and bulk orders/i).length).toBeGreaterThan(0);
  });

  it('renders the contact page and switches focus using the query param', async () => {
    renderRoute('/contact?focus=controls');

    expect(
      await screen.findByRole('heading', {
        name: /start with the real problem/i,
      })
    ).toBeInTheDocument();

    expect(screen.getAllByText(/schedule a controls consultation/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /send the system outline/i })).toBeInTheDocument();
    expect(screen.getByText(/the best first note names the system/i)).toBeInTheDocument();
  });

  it('opens a project-call draft from the contact page after valid form input', async () => {
    renderRoute('/contact?focus=web');
    const originalLocation = window.location;
    let assignedHref = '';

    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        ...originalLocation,
        pathname: '/contact',
        search: '?focus=web',
        set href(value: string) {
          assignedHref = value;
        },
        get href() {
          return assignedHref || originalLocation.href;
        },
      },
    });

    try {
      fireEvent.change(await screen.findByLabelText(/^name$/i), { target: { value: 'Tre Tester' } });
      fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'tre@example.com' } });
      fireEvent.change(screen.getByLabelText(/scope or problem/i), {
        target: { value: 'Need a better service-business site.' },
      });
      fireEvent.click(screen.getByRole('button', { name: /open email draft/i }));

      expect(assignedHref).toContain('mailto:trehumphries16@gmail.com');
      expect(assignedHref).toContain(encodeURIComponent('Project call'));
    } finally {
      Object.defineProperty(window, 'location', {
        configurable: true,
        value: originalLocation,
      });
    }
  });

  it('redirects legacy commercial routes', async () => {
    renderRoute('/industrial');

    await waitFor(() => {
      expect(window.location.pathname).toBe('/controls');
    });

    expect(
      await screen.findByRole('heading', {
        name: /scoped controls engineering/i,
      })
    ).toBeInTheDocument();
  });

  it('redirects the legacy archive route to the curated work page', async () => {
    renderRoute('/living-cv?from=2019');

    await waitFor(() => {
      expect(window.location.pathname).toBe('/work');
      expect(window.location.search).toBe('?from=2019');
    });
  });

  it('redirects a legacy project slug to the new case study route when available', async () => {
    renderRoute('/projects/homeems');

    await waitFor(() => {
      expect(window.location.pathname).toBe('/work/homeems');
    });
  });

  it('renders a not found page for unknown routes', async () => {
    renderRoute('/not-a-real-page');

    expect(await screen.findByText(/not part of the current public site/i)).toBeInTheDocument();
    expect(document.title).toBe('Page Not Found | Tre Humphries');
  });
});
