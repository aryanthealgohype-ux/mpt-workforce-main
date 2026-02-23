import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Corporate team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gradient-gold text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-4 animate-fade-up">
          Quality Manpower. Quality Events.
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-card leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Trusted Partner for{' '}
          <span className="text-gradient-gold">Workforce & Event Solutions</span>
        </h1>
        <p className="text-card/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
          MPT Workforce & Event Management delivers reliable manpower services and professional event management solutions, helping businesses grow with the right people and flawless execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#contact"
            className="bg-gold-gradient text-primary font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-all duration-300 hover:shadow-lg text-sm md:text-base"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="border-2 border-card/40 text-card font-semibold px-8 py-3.5 rounded-lg hover:bg-card/10 transition-all duration-300 text-sm md:text-base"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
