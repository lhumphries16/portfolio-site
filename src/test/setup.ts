import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  }),
});

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => undefined,
});

Object.defineProperty(window, 'requestAnimationFrame', {
  writable: true,
  value: (callback: FrameRequestCallback) => {
    callback(0);
    return 0;
  },
});

Object.defineProperty(window.HTMLElement.prototype, 'scrollIntoView', {
  writable: true,
  value: () => undefined,
});

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  },
});

vi.mock('react-pdf', () => ({
  pdfjs: {
    GlobalWorkerOptions: {},
  },
  Document: ({
    children,
  }: {
    children: React.ReactNode;
  }) => React.createElement('div', { className: 'react-pdf__Document' }, children),
  Page: ({
    pageNumber,
    width,
  }: {
    pageNumber: number;
    width?: number;
  }) =>
    React.createElement('div', {
      className: 'react-pdf__Page',
      'data-testid': 'react-pdf-page',
      'data-page-number': pageNumber,
      'data-width': width,
    }),
}));
