import {useState, type FormEvent} from 'react';
import Layout from '@theme/Layout';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors: string[] = [];

    if (!name.trim()) {
      validationErrors.push('Please enter your name.');
    }
    if (!validateEmail(email)) {
      validationErrors.push('Please enter a valid email address.');
    }
    if (!message.trim() || message.trim().length < 20) {
      validationErrors.push('Please enter a message with at least 20 characters.');
    }

    setErrors(validationErrors);
    if (validationErrors.length === 0) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <Layout
      title="Contact"
      description="Contact the Physical AI & Humanoid Robotics website for feedback or support.">
      <main className="container margin-vert--lg">
        <section className="margin-bottom--lg">
          <p className="text--uppercase text--bold">Contact</p>
          <h1>Get in touch with our team</h1>
          <p>
            Use the form below to ask questions about curriculum, blog content, or robotics learning pathways.
            We validate every submission and reply with guidance for using the website responsibly.
          </p>
        </section>

        <form className="contactForm" onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className="formFeedback">
              Thank you! Your message has been received. If you need a faster reply, email{' '}
              <a href="mailto:support@physicalai-robotics.com">support@physicalai-robotics.com</a>.
            </div>
          )}

          {errors.length > 0 && (
            <div className="formFeedback formError">
              <strong>Please fix the following:</strong>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Describe what you need help with"
          />

          <button className="contactButton" type="submit">
            Send message
          </button>
        </form>
      </main>
    </Layout>
  );
}
