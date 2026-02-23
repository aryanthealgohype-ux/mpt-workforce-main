import { Award, Users, Clock, Eye, HeartHandshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const reasons = [
  { icon: Award, title: 'Professional & Experienced Team', desc: 'Our experts are skilled, seasoned, and dedicated to your success.' },
  { icon: Users, title: 'Quality-Focused Manpower', desc: 'We provide skilled and reliable staff ready to meet your needs.' },
  { icon: Clock, title: 'Timely & Reliable Execution', desc: 'Punctual and efficient, we deliver results on time, every time.' },
  { icon: Eye, title: 'Transparent Working Process', desc: 'Clear communication and full transparency at every step.' },
  { icon: HeartHandshake, title: 'Client-Centric Approach', desc: 'Your success is our priority — we customize solutions for you.' },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="container mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-card">
            Delivering Excellence in{' '}
            <span className="text-gradient-gold">Workforce & Event Management</span>
          </h2>
          <p className="text-card/70 mt-4 max-w-2xl mx-auto">
            At MPT Workforce & Event Management, we are committed to providing superior services that help your business thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-7 hover-lift ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center mb-5">
                <r.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-serif font-bold text-card mb-2">{r.title}</h3>
              <p className="text-card/70 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-card/80 text-lg mb-4">Your Success is Our Priority</p>
          <a href="#contact" className="inline-block bg-gold-gradient text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
