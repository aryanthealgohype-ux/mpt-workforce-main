import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'HR Director, Tech Corp',
    text: 'MPT Workforce has been an exceptional partner for our staffing needs. Their team consistently delivers skilled professionals who integrate seamlessly into our projects.',
    initials: 'RS',
    color: 'bg-blue-500',
  },
  {
    name: 'Priya Mehta',
    role: 'Operations Manager, RetailMax',
    text: 'The event management team at MPT is outstanding. They handled our product launch flawlessly, from planning to execution. Highly recommended!',
    initials: 'PM',
    color: 'bg-rose-500',
  },
  {
    name: 'Amit Verma',
    role: 'CEO, BuildRight Industries',
    text: 'We have been working with MPT for over two years now. Their workforce solutions have helped us scale operations efficiently while maintaining quality.',
    initials: 'AV',
    color: 'bg-emerald-600',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Marketing Head, BrandVibe',
    text: 'MPT organized our brand activation campaign across multiple cities. Their coordination, professionalism, and attention to detail were truly impressive.',
    initials: 'SK',
    color: 'bg-purple-500',
  },
  {
    name: 'Vikram Singh',
    role: 'Plant Manager, IndoSteel',
    text: 'Reliable, professional, and always on time. MPT Workforce provides us with dependable manpower solutions that keep our manufacturing operations running smoothly.',
    initials: 'VS',
    color: 'bg-amber-600',
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  return (
    <section className="section-padding bg-secondary/50">
      <div ref={ref} className="container mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hear from businesses that trust MPT Workforce & Event Management for their workforce and event needs.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          {/* Main testimonial card */}
          <div
            className="bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 text-center relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <Quote className="text-accent/30 mx-auto mb-6" size={48} />
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic min-h-[80px] transition-opacity duration-300">
              "{testimonials[current].text}"
            </p>
            <div className="border-t border-border pt-6 flex flex-col items-center gap-3">
              <div className={`w-14 h-14 rounded-full ${testimonials[current].color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                {testimonials[current].initials}
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-accent font-medium text-sm mt-1">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-foreground" size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-foreground" size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-accent w-7' : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
