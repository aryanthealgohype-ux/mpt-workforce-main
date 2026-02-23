import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-card'}`}>
            MPT <span className="text-gradient-gold">Workforce</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-accent ${
                activeSection === link.href.slice(1)
                  ? 'text-accent'
                  : scrolled ? 'text-foreground' : 'text-card/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold-gradient text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-card'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-card/98 backdrop-blur-md border-b border-border animate-fade-up">
          <div className="flex flex-col py-4 px-6 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1) ? 'text-accent' : 'text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-gold-gradient text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
