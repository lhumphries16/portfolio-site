import { FormEvent, useMemo, useState } from 'react';

type ContactFormProps = {
  audience: 'web' | 'controls';
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

const audienceLabels = {
  web: 'Project call',
  controls: 'Controls consultation',
} as const;

const audienceCopy = {
  web: {
    title: 'Send the project outline.',
    currentLabel: 'Current site or system',
    currentPlaceholder: 'Current site, process, or customer bottleneck',
    scopePlaceholder:
      'What does the current site or digital workflow fail to communicate, and what should a better handoff leave behind?',
  },
  controls: {
    title: 'Send the system outline.',
    currentLabel: 'System or workflow',
    currentPlaceholder: 'Machine, panel, process, or workflow name',
    scopePlaceholder:
      'What is failing or unclear now, and what review, design package, or handoff would actually help your team?',
  },
} as const;

export function ContactForm({ audience, helper, email }: ContactFormProps) {
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
  const copy = audienceCopy[audience];

  const openDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    if (!isValid) {
      return;
    }

    const subjectParts = [audienceLabels[audience]];

    if (values.company.trim()) {
      subjectParts.push(values.company.trim());
    }

    const body = [
      `Inquiry type: ${audienceLabels[audience]}`,
      `Name: ${values.name.trim()}`,
      values.company.trim() ? `Company or team: ${values.company.trim()}` : null,
      `Email: ${values.email.trim()}`,
      values.currentSystem.trim() ? `${copy.currentLabel}: ${values.currentSystem.trim()}` : null,
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
    <form
      className="grid gap-5 rounded-[1.8rem] border border-carbon/10 bg-white p-5 shadow-[0_20px_60px_rgba(24,34,45,0.08)] md:p-6"
      noValidate
      onSubmit={openDraft}
    >
      <div className="grid gap-2">
        <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-carbon/46">
          {audienceLabels[audience]}
        </p>
        <h2 className="m-0 text-[clamp(1.8rem,4vw,2.45rem)] font-semibold leading-[0.97] tracking-[-0.04em] text-carbon">
          {copy.title}
        </h2>
        <p className="m-0 max-w-[40rem] text-[0.98rem] leading-relaxed text-carbon/68">{helper}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-carbon/66">Name</span>
          <input
            required
            aria-invalid={touched && values.name.trim().length === 0}
            className="min-h-12 rounded-[1rem] border border-carbon/12 bg-bone px-4 text-carbon"
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
            className="min-h-12 rounded-[1rem] border border-carbon/12 bg-bone px-4 text-carbon"
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
            className="min-h-12 rounded-[1rem] border border-carbon/12 bg-bone px-4 text-carbon"
            name="email"
            placeholder="you@company.com"
            type="email"
            value={values.email}
            onBlur={() => setTouched(true)}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-carbon/66">{copy.currentLabel}</span>
          <input
            className="min-h-12 rounded-[1rem] border border-carbon/12 bg-bone px-4 text-carbon"
            name="currentSystem"
            placeholder={copy.currentPlaceholder}
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
          className="min-h-40 rounded-[1rem] border border-carbon/12 bg-bone px-4 py-3 text-carbon"
          name="scope"
          placeholder={copy.scopePlaceholder}
          value={values.scope}
          onBlur={() => setTouched(true)}
          onChange={(event) => updateField('scope', event.target.value)}
        />
      </label>

      {showInvalid ? (
        <p className="m-0 rounded-[1rem] border border-cobalt/18 bg-cobalt/6 px-4 py-3 text-sm font-medium text-cobalt">
          Please complete the required fields before opening the email draft.
        </p>
      ) : null}

      <button
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cobalt px-6 text-[0.96rem] font-semibold tracking-[-0.02em] text-white shadow-[0_16px_40px_rgba(191,77,45,0.2)] transition-transform duration-200 hover:-translate-y-[1px] hover:bg-carbon md:w-fit"
        type="submit"
      >
        Open email draft
      </button>
    </form>
  );
}
