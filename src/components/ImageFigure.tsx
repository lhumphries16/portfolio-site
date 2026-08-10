import type { ImageAsset } from '../data/types';

type ImageFigureProps = {
  image: ImageAsset;
  loading?: 'eager' | 'lazy';
};

export function ImageFigure({ image, loading = 'lazy' }: ImageFigureProps) {
  return (
    <figure className="grid gap-3">
      <div className={`overflow-hidden bg-carbon ${image.className ?? ''}`.trim()}>
        <img
          src={image.src}
          alt={image.alt}
          loading={loading}
          className="h-full w-full object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 80vw, 560px"
        />
      </div>
      {image.caption ? (
        <figcaption className="font-mono text-[0.63rem] uppercase tracking-[0.2em] text-steel">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
