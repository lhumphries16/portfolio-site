import { FormEvent, useMemo, useState } from 'react';

type ContactFormProps = {
  helper: string;
  success: string;
  error: string;
  submitLabel: string;
  email: string;
};

type FormValues = {
  name: string;
  company: string;
  email: string;
  problem: string;
};

const initialValues: FormValues = {
  name: '',
  company: '',
  email: '',
  problem: '',
};

export function ContactForm({
  helper,
  success,
  error,
  submitLabel,
  email,
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState(false);

  const isValid = useMemo(() => {
    return (
      values.name.trim().length > 0 &&
      values.email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
      values.problem.trim().length > 0
    );
  }, [values]);

  const showInvalid = touched && !isValid;
  const showValid = touched && isValid;

  const openDraft = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    if (!isValid) {
      return;
    }

    const subjectParts = ['Portfolio inquiry'];
    if (values.company.trim()) {
      subjectParts.push(values.company.trim());
    }

    const body = [
      `Name: ${values.name.trim()}`,
      values.company.trim() ? `Company or team: ${values.company.trim()}` : null,
      `Email: ${values.email.trim()}`,
      '',
      'Problem:',
      values.problem.trim(),
    ]
      .filter(Boolean)
      .join('\n');

    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subjectParts.join(' | ')
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <form
      className="grid gap-5"
      noValidate
      onSubmit={openDraft}
    >
      <div className="grid gap-2.5">
        <label
          className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cobalt"
          htmlFor="contact-name"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          aria-invalid={touched && values.name.trim().length === 0}
          placeholder="Your name"
          className="min-h-12 border-0 border-b border-carbon/18 bg-transparent px-0 py-3 text-base text-carbon placeholder:text-carbon/48"
          value={values.name}
          onBlur={() => setTouched(true)}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
        />
      </div>

      <div className="grid gap-2.5">
        <label
          className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cobalt"
          htmlFor="contact-company"
        >
          Company or team <span className="text-carbon/52">optional</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder="Company, plant, or team"
          className="min-h-12 border-0 border-b border-carbon/18 bg-transparent px-0 py-3 text-base text-carbon placeholder:text-carbon/48"
          value={values.company}
          onChange={(event) =>
            setValues((current) => ({ ...current, company: event.target.value }))
          }
        />
      </div>

      <div className="grid gap-2.5">
        <label
          className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cobalt"
          htmlFor="contact-email"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          aria-invalid={touched && (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))}
          placeholder="you@company.com"
          className="min-h-12 border-0 border-b border-carbon/18 bg-transparent px-0 py-3 text-base text-carbon placeholder:text-carbon/48"
          value={values.email}
          onBlur={() => setTouched(true)}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
        />
      </div>

      <div className="grid gap-2.5">
        <label
          className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-cobalt"
          htmlFor="contact-problem"
        >
          Tell me about the problem
        </label>
        <textarea
          id="contact-problem"
          name="problem"
          required
          aria-invalid={touched && values.problem.trim().length === 0}
          placeholder="What is happening today, where does it break down, and what would better look like?"
          className="min-h-36 border-0 border-b border-carbon/18 bg-transparent px-0 py-3 text-base text-carbon placeholder:text-carbon/48"
          value={values.problem}
          onBlur={() => setTouched(true)}
          onChange={(event) =>
            setValues((current) => ({ ...current, problem: event.target.value }))
          }
        />
      </div>

      <p className="m-0 max-w-[34rem] text-sm leading-relaxed text-carbon/68">{helper}</p>
      <div aria-live="polite">
        {showValid ? (
          <p className="border-t border-carbon/12 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-active">
            {success}
          </p>
        ) : null}
        {showInvalid ? (
          <p className="border-t border-carbon/12 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-orange">
            {error}
          </p>
        ) : null}
      </div>
      <button
        className="inline-flex min-h-12 w-full items-center justify-center bg-orange px-5 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-carbon transition-colors duration-200 hover:bg-carbon hover:text-bone md:w-fit"
        type="submit"
      >
        {submitLabel}
      </button>
    </form>
  );
}
