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
    const canonicalUrl = new URL(location.pathname, profile.site.origin).toString();
    const socialImageUrl = profile.site.socialImagePath
      ? new URL(profile.site.socialImagePath, profile.site.origin).toString()
      : null;

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
    ensureMeta('meta[name="twitter:title"]', 'name', 'twitter:title').setAttribute('content', title);
    ensureMeta('meta[name="twitter:description"]', 'name', 'twitter:description').setAttribute(
      'content',
      description
    );
    ensureCanonical().setAttribute('href', canonicalUrl);

    const ogImage = document.head.querySelector<HTMLMetaElement>('meta[property="og:image"]');
    const twitterImage = document.head.querySelector<HTMLMetaElement>('meta[name="twitter:image"]');

    if (socialImageUrl) {
      ensureMeta('meta[property="og:image"]', 'property', 'og:image').setAttribute('content', socialImageUrl);
      ensureMeta('meta[name="twitter:image"]', 'name', 'twitter:image').setAttribute('content', socialImageUrl);
    } else {
      ogImage?.remove();
      twitterImage?.remove();
    }
  }, [description, location.pathname, title]);

  return null;
}
