import { Building2, Monitor, ShoppingCart, Landmark, Factory, GraduationCap, Heart, PartyPopper } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const industries = [
  { icon: Building2, name: 'Corporate & Offices' },
  { icon: Monitor, name: 'IT & ITES' },
  { icon: ShoppingCart, name: 'Retail & FMCG' },
  { icon: Landmark, name: 'Banking & Insurance' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: GraduationCap, name: 'Education & Training' },
  { icon: Heart, name: 'Healthcare' },
  { icon: PartyPopper, name: 'Events & Promotions' },
];

const IndustriesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="industries" className="section-padding bg-secondary/50">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Industries</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Industries We <span className="text-gradient-gold">Serve</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            MPT Workforce & Event Management partners with diverse industries, delivering top-notch workforce and event management services tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              className={`bg-card rounded-2xl p-6 text-center border border-border hover-lift cursor-default ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <ind.icon className="text-accent" size={26} />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{ind.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Looking for workforce solutions or event management services in your industry?</p>
          <a href="#contact" className="inline-block bg-gold-gradient text-primary font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
