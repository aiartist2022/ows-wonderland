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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field placeholder="First Name*" name="firstName" required maxLength={100} />
        <Field placeholder="Last Name*" name="lastName" required maxLength={100} />
      </div>
      <Field placeholder="Email Address*" name="email" type="email" required maxLength={320} />
      <Field placeholder="Phone Number*" name="phone" type="tel" required maxLength={50} />
      <Field placeholder="Company / Organization" name="company" maxLength={200} />
      
      <div>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="Your Message*"
          className="w-full border border-white/20 bg-black/40 p-4 text-sm text-white outline-none transition-colors placeholder:text-foreground/40 focus:border-[var(--ows-red)] focus:bg-black resize-none"
        />
      </div>

      <div className="flex items-center gap-3 pt-2 pb-4">
        <input 
          type="checkbox" 
          id="privacy" 
          required 
          className="h-4 w-4 rounded-sm border-white/20 bg-transparent text-[var(--ows-red)] focus:ring-0 focus:ring-offset-0"
        />
        <label htmlFor="privacy" className="text-xs text-foreground/60">
          I agree to the <a href="#" className="text-[var(--ows-red)] hover:underline">Privacy Policy</a> and consent to be contacted by OWS Holdings.
        </label>
      </div>

      {error && (
        <p className="text-sm text-[var(--ows-red)]">{error}</p>
      )}
      
      <button
        type="submit"
        disabled={state === "submitting"}
        className="group flex w-full md:w-auto items-center justify-center gap-3 bg-[var(--ows-red)] px-8 py-4 text-[12px] font-bold uppercase tracking-widest text-white transition-all hover:shadow-[0_0_20px_var(--ows-red-glow)] disabled:opacity-50"
      >
        {state === "submitting" ? "SENDING..." : "SEND MESSAGE"}
        {state === "submitting" ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
      </button>
    </form>
  );
}

function Field({
  placeholder,
  name,
  type = "text",
  required = false,
  maxLength,
}: {
  placeholder: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      maxLength={maxLength}
      placeholder={placeholder}
      className="w-full border border-white/20 bg-black/40 p-4 text-sm text-white outline-none transition-colors placeholder:text-foreground/40 focus:border-[var(--ows-red)] focus:bg-black"
    />
  );
}
