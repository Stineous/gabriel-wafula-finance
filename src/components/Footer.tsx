import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-professional py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Gabriel Wafula</h3>
            <p className="text-primary-foreground/80">
              Finance Executive & Strategic Planner
            </p>
            <p className="text-primary-foreground/70 text-sm">
              CPA (K), CS (K) • 20+ Years Experience
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-accent-light transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-accent-light transition-colors"
              >
                Experience
              </button>
              <button 
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-accent-light transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-accent-light transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} />
                <a 
                  href="mailto:wafulagabby2012@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors"
                >
                  wafulagabby2012@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={16} />
                <a 
                  href="tel:+254721352867"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors"
                >
                  +254 721 352 867
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} />
                <span className="text-primary-foreground/80">Nakuru, Kenya</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Linkedin size={16} />
                <a 
                  href="https://linkedin.com/in/gabriel-wafula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} Gabriel Wafula. All rights reserved.</p>
            <p>Finance Executive & Strategic Planner | CPA (K), CS (K)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;