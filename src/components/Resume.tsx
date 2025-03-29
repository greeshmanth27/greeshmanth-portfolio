
import React from "react";
import { Download, FileText, Calendar, Award, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16 relative">
          My Resume
          <span className="section-underline"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div>
              <h3 className="text-2xl font-bold text-purple">Greeshmanth's CV</h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
            <a 
              href="#" 
              className="btn-primary flex items-center gap-2 group"
              onClick={(e) => { 
                e.preventDefault(); 
                // In a real site, this would download the actual resume file
                alert("Resume download would start here") 
              }}
            >
              <Download size={16} className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
          </div>

          <Separator className="mb-8 bg-purple/20" />

          {/* Resume sections */}
          <div className="space-y-10">
            {/* Personal Information */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <FileText size={18} className="text-purple" />
                Personal Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 mt-3">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">Greeshmanth</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">greeshmanth@example.com</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium flex items-center">
                    <MapPin size={14} className="mr-1 text-purple" /> San Francisco, CA
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-3">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <Award size={18} className="text-purple" />
                Professional Summary
              </h4>
              <p className="pl-6 leading-relaxed hover:text-foreground transition-colors duration-300">
                Dedicated Full Stack Developer with over 3 years of experience in designing 
                and implementing complex web applications. Proficient in React.js, Node.js, 
                and modern backend systems. Passionate about creating responsive, intuitive 
                interfaces and building high-performance applications with clean code.
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <Calendar size={18} className="text-purple" />
                Work Experience
              </h4>
              
              <div className="pl-6 space-y-6">
                {/* Experience 1 */}
                <div className="resume-item hover:bg-secondary/30 p-3 rounded-lg transition-all duration-300">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h5 className="text-lg font-medium">Senior Full Stack Developer</h5>
                    <span className="text-sm font-semibold bg-purple/10 text-purple px-3 py-1 rounded-full">
                      2022 - Present
                    </span>
                  </div>
                  <p className="text-purple-light font-medium">Tech Innovations Inc.</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-foreground/80">
                    <li>Lead development for enterprise-level web applications</li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                
                {/* Experience 2 */}
                <div className="resume-item hover:bg-secondary/30 p-3 rounded-lg transition-all duration-300">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h5 className="text-lg font-medium">Frontend Developer</h5>
                    <span className="text-sm font-semibold bg-purple/10 text-purple px-3 py-1 rounded-full">
                      2020 - 2022
                    </span>
                  </div>
                  <p className="text-purple-light font-medium">WebSolutions Co.</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-foreground/80">
                    <li>Developed responsive UIs using React and modern CSS</li>
                    <li>Collaborated with designers to implement pixel-perfect interfaces</li>
                    <li>Improved application performance by 30% through optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold flex items-center gap-2">
                <Calendar size={18} className="text-purple" />
                Education
              </h4>
              
              <div className="pl-6 space-y-6">
                {/* Education 1 */}
                <div className="resume-item hover:bg-secondary/30 p-3 rounded-lg transition-all duration-300">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h5 className="text-lg font-medium">MSc in Computer Science</h5>
                    <span className="text-sm font-semibold bg-purple/10 text-purple px-3 py-1 rounded-full">
                      2016 - 2018
                    </span>
                  </div>
                  <p className="text-purple-light font-medium">Tech University</p>
                  <p className="mt-1 text-foreground/80">Specialized in Web Technologies and Distributed Systems</p>
                </div>
                
                {/* Education 2 */}
                <div className="resume-item hover:bg-secondary/30 p-3 rounded-lg transition-all duration-300">
                  <div className="flex justify-between flex-wrap gap-2">
                    <h5 className="text-lg font-medium">BSc in Computer Science</h5>
                    <span className="text-sm font-semibold bg-purple/10 text-purple px-3 py-1 rounded-full">
                      2012 - 2016
                    </span>
                  </div>
                  <p className="text-purple-light font-medium">University of Technology</p>
                  <p className="mt-1 text-foreground/80">Focus on Software Engineering and Database Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
