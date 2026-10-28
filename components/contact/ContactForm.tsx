"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site-config";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "draft" }
  | { kind: "unconfigured" }
  | { kind: "error"; message: string };

const empty: Fields = { name: "", email: "", subject: "", message: "" };

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Enter a subject (at least 3 characters).";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

const labels: Record<keyof Fields, string> = { name: "Name", email: "Email", subject: "Subject", message: "Message" };

const inputClass =
  "w-full rounded-md border border-line bg-bg/50 px-4 py-3 text-fg placeholder:text-muted/60 transition-colors focus-visible:border-electric aria-[invalid=true]:border-magenta";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const { formEndpoint, email } = siteConfig.contact;

  function update(key: keyof Fields, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ kind: "idle" });
      return;
    }

    if (formEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setValues(empty);
        setStatus({ kind: "success" });
      } catch {
        setStatus({ kind: "error", message: "The message could not be sent. Please try again in a moment." });
      }
      return;
    }

    if (email) {
      const body = `${values.message}\n\n${values.name} (${values.email})`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ kind: "draft" });
      return;
    }

    setStatus({ kind: "unconfigured" });
  }

  const sending = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {(["name", "email"] as const).map((key) => (
          <Field key={key} id={key} label={labels[key]} error={errors[key]}>
            <input
              id={key}
              name={key}
              type={key === "email" ? "email" : "text"}
              autoComplete={key === "email" ? "email" : "name"}
              value={values[key]}
              onChange={(e) => update(key, e.target.value)}
              aria-invalid={errors[key] ? true : undefined}
              aria-describedby={errors[key] ? `${key}-error` : undefined}
              className={inputClass}
            />
          </Field>
        ))}
      </div>

      <Field id="subject" label={labels.subject} error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={inputClass}
        />
      </Field>

      <Field id="message" label={labels.message} error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <div className="flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-12 items-center justify-center rounded-md border border-electric bg-electric/10 px-8 font-mono text-sm uppercase tracking-[0.2em] text-fg shadow-[0_0_24px_rgb(var(--blue)/var(--glow))] transition-colors hover:bg-electric/20 disabled:opacity-60"
        >
          {sending ? "Sending..." : formEndpoint ? "Send message" : email ? "Open email draft" : "Send message"}
        </button>

        <p role="status" aria-live="polite" className="text-sm text-muted">
          {status.kind === "success" && "Your message was sent."}
          {status.kind === "draft" && "Your email app should open with a draft. Nothing is sent until you send it there."}
          {status.kind === "unconfigured" &&
            "This form isn't connected to an email service yet, so nothing was sent. Add an email address or form endpoint in data/site-config.ts."}
          {status.kind === "error" && status.message}
        </p>
      </div>
    </form>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-magenta">
          {error}
        </p>
      ) : null}
    </div>
  );
}
