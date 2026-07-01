"use client";

import { FormEvent, useState } from "react";
import AnimateIn from "./AnimateIn";

const API_HOST = ["api", "web3forms", "com"].join(".");
const ENDPOINT = `https://${API_HOST}/submit`;
const ACCESS = "6337ae9a-7ca5-4207-8247-ab4ec4c26417";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setHasError(false);

    const fd = new FormData(e.currentTarget);
    fd.append("access_key", ACCESS);

    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setHasError(true);
      }
    } catch {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 py-stack-lg my-stack-lg md:px-margin-page"
    >
      <AnimateIn variant="fade-up">
        <h2 className="mb-stack-lg text-center font-headline-lg text-3xl uppercase md:text-headline-lg">
          {"Let's Connect"}
        </h2>
      </AnimateIn>

      <AnimateIn variant="fade-up" delay={120} duration={700}>
        <div className="neobrutalist-shadow-lg border-4 border-black bg-surface p-8">
          {submitted ? (
            <p className="font-body-lg text-lg">
              {"Thanks for reaching out! I'll get back to you shortly."}
            </p>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block font-label-bold uppercase" htmlFor="cf-name">
                  Name
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-4 border-black bg-surface p-3 font-body-md transition-colors focus:bg-primary-container focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block font-label-bold uppercase" htmlFor="cf-email">
                  Email
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-4 border-black bg-surface p-3 font-body-md transition-colors focus:bg-primary-container focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block font-label-bold uppercase" htmlFor="cf-message">
                  Message
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border-4 border-black bg-surface p-3 font-body-md transition-colors focus:bg-primary-container focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="neobrutalist-shadow self-start border-4 border-black bg-primary-container px-8 py-4 font-headline-md uppercase disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {hasError && (
                <p className="font-body-md text-red-600">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </AnimateIn>
    </section>
  );
}
