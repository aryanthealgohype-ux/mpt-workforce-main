import founderImg from '@/assets/founder.jpeg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="founder" className="section-padding bg-background">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Founder <span className="text-gradient-gold">Message</span>
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image */}
              <div className="md:col-span-2 relative">
                <img
                  src={founderImg}
                  alt="Piyush Tyagi - Founder & Managing Director"
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <Quote className="text-accent mb-4" size={40} />
                <p className="text-foreground leading-relaxed text-base md:text-lg mb-6 italic">
                  At MPT Workforce & Event Management, our focus is on delivering quality manpower and creating successful events through professionalism, dedication, and trust. We believe people are the backbone of every successful organization and event.
                </p>
                <div className="border-t border-border pt-5">
                  <h3 className="text-xl font-serif font-bold text-foreground">Piyush Tyagi</h3>
                  <p className="text-accent font-medium text-sm">Founder & Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
