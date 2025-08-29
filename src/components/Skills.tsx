import { TrendingUp, Shield, Calculator, Users, Target, FileText, BarChart, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Financial Leadership",
      icon: TrendingUp,
      skills: [
        "Strategic Planning",
        "Budgeting and Forecasting", 
        "Financial Analysis",
        "Performance Management",
        "Resource Optimization"
      ]
    },
    {
      title: "Compliance & Audit",
      icon: Shield,
      skills: [
        "Internal Controls",
        "Compliance Management",
        "Risk Assessment",
        "Audit Framework",
        "Regulatory Compliance"
      ]
    },
    {
      title: "Tax & Advisory",
      icon: Calculator,
      skills: [
        "Tax Planning",
        "Tax Compliance",
        "Corporate Advisory",
        "Client Consulting",
        "Financial Consulting"
      ]
    },
    {
      title: "Team & Operations",
      icon: Users,
      skills: [
        "Team Development",
        "Staff Mentoring",
        "Operational Excellence",
        "Process Improvement",
        "Stakeholder Engagement"
      ]
    },
    {
      title: "Strategic Management",
      icon: Target,
      skills: [
        "Strategic Planning",
        "Corporate Strategy",
        "Business Development",
        "Change Management",
        "Organizational Development"
      ]
    },
    {
      title: "Systems & Reporting",
      icon: BarChart,
      skills: [
        "Management Reporting",
        "System Implementation",
        "Financial Systems",
        "Data Analysis",
        "Process Automation"
      ]
    }
  ];

  const certifications = [
    "CPA (K) – Certified Public Accountant of Kenya",
    "CS (K) – Certified Public Secretary of Kenya", 
    "Strategic Planning (MESP)",
    "Strategic Management (Co-operative Bank)",
    "Financial Management (KUSCO)",
    "ICPAK Membership"
  ];

  return (
    <section id="skills" className="section-spacing section-gradient">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise spanning financial management, strategic planning, compliance, 
            and leadership across multiple industry sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="professional-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary rounded-lg text-primary-foreground">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-foreground text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="professional-card p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <FileText className="text-accent" size={32} />
              <h3 className="text-2xl font-bold text-primary">Professional Certifications</h3>
            </div>
            <p className="text-muted-foreground">
              Maintaining professional standards through continuous education and certification
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 text-muted-foreground">
            <Globe size={20} />
            <span>Specialized in SACCO, NGO, and Corporate Finance Sectors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;