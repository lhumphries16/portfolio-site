import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const location = useLocation();
  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      // jsdom does not implement scrollTo.
    }
  };

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);

      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView();
          return;
        }

        scrollToTop();
      });

      return;
    }

    scrollToTop();
  }, [location.hash, location.pathname]);

  return null;
}
