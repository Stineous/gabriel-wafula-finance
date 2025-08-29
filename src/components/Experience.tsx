import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Cane Accountant",
      company: "West Kenya Sugar Company (Kabras)",
      location: "Naitiri, Kenya",
      period: "Feb 2022 – June 2023",
      responsibilities: [
        "Streamlined data collection, reconciliation, and financial tracking for cane supply chain reporting",
        "Developed management reports to enhance performance monitoring and strategic decisions",
        "Collaborated with production and logistics teams to implement process controls",
        "Contributed to audit readiness by enforcing accurate documentation and compliance reviews",
        "Guided junior team members in daily accounting procedures"
      ]
    },
    {
      title: "Finance Director & Lecturer",
      company: "Achievers School of Professional College & Kabarak University",
      location: "Nakuru, Kenya",
      period: "Jan 2014 – Jan 2022",
      responsibilities: [
        "Directed overall financial operations, including budget setting and resource optimization",
        "Formulated and presented detailed management accounts for board-level decision-making",
        "Designed and executed internal controls that strengthened audit trails",
        "Delivered advanced finance and accounting modules to students",
        "Oversaw tuition revenue tracking, grant management, and cost-control measures",
        "Mentored junior finance professionals and administrative staff"
      ]
    },
    {
      title: "Part-time Semi-Senior & Tax Senior",
      company: "Rufus Mwaniki (CPA-K)",
      location: "Kenya",
      period: "Jan 2007 – Dec 2014",
      responsibilities: [
        "Evaluated corporate accounting systems to identify control weaknesses",
        "Led comprehensive client advisory engagements on tax planning and compliance",
        "Conducted thorough internal audit reviews and compliance testing",
        "Managed staffing schedules and workflow reviews for audit and tax teams",
        "Performed stock and financial audit assignments for SMEs and SACCOs"
      ]
    },
    {
      title: "Assistant Accountant & Internal Auditor",
      company: "Nakuru Teachers SACCO",
      location: "Nakuru, Kenya",
      period: "Jan 2004 – Dec 2007",
      responsibilities: [
        "Produced accurate periodic and annual financial statements",
        "Implemented and refined internal audit framework",
        "Organized debtors and creditors circularizations for improved cash flow",
        "Developed cost optimization initiatives and system enhancements",
        "Prepared bank reconciliations and managed loan appraisal workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-background">
      <div className="container-professional">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Over two decades of progressive responsibility in finance, audit, and strategic leadership 
            across diverse organizations and sectors.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="professional-card p-8">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-accent mb-2">
                      <Building size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-primary mb-4">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;