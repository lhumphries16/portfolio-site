type SystemRailProps = {
  label: string;
  index?: string;
  className?: string;
  labelClassName?: string;
  lineClassName?: string;
  markerClassName?: string;
};

export function SystemRail({
  label,
  index,
  className = '',
  labelClassName = '',
  lineClassName = '',
  markerClassName = '',
}: SystemRailProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      {index ? (
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-steel/60">
          {index}
        </span>
      ) : null}
      <span className={`h-px w-11 bg-cobalt/60 ${lineClassName}`.trim()} aria-hidden="true" />
      <span
        className={`h-1.5 w-1.5 rounded-full bg-cobalt/30 ${markerClassName}`.trim()}
        aria-hidden="true"
      />
      <span
        className={`font-mono text-[0.66rem] uppercase tracking-[0.24em] ${labelClassName}`.trim()}
      >
        {label}
      </span>
    </div>
  );
}
