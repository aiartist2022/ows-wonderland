import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell, PageHero } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Motion";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OWS Holdings — Start the Conversation" },
      { name: "description", content: "Get in touch with OWS Holdings. Headquartered in Sharjah with operations across 14 countries." },
      { property: "og:title", content: "Contact OWS Holdings" },
      { property: "og:description", content: "One conversation can unlock seven specialised businesses." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let's build<br /> something great.</>}
        subtitle="Tell us what you're working on. Our team will route your enquiry to the right capability and get back to you within one business day."
      />

      <section className="bg-[var(--ows-panel)] py-24">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Headquarters</p>
            <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-4xl">
              Sharjah, UAE
            </h2>
            <p className="mt-2 text-foreground/60">Operations across 14 countries.</p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-none text-[var(--ows-red)]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">Address</p>
                  <p className="mt-1 text-foreground">OWS Holdings HQ, Sharjah, United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-none text-[var(--ows-red)]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">Email</p>
                  <a href="mailto:info@owsholdings.com" className="mt-1 block text-foreground hover:text-[var(--ows-red)]">
                    info@owsholdings.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-none text-[var(--ows-red)]" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">Phone</p>
                  <p className="mt-1 text-foreground">+971 (0) 6 000 0000</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8">
            <div className="border border-white/10 bg-black p-8 md:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[var(--ows-red)]">— Contact Form</p>
              <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-foreground md:text-4xl">
                Tell us about your project.
              </h2>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
