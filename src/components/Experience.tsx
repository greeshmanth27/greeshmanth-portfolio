
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
    <Card className="glass-card neon-border overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-100">
          <img src={image} alt={title} className="w-full h-full object-cover" />
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
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "May 2023",
      description: "Comprehensive course covering React fundamentals, hooks, Redux, Next.js, and modern React patterns for building scalable applications.",
      image: "https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg",
      link: "https://www.udemy.com/certificate/UC-XXXXXXXXXX/"
    },
    {
      id: 2,
      title: "Python for Data Science and Machine Learning",
      issuer: "Coursera",
      date: "January 2023",
      description: "Advanced Python techniques for data analysis, visualization, and machine learning implementations using NumPy, Pandas, and Scikit-Learn.",
      image: "https://img-b.udemycdn.com/course/750x422/2776760_f176_10.jpg",
      link: "https://www.coursera.org/verify/XXXXXXXXXX"
    },
    {
      id: 3,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2022",
      description: "Professional certification validating expertise in designing distributed systems and deployments on AWS cloud infrastructure.",
      image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
      link: "https://www.credly.com/badges/XXXXXXXXXX"
    },
    {
      id: 4,
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
