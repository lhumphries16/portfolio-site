import type { Project } from '../data/types';

type ProjectHeroMediaProps = {
  project: Project;
  loading?: 'eager' | 'lazy';
};

export function ProjectHeroMedia({ project, loading = 'lazy' }: ProjectHeroMediaProps) {
  if (!project.heroMediaType || !project.heroMediaSrc) {
    return null;
  }

  return (
    <figure className="grid gap-3">
      <div className="overflow-hidden bg-carbon">
        {project.heroMediaType === 'image' ? (
          <img
            src={project.heroMediaSrc}
            alt={project.heroMediaAlt ?? ''}
            loading={loading}
            className="h-full w-full object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 720px"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={project.posterSrc}
            aria-label={project.heroMediaTitle ?? project.title}
          >
            <source src={project.heroMediaSrc} />
            <p>Project video preview unavailable. Use the project links or contact details below.</p>
          </video>
        )}
      </div>
      {project.heroMediaCaption ? (
        <figcaption className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-steel">
          {project.heroMediaCaption}
        </figcaption>
      ) : null}
    </figure>
  );
}
