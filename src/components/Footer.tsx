import { Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-card/80">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-card mb-4">
              MPT <span className="text-gradient-gold">Workforce</span>
            </h3>
            <p className="text-card/60 text-sm leading-relaxed">
              Professional HR & Event Management company delivering quality manpower and seamless event solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Industries', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-card/60 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-card mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+919650914620" className="flex items-center gap-3 text-sm text-card/60 hover:text-accent transition-colors">
                <Phone size={16} /> +91 9650914620
              </a>
              <a href="mailto:piyushtyagi8527@gmail.com" className="flex items-center gap-3 text-sm text-card/60 hover:text-accent transition-colors">
                <Mail size={16} /> piyushtyagi8527@gmail.com
              </a>
              <a href="https://www.mptworkforce.com" className="flex items-center gap-3 text-sm text-card/60 hover:text-accent transition-colors">
                <Globe size={16} /> www.mptworkforce.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card/10 mt-10 pt-6 text-center text-xs text-card/40">
          © {new Date().getFullYear()} MPT Workforce & Event Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
