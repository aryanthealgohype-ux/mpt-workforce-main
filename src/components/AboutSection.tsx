import aboutImg from '@/assets/about-img.jpg';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { num: 500, suffix: '+', label: 'Workforce Deployed' },
  { num: 100, suffix: '+', label: 'Events Managed' },
  { num: 50, suffix: '+', label: 'Happy Clients' },
  { num: 10, suffix: '+', label: 'Industries Served' },
];

const StatCard = ({ num, suffix, label }: { num: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(num, 2000);
  return (
    <div ref={ref} className="text-center p-4 rounded-lg bg-secondary">
      <div className="text-2xl font-bold text-accent">{count}{suffix}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div ref={ref} className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 leading-tight">
              Building Strong Teams.{' '}
              <span className="text-gradient-gold">Creating Remarkable Events.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              MPT Workforce & Event Management is a professional HR and Event Management company committed to delivering quality manpower and seamless event solutions. We focus on understanding client needs and providing skilled, reliable, and performance-driven workforce support along with well-executed corporate and promotional events.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With a people-first approach and strong management practices, we aim to build long-term partnerships based on trust, quality, and results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StatCard key={stat.label} num={stat.num} suffix={stat.suffix} label={stat.label} />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src={aboutImg}
                alt="MPT Workforce team collaboration"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gold-gradient rounded-xl opacity-20" />
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
