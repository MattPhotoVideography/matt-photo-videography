// components/ContactForm.jsx
"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqaobywa";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(null);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);
    setError("");

    // 👇 capture the form element BEFORE the await
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,                // let the browser set Content-Type (multipart/form-data)
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setOk(true);
        formEl.reset();               // safe now, we saved the element
      } else {
        const data = await res.json().catch(() => ({}));
        setOk(false);
        setError(
          data?.errors?.map((e) => e.message).join(", ") ||
            "Submission failed. Please try again."
        );
      }
    } catch (err) {
      setOk(false);
      setError(err?.message || "Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-gray-200 p-6 bg-white/70">
      <div className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Your name" className="input" required />
        <input name="email" type="email" placeholder="Email" className="input" required />
        <input name="phone" placeholder="Phone" className="input" />
        <input name="city" placeholder="City" className="input" />
        <select name="service" className="input md:col-span-2" defaultValue="Newborn">
          <option>Newborn</option>
          <option>Baby / Milestone</option>
          <option>Family</option>
          <option>Maternity</option>
          <option>Graduation</option>
          <option>Engagement</option>
        </select>
        <textarea
          name="message"
          placeholder="Tell me about your session idea..."
          rows={6}
          className="input md:col-span-2"
          required
        />
      </div>

      <button
        disabled={submitting}
        className="mt-4 w-full px-4 py-3 rounded-2xl bg-brand text-white"
      >
        {submitting ? "Sending..." : "Send Inquiry"}
      </button>

      {ok === true && <p className="text-green-700 mt-3">Thanks! I’ll be in touch soon.</p>}
      {ok === false && (
        <p className="text-red-700 mt-3">
          Sorry, something went wrong. {error && <span>{error}</span>}
        </p>
      )}
    </form>
  );
}
