import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be under 100 characters'),
  email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email address').max(255, 'Email must be under 255 characters'),
  phone: z.string().trim().max(20, 'Phone number is too long').regex(/^[+\d\s()-]*$/, 'Please enter a valid phone number').optional().or(z.literal('')),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be under 1000 characters'),
});

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({ title: 'Message Sent!', description: 'We will get back to you shortly.' });
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Get in <span className="text-gradient-gold">Touch</span>
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6">MPT Workforce & Event Management</h3>

            {[
              { icon: Phone, label: '+91 9650914620', href: 'tel:+919650914620' },
              { icon: Mail, label: 'piyushtyagi8527@gmail.com', href: 'mailto:piyushtyagi8527@gmail.com' },
              { icon: Globe, label: 'www.mptworkforce.com', href: 'https://www.mptworkforce.com' },
              { icon: MapPin, label: 'Office Address (Coming Soon)', href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover-lift"
              >
                <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="text-accent" size={20} />
                </div>
                <span className="text-foreground font-medium text-sm">{item.label}</span>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin size={32} className="mx-auto mb-2 text-accent" />
                <p className="text-sm">Google Map — Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg border border-border p-8 space-y-5">
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">Send us a Message</h3>
            {[
              { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
              { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  maxLength={field.name === 'email' ? 255 : field.name === 'phone' ? 20 : 100}
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => {
                    setForm({ ...form, [field.name]: e.target.value });
                    if (errors[field.name]) setErrors((prev) => ({ ...prev, [field.name]: '' }));
                  }}
                  required={field.name !== 'phone'}
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition ${errors[field.name] ? 'border-destructive' : 'border-border'}`}
                />
                {errors[field.name] && <p className="text-destructive text-xs mt-1">{errors[field.name]}</p>}
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                maxLength={1000}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                }}
                required
                className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-gold-gradient text-primary font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
