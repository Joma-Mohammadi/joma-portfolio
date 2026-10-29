import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { PageContainer } from "@/components/ui/PageContainer";
import { PageHeader } from "@/components/ui/PageHeader";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const { email, phone, phoneHref } = siteConfig.contact;

  return (
    <PageContainer>
      <PageHeader eyebrow="Get in touch" title="Contact">
        Have a project, a role or a question? Send a message and I will get back to you.
      </PageHeader>

      <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
        <section aria-labelledby="form-title" className="neon-card p-6 sm:p-8">
          <h2 id="form-title" className="mb-6 font-display text-3xl uppercase tracking-wide">
            Send a message
          </h2>
          <ContactForm />
        </section>

        <aside aria-labelledby="direct-title" className="neon-card h-fit space-y-5 p-6 sm:p-8">
          <h2 id="direct-title" className="font-display text-3xl uppercase tracking-wide">
            Elsewhere
          </h2>
          <p className="flex items-center gap-3 text-muted">
            <Mail className="h-5 w-5 shrink-0 text-electric" aria-hidden />
            {email ? (
              <a href={`mailto:${email}`} className="break-all text-fg underline-offset-4 hover:underline">
                {email}
              </a>
            ) : (
              <span>Email not added yet</span>
            )}
          </p>
          <p className="flex items-center gap-3 text-muted">
            <Phone className="h-5 w-5 shrink-0 text-electric" aria-hidden />
            {phone ? (
              <a href={phoneHref} className="text-fg underline-offset-4 hover:underline">
                {phone}
              </a>
            ) : (
              <span>Phone not added yet</span>
            )}
          </p>
          <SocialLinks />
        </aside>
      </div>
    </PageContainer>
  );
}
