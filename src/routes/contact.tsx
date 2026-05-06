import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, Linkedin, Instagram, Facebook, Youtube, Globe } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Motion";
import { ContactForm } from "@/components/site/ContactForm";
import { RedesignHero } from "@/components/site/Redesign";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OWS Holdings — Start the Conversation" },
      { name: "description", content: "Get in touch with OWS Holdings. Headquartered in Sharjah with operations across 14 countries." },
      { property: "og:title", content: "Contact OWS Holdings" },
      { property: "og:description", content: "One conversation can unlock nine specialised businesses." },
    ],
  }),
  component: ContactPage,
});

const OFFICES = [
  { city: "DUBAI", country: "UAE" },
  { city: "ABU DHABI", country: "UAE" },
  { city: "AJMAN", country: "UAE" },
  { city: "DOHA", country: "QATAR" },
  { city: "BAHRAIN", country: "BAHRAIN" },
];

function ContactPage() {
  return (
    <SiteShell>
      <RedesignHero
        title={<>LET'S BUILD <br /> <span className="text-[var(--ows-red)]">SOMETHING GREAT.</span></>}
      >
        <p className="mt-4 max-w-xl text-lg text-white font-medium leading-relaxed">
          We're here to listen, collaborate and create value together.
        </p>
        <p className="mt-2 max-w-xl text-lg text-white font-medium leading-relaxed">
          Reach out to our team — we'd love to hear from you.
        </p>
        
        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-4">
            <Mail size={20} className="text-[var(--ows-red)]" />
            <a href="mailto:info@owsholdings.com" className="text-white hover:text-[var(--ows-red)] transition-colors">
              info@owsholdings.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone size={20} className="text-[var(--ows-red)]" />
            <span className="text-white">+971 6 572 5000</span>
          </div>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="mt-1 text-[var(--ows-red)]" />
            <span className="text-white">
              OWS Headquarters<br />
              Sahara Tower 2, Office 1901<br />
              Al Nahda 1, Sharjah, UAE
            </span>
          </div>
        </div>
      </RedesignHero>

      {/* Main Content Area */}
      <section className="bg-black py-24 border-b border-white/5">
        <div className="mx-auto grid w-full max-w-[1920px] gap-16 px-6 lg:grid-cols-2 lg:px-10">
          
          {/* Contact Form Section */}
          <Reveal>
            <div className="border-t-2 border-[var(--ows-red)] bg-[#050505] p-8 md:p-12 h-full border-x border-b border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--ows-red)]"></span>
                SEND US A MESSAGE
              </p>
              <ContactForm />
            </div>
          </Reveal>

          {/* Map and HQ Section */}
          <Reveal delay={0.2}>
            <div className="border-t-2 border-[var(--ows-red)] bg-[#050505] p-8 md:p-12 h-full border-x border-b border-white/10 flex flex-col">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-[var(--ows-red)]"></span>
                OUR HEADQUARTERS
              </p>
              
              <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden bg-white/5 border border-white/10 group">
                {/* Mocking a map with a cool dark pattern */}
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <MapPin size={48} className="text-[var(--ows-red)] drop-shadow-[0_0_15px_var(--ows-red)]" />
                    <div className="absolute -bottom-2 left-1/2 w-8 h-2 -translate-x-1/2 rounded-[100%] bg-[var(--ows-red)]/30 blur-sm" />
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="font-display text-xl font-bold text-[var(--ows-red)] mb-2">OWS Holdings</h3>
                <p className="font-display text-xl text-white">
                  AJ Industries LLC<br />
                  Al Jurf Industrial 3, Ajman, UAE
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone size={18} className="text-[var(--ows-red)]" />
                    <span className="text-sm text-foreground/80">+971 6 572 5000</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail size={18} className="text-[var(--ows-red)]" />
                    <span className="text-sm text-foreground/80">info@owsholdings.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe size={18} className="text-[var(--ows-red)]" />
                    <span className="text-sm text-foreground/80">www.owsholdings.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock size={18} className="text-[var(--ows-red)]" />
                    <span className="text-sm text-foreground/80">Sunday - Thursday: 8:00 AM - 6:00 PM (GST)</span>
                  </div>
                </div>

                <div className="mt-8 h-64 w-full rounded-xl overflow-hidden border border-white/10 opacity-80 transition-opacity hover:opacity-100">
                  <iframe 
                    src="https://maps.google.com/maps?q=AJ%20Industries%20LLC,%20Al%20Jurf%20Industrial%203,%20Ajman&t=m&z=14&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) hue-rotate(180deg)' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offices Across Region */}
      <section className="bg-[var(--ows-panel)] py-24 border-b border-white/5">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--ows-red)]"></span>
              OUR OFFICES ACROSS THE REGION
            </p>
          </Reveal>

          <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {OFFICES.map((office, i) => (
              <StaggerItem key={i}>
                <div className="group border border-white/10 bg-black p-6 flex flex-col items-center justify-between aspect-[4/5] transition-colors hover:border-[var(--ows-red)]">
                  <div className="text-center mt-4">
                    <h3 className="font-display text-lg font-bold text-[var(--ows-red)] tracking-widest">{office.city}</h3>
                    <p className="text-[10px] font-semibold text-white tracking-widest mt-1">{office.country}</p>
                  </div>
                  {/* Mock Skyline Outline */}
                  <div className="w-full mt-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    <svg viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="1" className="w-full text-white">
                      <path d="M0 40 L10 40 L10 20 L20 20 L20 10 L25 10 L25 25 L35 25 L35 15 L40 15 L40 5 L50 5 L50 30 L60 30 L60 18 L70 18 L70 28 L80 28 L80 12 L90 12 L90 40 Z" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="bg-black py-16 border-b border-white/5">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white mb-2 flex items-center gap-4">
              <span className="w-8 h-px bg-[var(--ows-red)]"></span>
              CONNECT WITH US
            </p>
            <p className="text-sm text-foreground/60 ml-12">
              Stay updated with the latest news, events and insights from across our nine verticals.
            </p>
          </div>
          <div className="flex gap-4">
            {[Linkedin, Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="flex h-12 w-12 items-center justify-center border border-white/20 transition-all hover:border-[var(--ows-red)] hover:text-[var(--ows-red)] hover:bg-[var(--ows-red)]/5">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-[var(--ows-panel)] py-16">
        <div className="mx-auto w-full max-w-[1920px] px-6 lg:px-10">
          <div className="border border-[var(--ows-red)]/30 bg-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-black uppercase leading-tight text-white">
                ONE GROUP.<br />
                NINE CAPABILITIES.<br />
                <span className="text-[var(--ows-red)]">INFINITE VALUE.</span>
              </h2>
            </div>
            <div className="max-w-md text-sm text-foreground/60 md:text-center">
              Partner with OWS Holdings for integrated solutions that drive efficiency, growth and long-term impact.
            </div>
            <button className="border border-[var(--ows-red)] px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-[var(--ows-red)] transition-all hover:bg-[var(--ows-red)] hover:text-white">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
