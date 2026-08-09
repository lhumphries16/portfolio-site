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
    <figure className="project-figure">
      <div className="image-frame">
        {project.heroMediaType === 'image' ? (
          <img
            src={project.heroMediaSrc}
            alt={project.heroMediaAlt ?? ''}
            loading={loading}
            className="project-image"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 720px"
          />
        ) : (
          <video
            className="project-image"
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
        <figcaption className="project-caption">{project.heroMediaCaption}</figcaption>
      ) : null}
    </figure>
  );
}

