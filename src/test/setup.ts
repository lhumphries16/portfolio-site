import '@testing-library/jest-dom';

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
