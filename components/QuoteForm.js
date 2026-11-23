import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CONTACT } from './site';
import { CheckIcon } from './icons';

// Netlify Forms picks this form up at build time and stores the submissions.
// After a successful submit Netlify redirects to the form's `action`, and the
// `?sent=true` in it tells this component to show the thank-you message.

const BUILDING_TYPES = [
  'Education or school',
  'Office',
  'Waiting room or reception',
  'Restaurant or hospitality',
  'Wedding or event venue',
  'Hotel',
  'Hair or beauty salon',
  'End of tenancy or void',
  'Insurance referral',
  'Other',
];

// `name` is the label Netlify shows in the submission, so it's written for people, not code.
const FIELDS = [
  {
    id: 'f-name',
    name: 'Name',
    label: 'Name',
    type: 'text',
    autoComplete: 'name',
    error: 'Please enter your name.',
  },
  {
    id: 'f-company',
    name: 'Company',
    label: 'Company',
    type: 'text',
    autoComplete: 'organization',
    error: 'Please enter your company.',
  },
  {
    id: 'f-email',
    name: 'Email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    error: 'Please enter a valid email address.',
  },
  {
    id: 'f-phone',
    name: 'Phone',
    label: 'Phone',
    type: 'tel',
    autoComplete: 'tel',
    error: 'Please enter a phone number.',
  },
  {
    id: 'f-type',
    name: 'Building type',
    label: 'Building type',
    type: 'select',
    options: BUILDING_TYPES,
    error: 'Please choose a building type.',
  },
  {
    id: 'f-postcode',
    name: 'Postcode',
    label: 'Postcode',
    type: 'text',
    autoComplete: 'postal-code',
    error: 'Please enter a postcode.',
  },
  {
    id: 'f-freq',
    name: 'How often you need cleaning',
    label: 'How often you need cleaning',
    type: 'text',
    full: true,
    error: 'Please tell us how often you need cleaning.',
  },
  {
    id: 'f-msg',
    name: 'Message',
    label: 'Message',
    type: 'textarea',
    full: true,
    error: 'Please add a short message.',
  },
];

export default function QuoteForm() {
  const thanksRef = useRef(null);
  const [invalid, setInvalid] = useState({}); // field id -> true when showing an error
  const [sent, setSent] = useState(false);

  // Netlify redirects back here with ?sent=true after a successful submission.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('sent') === 'true') {
      setSent(true);
      setTimeout(() => thanksRef.current && thanksRef.current.focus(), 0);
    }
  }, []);

  // Uses the browser's built-in validity (required, email format) and records the result.
  const check = (el) => {
    const ok = el.checkValidity();
    setInvalid((prev) => ({ ...prev, [el.id]: !ok }));
    return ok;
  };

  const onBlur = (e) => {
    if (e.target.value) check(e.target);
  };

  const onChange = (e) => {
    if (invalid[e.target.id]) check(e.target);
  };

  // Fires for each invalid field when the browser blocks a submit, so every error shows inline.
  const onInvalid = (e) => {
    setInvalid((prev) => ({ ...prev, [e.target.id]: true }));
  };

  return (
    <div id="quote" className="form-card">
      <form
        data-netlify="true"
        data-netlify-honeypot="website"
        name="contact"
        id="quote-form"
        method="POST"
        action="/contact?sent=true#quote"
        style={sent ? { display: 'none' } : undefined}
      >
        <h2>Quote form</h2>
        <div className="form-grid">
          {FIELDS.map((f) => {
            const errId = `${f.id}-err`;
            const common = {
              id: f.id,
              name: f.name,
              required: true,
              'aria-required': 'true',
              'aria-invalid': invalid[f.id] ? 'true' : 'false',
              'aria-describedby': errId,
              onBlur,
              onChange,
              onInvalid,
            };
            return (
              <div
                className={`field${f.full ? ' full' : ''}${invalid[f.id] ? ' invalid' : ''}`}
                key={f.id}
              >
                <label htmlFor={f.id}>{f.label}</label>
                {f.type === 'select' ? (
                  <select {...common} defaultValue="">
                    <option value="">Please choose</option>
                    {f.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : f.type === 'textarea' ? (
                  <textarea {...common}></textarea>
                ) : (
                  <input
                    {...common}
                    type={f.type}
                    autoComplete={f.autoComplete}
                  />
                )}
                <span className="err" id={errId}>
                  {f.error}
                </span>
              </div>
            );
          })}
          <div className="hp" aria-hidden="true">
            <label htmlFor="f-web">Website</label>
            <input id="f-web" name="website" tabIndex={-1} autoComplete="off" />
          </div>
        </div>
        <div className="form-foot">
          <p>
            We&apos;ll use your details to respond to your enquiry. See our{' '}
            <Link href="/privacy-policy">Privacy Policy</Link> for more
            information.
          </p>
          <button className="btn btn-primary" type="submit">
            Send enquiry
          </button>
        </div>
      </form>
      <div
        className={`thanks${sent ? ' show' : ''}`}
        id="thanks"
        aria-live="polite"
        ref={thanksRef}
        tabIndex={sent ? -1 : undefined}
      >
        <div className="tick">
          <CheckIcon />
        </div>
        <h2>Thank you</h2>
        <p>Thank you for your enquiry. We&apos;ll get back to you soon.</p>
      </div>
    </div>
  );
}
