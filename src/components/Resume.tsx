
import React from "react";
import { Download } from "lucide-react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="section-title text-center mb-16 relative">
          My Resume
        </h2>

        <div className="max-w-md mx-auto glass-card p-10 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center">
          <h3 className="text-2xl font-bold text-purple mb-6">Download My CV</h3>
          <p className="text-muted-foreground mb-8">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
          <a 
            href="#" 
            className="btn-primary flex items-center gap-2 group"
            onClick={(e) => { 
              e.preventDefault(); 
              // In a real site, this would download the actual resume file
              alert("Resume download would start here");
            }}
          >
            <Download size={18} className="group-hover:animate-bounce" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
