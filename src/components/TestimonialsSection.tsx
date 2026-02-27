import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    name: 'Monu Chauhan',
    role: 'Founder & CEO',
    company: 'Manu Bhoomi LLP',
    image: '/images/monu-chauhan.jpg',
    text: 'Their market understanding and professional coordination helped us close key hiring positions efficiently. A reliable recruitment partner.',
  },
  {
    name: 'Tushar Chaudhary',
    role: 'Founder',
    company: 'Hirits Pvt. Company',
    image: '/images/tushar-chaudhary.jpg',
    text: 'MPT Workforce has been a dependable recruitment partner for Hirits Company, consistently delivering quality candidates with professionalism and speed.',
  },
  {
    name: 'Ms. Surabhi Loshali',
    role: 'HR Manager',
    company: 'Ather Company',
    image: '/images/surabhi-loshali.jpg',
    text: 'MPT Workforce has consistently supported Ather Company with high-quality talent acquisition, demonstrating strong coordination, professionalism, and a deep understanding of our hiring needs.',
  },
  {
    name: 'Mr. Raghav Aggarwal',
    role: 'Director',
    company: 'ARTOA.97 Autotech and Metalworks Pvt. Ltd.',
    image: '/images/raghav-aggarwal.jpg',
    text: 'MPT Workforce has been instrumental in supporting our hiring needs with skilled and reliable candidates, demonstrating professionalism and strong industry understanding.',
  },
  {
    name: 'Anjana Tiwari',
    role: 'HR Manager',
    company: 'ATH Support Services Pvt. Ltd.',
    image: '/images/anjana-tiwari.jpg',
    text: 'Their coordination, screening process, and workforce management have significantly strengthened our project execution.',
  },
  {
    name: 'Ms. Aishwarya Verma',
    role: 'Director',
    company: 'Platinox Consultants Pvt. Ltd.',
    image: '/images/aishwarya-verma.jpg',
    text: 'MPT Workforce has been a strategic recruitment partner for Platinox Consultants, consistently delivering high-quality talent with professionalism and deep industry insight.',
  },
  {
    name: 'Vaibhav Jain',
    role: 'Founder',
    company: 'GSI Handicrafts Co.',
    image: '/images/vaibhav-jain.jpg',
    text: 'MPT Workforce has been a trusted partner for GSI Handover Company, providing efficient manpower solutions and quality candidates that perfectly matched our operational needs.',
  },
  {
    name: 'Mr. Atul Mangal',
    role: 'Chairman',
    company: 'Mangalmay Institute',
    image: '/images/atul-mangal.jpg',
    text: 'MPT Workforce has consistently supported Mangalmay Institute with impactful seminars, strong placement drives, and quality talent connections, earning appreciation from our leadership.',
  },
  {
    name: 'Purvi Mishra',
    role: 'Placement Manager',
    company: 'IPEM College',
    image: '/images/purvi-mishra.jpg',
    text: 'MPT Workforce has significantly strengthened our placement initiatives by bringing reputed companies to campus and creating valuable career opportunities for our students.',
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
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-border shadow-md bg-muted">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-accent font-medium text-sm mt-1">
                  {testimonials[current].role}, {testimonials[current].company}
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
