import { Award, GraduationCap, Target, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Professional Certifications",
      description: "CPA (K), CS (K) certified with continuous professional development"
    },
    {
      icon: GraduationCap,
      title: "Advanced Education",
      description: "Master's in Accounting & Finance, Bachelor of Commerce - Finance"
    },
    {
      icon: Target,
      title: "Strategic Leadership",
      description: "Led financial operations and strategic planning across multiple sectors"
    },
    {
      icon: Users,
      title: "Team Development",
      description: "Mentored professionals and built high-performance finance teams"
    }
  ];

  return (
    <section id="about" className="section-spacing section-gradient">
      <div className="container-professional">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">About Me</h2>
              <p className="text-lg text-foreground leading-relaxed">
                As an accomplished finance executive with over 20 years of experience, I specialize in 
                driving strategic planning, financial oversight, and operational excellence across diverse 
                sectors including SACCOs, development organizations, and mid-sized enterprises.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                My expertise spans financial leadership, internal audit, tax advisory, and strategic 
                management. I am passionate about delivering robust leadership, rigorous analysis, and 
                process improvements that align finance with organizational objectives.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Core Qualifications</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Master's in Accounting & Finance (2016) - Kabarak University</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Bachelor of Commerce - Finance Option (2014) - Kabarak University</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Certified Public Accountant of Kenya (CPA-K) - 2002</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Certified Public Secretary of Kenya (CPS-K) - 2004</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="professional-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-lg text-primary-foreground">
                    <achievement.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-primary">{achievement.title}</h4>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;