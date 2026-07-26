'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Reveal } from '@/components/animations';
import { services } from '@/constants/services';
import { WHATSAPP_NUMBER } from '@/config/whatsapp.config';

const contactInfo = [
  { icon: MapPin, label: 'Office', value: 'SpherTech Tower, Tech Park, Chennai, India 560001' },
  { icon: Phone, label: 'Phone', value: '+91 70 6396 1249' },
  { icon: Mail, label: 'Email', value: 'hello@sphertech.example.com' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri, 9:00 AM – 6:00 PM IST' },
];

const socials = ['Twitter', 'LinkedIn', 'GitHub', 'Instagram'];

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = encodeURIComponent(
      `Hello SpherTech! 👋\n\nI'd like to get in touch.\n\n📋 Details:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nService: ${form.service}\nBudget: ${form.budget}\n\n💬 Message:\n${form.message}\n\nPlease get back to me. Thank you!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
      setLoading(false);
      setDone(true);
      setForm(initialForm);
      setTimeout(() => setDone(false), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something great together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and we&apos;ll get back within 24 hours.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
              <iframe
                title="SpherTech location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.59%2C12.97%2C77.62%2C12.99&layer=mapnik"
                className="h-48 w-full grayscale"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-border/60 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl transition hover:border-primary/40 hover:text-foreground"
                >
                  {s}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name">
                  <Input required placeholder="Jane Doe" value={form.name} onChange={update('name')} />
                </Field>
                <Field label="Email">
                  <Input type="email" required placeholder="jane@company.com" value={form.email} onChange={update('email')} />
                </Field>
                <Field label="Phone">
                  <Input placeholder="+1 555 000 0000" value={form.phone} onChange={update('phone')} />
                </Field>
                <Field label="Company">
                  <Input placeholder="Company Inc." value={form.company} onChange={update('company')} />
                </Field>
                <Field label="Service">
                  <Select value={form.service} onValueChange={(v) => setForm((prev) => ({ ...prev, service: v }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>
                          {s.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Budget">
                  <Select value={form.budget} onValueChange={(v) => setForm((prev) => ({ ...prev, budget: v }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lt10k">&lt; $10k</SelectItem>
                      <SelectItem value="10-50k">$10k – $50k</SelectItem>
                      <SelectItem value="50-100k">$50k – $100k</SelectItem>
                      <SelectItem value="gt100k">$100k+</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Message">
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={update('message')}
                  />
                </Field>
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="mt-6 w-full font-button font-semibold"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : done ? (
                  'Sent to WhatsApp! We will be in touch.'
                ) : (
                  <>
                    Send via WhatsApp
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}