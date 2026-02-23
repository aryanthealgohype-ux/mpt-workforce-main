import { Eye, Target, Handshake } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const cards = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To become a trusted and preferred workforce and event management partner across industries by delivering consistent quality and professional services.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide skilled and reliable manpower solutions, to deliver well-managed and impactful events, and to build long-term relationships based on trust and performance.',
  },
  {
    icon: Handshake,
    title: 'Our Promise',
    text: 'We promise to stand by our clients with dedication, integrity and excellence — because when our clients succeed, we succeed together.',
  },
];

const VisionMission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div ref={ref} className="container mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-card">
            Vision, Mission & <span className="text-gradient-gold">Promise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-card/5 backdrop-blur-sm border border-card/10 rounded-2xl p-8 hover-lift ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mb-6">
                <card.icon className="text-primary" size={26} />
              </div>
              <h3 className="text-xl font-serif font-bold text-card mb-4">{card.title}</h3>
              <p className="text-card/70 leading-relaxed text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
