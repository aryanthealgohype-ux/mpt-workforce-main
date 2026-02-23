import { Users, Calendar, Briefcase, CreditCard, UserCheck, Megaphone, Rocket, Star, ClipboardList } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import servicesHr from '@/assets/services-hr.jpg';
import servicesEvent from '@/assets/services-event.jpg';

const hrServices = [
  { icon: Users, title: 'Recruitment & Staffing' },
  { icon: Briefcase, title: 'Manpower Outsourcing' },
  { icon: UserCheck, title: 'Temporary & Contract Staffing' },
  { icon: CreditCard, title: 'Payroll Management' },
  { icon: ClipboardList, title: 'Event Staffing Solutions' },
];

const eventServices = [
  { icon: Calendar, title: 'Corporate Events' },
  { icon: Megaphone, title: 'Promotional & Marketing Events' },
  { icon: Rocket, title: 'Product Launches' },
  { icon: Star, title: 'Brand Activations' },
  { icon: ClipboardList, title: 'Event Coordination & Staffing' },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-background">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            What We <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you need skilled workforce solutions or expert event planning, we are here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* HR Services */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <img src={servicesHr} alt="HR Services" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-navy-gradient opacity-60" />
              <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-card">
                HR & Workforce Solutions
              </h3>
            </div>
            <div className="space-y-3">
              {hrServices.map((s) => (
                <div key={s.title} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover-lift">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <s.icon className="text-accent" size={20} />
                  </div>
                  <span className="font-medium text-foreground">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Event Services */}
          <div className={`${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
            <div className="relative rounded-2xl overflow-hidden mb-6">
              <img src={servicesEvent} alt="Event Management" className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-navy-gradient opacity-60" />
              <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-card">
                Event Management Services
              </h3>
            </div>
            <div className="space-y-3">
              {eventServices.map((s) => (
                <div key={s.title} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover-lift">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <s.icon className="text-accent" size={20} />
                  </div>
                  <span className="font-medium text-foreground">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
