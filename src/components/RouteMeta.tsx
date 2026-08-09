import { useEffect } from 'react';

type RouteMetaProps = {
  title: string;
  description: string;
};

export function RouteMeta({ title, description }: RouteMetaProps) {
  useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description);
      return;
    }

    const created = document.createElement('meta');
    created.name = 'description';
    created.content = description;
    document.head.appendChild(created);
  }, [description, title]);

  return null;
}

