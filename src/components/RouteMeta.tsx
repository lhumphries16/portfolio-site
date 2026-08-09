import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { profile } from '../data/profile';

type RouteMetaProps = {
  title: string;
  description: string;
};

export function RouteMeta({ title, description }: RouteMetaProps) {
  const location = useLocation();

  useEffect(() => {
    const siteOrigin = `https://${profile.site.domain}`;
    const canonicalUrl = new URL(`${location.pathname}${location.search}`, siteOrigin).toString();

    document.title = title;

    const ensureMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
      const existing = document.head.querySelector<HTMLMetaElement>(selector);
      if (existing) {
        return existing;
      }

      const created = document.createElement('meta');
      created.setAttribute(attribute, value);
      document.head.appendChild(created);
      return created;
    };

    const ensureCanonical = () => {
      const existing = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (existing) {
        return existing;
      }

      const created = document.createElement('link');
      created.rel = 'canonical';
      document.head.appendChild(created);
      return created;
    };

    ensureMeta('meta[name="description"]', 'name', 'description').setAttribute('content', description);
    ensureMeta('meta[property="og:title"]', 'property', 'og:title').setAttribute('content', title);
    ensureMeta('meta[property="og:description"]', 'property', 'og:description').setAttribute('content', description);
    ensureMeta('meta[property="og:url"]', 'property', 'og:url').setAttribute('content', canonicalUrl);
    ensureCanonical().setAttribute('href', canonicalUrl);
  }, [description, location.pathname, location.search, title]);

  return null;
}
