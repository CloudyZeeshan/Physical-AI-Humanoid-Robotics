import React, { useState } from "react";
import Layout from "@theme/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "warning" | "info";
    text: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (message) {
      setMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setMessage({
        type: "warning",
        text: "Please fill in all fields before submitting.",
      });
      return;
    }

    if (!formData.email.includes("@")) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setMessage({
      type: "info",
      text: "Sending your message...",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "1324a681-7d01-45ce-bc52-9742d70cf431",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: "success",
          text: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage({
          type: "error",
          text: "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Sorry, there was an error sending your message.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <Layout
      title="Contact"
      description="Contact the Physical AI & Humanoid Robotics website for feedback or support."
    >
      <main className="container margin-vert--lg">
        <section className="margin-bottom--lg">
          <p className="text--uppercase text--bold">Contact</p>
          <h1>Get in touch with our team</h1>
          <p>
            Use the form below to ask questions about curriculum, blog content,
            or robotics learning pathways. We validate every submission and reply
            with guidance for using the website responsibly.
          </p>
        </section>

        <div className="contactFormContainer">
          <form onSubmit={handleSubmit} className="contactForm">
            {message && (
              <div className={`message ${message.type}`}>
                <span>{message.text}</span>
              </div>
            )}

            <div className="formGroup">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="email">Your Email *</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Your Message *</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project, idea, or question."
                rows={5}
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className={`submitButton ${isSubmitting ? "loading" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="text-center text--secondary margin-top--lg">
          <p>
            💡 <strong>Quick Tip:</strong> The more details you provide, the
            better I can help!
          </p>
          <p>
            🔒 Your information is secure and will only be used to respond to
            your inquiry.
          </p>
        </div>

        <style>{`
          .contactFormContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 400px;
          }

          .contactForm {
            background: #ffffff;
            border: 1px solid rgba(15, 23, 42, 0.08);
            border-radius: 24px;
            padding: 2rem;
            box-shadow: 0 20px 45px rgba(15, 23, 42, 0.05);
            width: 100%;
            max-width: 500px;
          }

          .message {
            padding: 1rem;
            border-radius: 12px;
            margin-bottom: 1.5rem;
            font-weight: 500;
          }

          .message.success {
            background: #d1fae5;
            color: #065f46;
            border: 1px solid #34d399;
          }

          .message.error {
            background: #fee2e2;
            color: #991b1b;
            border: 1px solid #f87171;
          }

          .message.warning {
            background: #fef3c7;
            color: #92400e;
            border: 1px solid #fbbf24;
          }

          .message.info {
            background: #dbeafe;
            color: #1e40af;
            border: 1px solid #60a5fa;
          }

          .formGroup {
            margin-bottom: 1.5rem;
          }

          label {
            display: block;
            font-weight: 600;
            color: #0f172a;
            margin-bottom: 0.5rem;
          }

          input,
          textarea {
            width: 100%;
            border: 1px solid rgba(15, 23, 42, 0.12);
            border-radius: 16px;
            padding: 1rem;
            font-size: 1rem;
            color: #0f172a;
            background: #f8fafc;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            box-sizing: border-box;
          }

          input:focus,
          textarea:focus {
            border-color: #6366f1;
            box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);
          }

          input:disabled,
          textarea:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          textarea {
            resize: vertical;
            min-height: 120px;
          }

          .submitButton {
            width: 100%;
            border: none;
            border-radius: 16px;
            padding: 1rem 1.25rem;
            background: #111827;
            color: #ffffff;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            transition: transform 0.2s ease, background 0.2s ease;
          }

          .submitButton:hover:not(:disabled) {
            transform: translateY(-1px);
            background: #1f2937;
          }

          .submitButton:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .submitButton.loading {
            background: #6b7280;
          }

          @media (max-width: 768px) {
            .contactForm {
              padding: 1.5rem;
            }
          }
        `}</style>
      </main>
    </Layout>
  );
}
