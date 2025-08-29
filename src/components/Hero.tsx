import { ArrowDown, Download, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import professionalPhoto from '@/assets/gabriel-wafula-professional.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient text-primary-foreground">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Gabriel Wafula
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
                Finance Executive & Strategic Planner
              </p>
              <p className="text-lg text-primary-foreground/80 max-w-xl">
                20+ years driving strategic planning, financial oversight, and operational excellence across SACCOs, development organizations, and enterprises.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <MapPin size={20} />
                <span>Nakuru, Kenya</span>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Mail size={20} />
                  <a href="mailto:wafulagabby2012@gmail.com" className="hover:text-accent-light transition-colors">
                    wafulagabby2012@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <Phone size={20} />
                  <a href="tel:+254721352867" className="hover:text-accent-light transition-colors">
                    +254 721 352 867
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToAbout}
                className="btn-accent flex items-center gap-2"
              >
                Learn More
                <ArrowDown size={18} />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download size={18} />
                Download CV
              </button>
              <a 
                href="https://linkedin.com/in/gabriel-wafula" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-accent-light transition-colors p-3"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-professional-strong">
                <img 
                  src={professionalPhoto} 
                  alt="Gabriel Wafula - Finance Executive" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-lg p-4 shadow-professional-medium">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;