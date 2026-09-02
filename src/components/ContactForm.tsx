import { FormEvent, useMemo, useState } from 'react';

type ContactFormProps = {
  helper: string;
  email: string;
};

type FormValues = {
  name: string;
  company: string;
  email: string;
  currentSystem: string;
  scope: string;
};

const initialValues: FormValues = {
  name: '',
  company: '',
  email: '',
  currentSystem: '',
  scope: '',
};

const formCopy = {
  eyebrow: 'Email',
  title: 'Send the outline.',
  inquiryLabel: 'Website or controls inquiry',
  currentLabel: 'Current site, system, or workflow',
  currentPlaceholder: 'Business, site, machine, panel, process, or workflow',
  scopePlaceholder:
    'What is not working, what needs to be clearer, and what would a useful next step or handoff look like?',
} as const;

export function ContactForm({ helper, email }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState(false);

  const isValid = useMemo(() => {
    return (
      values.name.trim().length > 0 &&
      values.email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
      values.scope.trim().length > 0
    );
  }, [values]);

  const showInvalid = touched && !isValid;

  const openDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    if (!isValid) {
      return;
    }

    const subjectParts = [formCopy.inquiryLabel];

    if (values.company.trim()) {
      subjectParts.push(values.company.trim());
    }

    const body = [
      `Inquiry type: ${formCopy.inquiryLabel}`,
      `Name: ${values.name.trim()}`,
      values.company.trim() ? `Company or team: ${values.company.trim()}` : null,
      `Email: ${values.email.trim()}`,
      values.currentSystem.trim() ? `${formCopy.currentLabel}: ${values.currentSystem.trim()}` : null,
      '',
      'Scope or problem:',
      values.scope.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subjectParts.join(' | ')
    )}&body=${encodeURIComponent(body)}`;
  };

  const updateField = <Key extends keyof FormValues>(field: Key, value: FormValues[Key]) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  return (
    <form className="surface-card grid gap-5 p-5 md:p-6" noValidate onSubmit={openDraft}>
      <div className="grid gap-3">
        <p className="eyebrow">{formCopy.eyebrow}</p>
        <h2 className="m-0 text-[clamp(1.9rem,4vw,2.5rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-carbon">
          {formCopy.title}
        </h2>
        <p className="body-copy max-w-[40rem]">{helper}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-carbon/66">Name</span>
          <input
            required
            aria-invalid={touched && values.name.trim().length === 0}
            className="min-h-12 rounded-[1rem] border border-carbon/10 bg-paper px-4 text-carbon transition-colors duration-200 focus:border-cobalt/40 focus:bg-white focus:outline-none"
            name="name"
            placeholder="Your name"
            type="text"
            value={values.name}
            onBlur={() => setTouched(true)}
            onChange={(event) => updateField('name', event.target.value)}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-carbon/66">Company or team</span>
          <input
            className="min-h-12 rounded-[1rem] border border-carbon/10 bg-paper px-4 text-carbon transition-colors duration-200 focus:border-cobalt/40 focus:bg-white focus:outline-none"
            name="company"
            placeholder="Company, team, or plant"
            type="text"
            value={values.company}
            onChange={(event) => updateField('company', event.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-carbon/66">Email</span>
          <input
            required
            aria-invalid={touched && (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))}
            className="min-h-12 rounded-[1rem] border border-carbon/10 bg-paper px-4 text-carbon transition-colors duration-200 focus:border-cobalt/40 focus:bg-white focus:outline-none"
            name="email"
            placeholder="you@company.com"
            type="email"
            value={values.email}
            onBlur={() => setTouched(true)}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-carbon/66">{formCopy.currentLabel}</span>
          <input
            className="min-h-12 rounded-[1rem] border border-carbon/10 bg-paper px-4 text-carbon transition-colors duration-200 focus:border-cobalt/40 focus:bg-white focus:outline-none"
            name="currentSystem"
            placeholder={formCopy.currentPlaceholder}
            type="text"
            value={values.currentSystem}
            onChange={(event) => updateField('currentSystem', event.target.value)}
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-carbon/66">Scope or problem</span>
        <textarea
          required
          aria-invalid={touched && values.scope.trim().length === 0}
          className="min-h-40 rounded-[1rem] border border-carbon/10 bg-paper px-4 py-3 text-carbon transition-colors duration-200 focus:border-cobalt/40 focus:bg-white focus:outline-none"
          name="scope"
          placeholder={formCopy.scopePlaceholder}
          value={values.scope}
          onBlur={() => setTouched(true)}
          onChange={(event) => updateField('scope', event.target.value)}
        />
      </label>

      {showInvalid ? (
        <p className="m-0 rounded-[1rem] border border-cobalt/16 bg-cobalt/6 px-4 py-3 text-sm font-medium text-cobalt">
          Please complete the required fields before opening the email draft.
        </p>
      ) : null}

      <button
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-carbon px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-white shadow-[0_18px_44px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#172240] md:w-fit"
        type="submit"
      >
        Open email draft
      </button>
    </form>
  );
}
