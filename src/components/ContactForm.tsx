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
      className={`contact-form${touched ? ' is-touched' : ''}${showInvalid ? ' is-invalid' : ''}${showValid ? ' is-valid' : ''}`}
      noValidate
      onSubmit={openDraft}
    >
      <div className="contact-form__field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          aria-invalid={touched && values.name.trim().length === 0}
          placeholder="Your name"
          value={values.name}
          onBlur={() => setTouched(true)}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-company">
          Company or team <span>optional</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          placeholder="Company, plant, or team"
          value={values.company}
          onChange={(event) =>
            setValues((current) => ({ ...current, company: event.target.value }))
          }
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          aria-invalid={touched && (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))}
          placeholder="you@company.com"
          value={values.email}
          onBlur={() => setTouched(true)}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-problem">Tell me about the problem</label>
        <textarea
          id="contact-problem"
          name="problem"
          required
          aria-invalid={touched && values.problem.trim().length === 0}
          placeholder="What is happening today, where does it break down, and what would better look like?"
          value={values.problem}
          onBlur={() => setTouched(true)}
          onChange={(event) =>
            setValues((current) => ({ ...current, problem: event.target.value }))
          }
        />
      </div>

      <p className="contact-form__helper">{helper}</p>
      <div className="contact-form__status" aria-live="polite">
        <p className="form-state form-state--success">{success}</p>
        <p className="form-state form-state--error">{error}</p>
      </div>
      <button className="button button--primary button--submit" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
