import React, { useState } from 'react';
import './Testimonials.css';

const FEEDBACK_EMAIL = 'Peshiyoperfume@gmail.com';

const Testimonials = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(
      `Note from ${name || 'Peshiyo guest'}`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-panel">
        <header className="reviews-panel__header">
          <h2 className="reviews-panel__title">A word with us</h2>
          <p className="reviews-panel__sub">
            Feedback, a question, or a quiet hello — we reply with care.
          </p>
        </header>

        <form className="reviews-form" onSubmit={handleSubmit} noValidate>
          <label className="reviews-field">
            <span className="reviews-label">Name</span>
            <input
              className="reviews-input"
              type="text"
              name="name"
              autoComplete="name"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="reviews-field">
            <span className="reviews-label">Email</span>
            <input
              className="reviews-input"
              type="email"
              name="email"
              autoComplete="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="reviews-field reviews-field--full">
            <span className="reviews-label">Message</span>
            <textarea
              className="reviews-textarea"
              name="message"
              rows={5}
              placeholder=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <div className="reviews-actions">
            <button type="submit" className="reviews-submit hover-target">
              Send
            </button>
            {submitted && (
              <p className="reviews-hint" role="status">
                Prefer to write directly?{' '}
                <a href={`mailto:${FEEDBACK_EMAIL}`}>{FEEDBACK_EMAIL}</a>
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
