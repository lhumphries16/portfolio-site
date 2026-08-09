import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserPreview } from '../components/BrowserPreview';

describe('BrowserPreview', () => {
  it('renders image previews', () => {
    render(
      <BrowserPreview
        preview={{
          previewMode: 'image',
          previewSrc: '/images/tre-panel-work-normalized.jpg',
          previewAlt: 'Client site screenshot',
          previewTitle: 'Client site screenshot',
        }}
      />
    );

    expect(screen.getByRole('img', { name: /client site screenshot/i })).toBeInTheDocument();
  });

  it('renders video previews', () => {
    render(
      <BrowserPreview
        preview={{
          previewMode: 'video',
          previewSrc: '/media/client-preview.mp4',
          previewTitle: 'Client preview video',
        }}
      />
    );

    expect(screen.getByLabelText(/client preview video/i).tagName).toBe('VIDEO');
  });

  it('renders iframe previews', () => {
    render(
      <BrowserPreview
        preview={{
          previewMode: 'iframe',
          previewSrc: 'https://example.com',
          previewTitle: 'Embedded client site',
        }}
      />
    );

    expect(screen.getByTitle(/embedded client site/i)).toHaveAttribute('src', 'https://example.com');
    expect(screen.getByRole('button', { name: /interact/i })).toBeInTheDocument();
  });

  it('falls back cleanly when preview media is unavailable', () => {
    render(
      <BrowserPreview
        preview={{
          previewMode: 'image',
          previewSrc: '/missing-image.jpg',
          previewAlt: 'Missing preview',
          previewTitle: 'Fallback preview',
        }}
        fallback={{
          title: 'Fallback preview',
          note: 'Approved media has not been added yet.',
          lines: ['live site', 'future capture'],
        }}
      />
    );

    fireEvent.error(screen.getByRole('img', { name: /missing preview/i }));

    expect(screen.getByText(/approved media has not been added yet/i)).toBeInTheDocument();
    expect(screen.getByText(/fallback preview/i)).toBeInTheDocument();
  });
});
