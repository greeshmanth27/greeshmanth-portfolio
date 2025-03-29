
import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Timeline: React.FC<{
  items: {
    id: number;
    date: string;
    title: string;
    organization: string;
    description: string;
  }[];
  type: "work" | "education";
}> = ({ items, type }) => {
  return (
    <div className="space-y-0">
      {items.map((item) => (
        <div key={item.id} className="timeline-item">
          <div className="timeline-dot"></div>
          <span className="inline-block text-sm font-semibold text-purple-light bg-purple/10 px-3 py-1 rounded-full mb-2">
            {item.date}
          </span>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-foreground/80 font-medium">{item.organization}</p>
          <p className="mt-2 text-foreground/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const Experience: React.FC = () => {
  const workExperience = [
    {
      id: 1,
      date: "2022 - Present",
      title: "Senior Full Stack Developer",
      organization: "Tech Innovations Inc.",
      description: "Lead developer for enterprise web applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      id: 2,
      date: "2020 - 2022",
      title: "Frontend Developer",
      organization: "WebSolutions Co.",
      description: "Developed responsive user interfaces for client projects. Collaborated with designers and backend developers to implement features and improve performance."
    },
    {
      id: 3,
      date: "2018 - 2020",
      title: "Web Developer",
      organization: "Digital Agency",
      description: "Built websites and web applications for various clients using modern JavaScript frameworks and CSS preprocessors."
    }
  ];
  
  const education = [
    {
      id: 1,
      date: "2016 - 2018",
      title: "MSc in Computer Science",
      organization: "Tech University",
      description: "Specialized in Web Technologies and Distributed Systems. Graduated with honors."
    },
    {
      id: 2,
      date: "2012 - 2016",
      title: "BSc in Computer Science",
      organization: "University of Technology",
      description: "Focused on Software Engineering and Database Systems. Participated in several hackathons and coding competitions."
    },
    {
      id: 3,
      date: "2011 - 2012",
      title: "Web Development Bootcamp",
      organization: "Coding Institute",
      description: "Intensive 6-month program covering full stack web development fundamentals."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">Experience & Education</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-purple mr-3" />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            <Timeline items={workExperience} type="work" />
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-purple mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <Timeline items={education} type="education" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
