import { useEffect, useId, useRef, useState } from 'react';

type ContactMethod = {
  label: string;
  href: string;
  value: string;
};

type ContactCTAProps = {
  className?: string;
  ctaLabel?: string;
  dialogTitle?: string;
  methods: readonly ContactMethod[];
  variant?: 'header' | 'section';
};

const buttonStyles = {
  header:
    'min-h-[2.7rem] rounded-full bg-cobalt px-4 text-[0.9rem] font-medium tracking-[-0.01em] text-bone hover:bg-carbon',
  section:
    'min-h-[3.1rem] rounded-full bg-cobalt px-5 text-[0.96rem] font-medium tracking-[-0.01em] text-bone hover:bg-carbon',
} as const;

export function ContactCTA({
  className = '',
  ctaLabel = 'Contact',
  dialogTitle = 'Choose a contact method',
  methods,
  variant = 'header',
}: ContactCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isMobile) {
      document.body.style.overflow = 'hidden';
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    const frame = window.requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      window.cancelAnimationFrame(frame);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        className={`inline-flex w-full items-center justify-center gap-2 transition-colors duration-200 focus-visible:outline-none md:w-auto ${buttonStyles[variant]}`}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{ctaLabel}</span>
        <span aria-hidden="true">&rarr;</span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 opacity-100 transition-opacity duration-200 md:absolute md:top-[calc(100%+0.9rem)] md:right-0 md:left-auto md:inset-auto">
          <div className="absolute inset-0 bg-carbon/18 backdrop-blur-[1px] md:hidden" />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute right-4 bottom-4 left-4 grid gap-4 rounded-[1.25rem] border border-carbon/10 bg-[#f8f4ec] p-5 shadow-[0_24px_80px_rgba(16,19,23,0.12)] md:relative md:right-auto md:bottom-auto md:left-auto md:w-[20rem] md:p-4"
          >
            <div className="grid gap-1.5">
              <p id={titleId} className="m-0 text-[1.02rem] font-semibold tracking-[-0.02em] text-carbon">
                {dialogTitle}
              </p>
              <p className="m-0 text-sm leading-relaxed text-carbon/62">
                Quick direct contact, no extra routing.
              </p>
            </div>

            <div className="grid gap-0.5 border-t border-carbon/10 pt-2">
              {methods.map((method, index) => (
                <a
                  key={method.href}
                  ref={index === 0 ? firstLinkRef : null}
                  className="grid gap-1 border-b border-carbon/10 px-0 py-3 transition-colors duration-200 last:border-b-0 hover:text-cobalt"
                  href={method.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-carbon">
                    {method.label}
                  </span>
                  <span className="text-sm leading-relaxed text-carbon/58">{method.value}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
