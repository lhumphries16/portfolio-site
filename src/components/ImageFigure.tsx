import type { ImageAsset } from '../data/types';

type ImageFigureProps = {
  image: ImageAsset;
  loading?: 'eager' | 'lazy';
};

export function ImageFigure({ image, loading = 'lazy' }: ImageFigureProps) {
  return (
    <figure className="project-figure">
      <div className={`image-frame ${image.className ?? ''}`.trim()}>
        <img
          src={image.src}
          alt={image.alt}
          loading={loading}
          className="project-image"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 560px"
        />
      </div>
      {image.caption ? <figcaption className="project-caption">{image.caption}</figcaption> : null}
    </figure>
  );
}
