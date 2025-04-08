
import React from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

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

const Certification: React.FC<{
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
}> = ({ title, issuer, date, description, image, link }) => {
  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-100">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="md:w-2/3">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <Badge className="mb-2">{issuer}</Badge>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm mt-1">
                  Issued: {date}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 text-sm mb-4">{description}</p>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={() => window.open(link, "_blank")}
            >
              View Certificate <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

const Experience: React.FC = () => {
  const workExperience = [
    {
      "id": 1,
      "date": "2025 - Present",
      "title": "Technical Specialist Intern",
      "organization": "Warp Drive Tech Works",
      "description": "Worked as a Python Full Stack Developer, building and optimizing enterprise web applications using Django, React.js, and PostgreSQL. Gained experience in backend development, API integrations, and improving application performance."
    },
    
    {
      "id": 2,
      "date": "2023 - 2023",
      "title": "Software Engineer Intern",
      "organization": "BlackBuck Engineers PVT Ltd.",
      "description": "Worked on C, Data Structures, Java, and Spring Boot, gaining hands-on backend development experience. Developed a Library Catalog system using Java and Spring Boot, optimizing data management and retrieval."
    }
    
  ];
  
  const education = [
    {
      "id": 1,
      "date": "2024 - 2025",
      "title": "MERN Full Stack Course",
      "organization": "10000 Coders",
      "description": "Comprehensive training in modern web development, covering React.js, Node.js, Express.js, and MongoDB. Focused on building scalable and high-performance applications."
    },
    {
      "id": 2,
      "date": "2020 - 2024",
      "organization": "PBR Visvodaya Institute of Technology and Science",
      "title": "B.Tech in Computer Science and Engineering (Specialization in IoT)",
      "description": "Completed a four-year undergraduate program focusing on core computer science concepts, IoT technologies, software development, and full-stack web development."
    }
    
  ];

  const certifications = [
    {
      id: 1,
      title: "Certification in Java",
      issuer: "AISCM Skills and Management Pvt Ltd",
      date: "March 2023",
      description: "Professional certification demonstrating proficiency in Java programming, covering object-oriented concepts, exception handling, multithreading, collections, and JDBC.",
      image: "data:image/png;base64,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",
      link: "https://drive.google.com/file/d/1VIMFI4YbJ6-XJEP27onH7_x_OFgXnbPn/view?usp=sharing"
    },    
    {
      id: 2,
      title: "Mern Fullstack",
      issuer: "10000 coders",
      date: "JAnuaryy 2025",
      description: "Comprehensive program covering front-end and back-end JavaScript development including Node.js, Express, and MongoDB.",
      image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max",
      link: "https://drive.google.com/file/d/1a33Q5nCy6RE4_8olnbhXrTuB0l4pysQx/view?usp=sharing"
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
        
        <div className="mt-20">
          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-purple mr-3" />
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {certifications.map(cert => (
              <Certification
                key={cert.id}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                description={cert.description}
                image={cert.image}
                link={cert.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
