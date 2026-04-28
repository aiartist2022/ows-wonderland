import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { submitContact } from "@/server/contact.functions";

export function ContactForm({ sourcePage = "/contact" }: { sourcePage?: string }) {
  const submit = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await submit({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          company: String(fd.get("company") || ""),
          phone: String(fd.get("phone") || ""),
          message: String(fd.get("message") || ""),
          source_page: sourcePage,
        },
      });
      if (res.ok) {
        setState("success");
        e.currentTarget.reset();
      } else {
        setState("error");
        setError(res.error);
      }
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="grid place-items-center border border-[var(--ows-red)]/40 bg-[var(--ows-red)]/5 p-12 text-center"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--ows-red)] text-foreground">
          <Check size={28} />
        </div>
        <h3 className="mt-6 font-display text-3xl font-black text-foreground">Message Received</h3>
        <p className="mt-3 max-w-md text-sm text-foreground/70">
          Thank you for reaching out to OWS Holdings. A member of our team will be in touch within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Full Name *" name="name" required maxLength={200} />
        <Field label="Email *" name="email" type="email" required maxLength={320} />
        <Field label="Company" name="company" maxLength={200} />
        <Field label="Phone" name="phone" type="tel" maxLength={50} />
      </div>
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
          Your Message *
        </label>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Tell us how we can help…"
          className="mt-3 w-full border-b border-white/15 bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-[var(--ows-red)]"
        />
      </div>
      {error && (
        <p className="text-sm text-[var(--ows-red)]">{error}</p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="group inline-flex items-center gap-3 bg-[var(--ows-red)] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.25em] text-foreground transition-all hover:shadow-[0_0_40px_var(--ows-red-glow)] disabled:opacity-50"
      >
        {state === "submitting" ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
        {state === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        className="mt-3 w-full border-b border-white/15 bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-[var(--ows-red)]"
      />
    </div>
  );
}
