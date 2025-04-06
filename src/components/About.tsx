
import React from "react";
import { Award, BookOpen, BookText, Coffee, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 relative"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm Greeshmanth, a passionate Full Stack Developer with a 
              love for creating elegant, high-performance web applications. 
              My journey in tech started with a curiosity about how things work 
              on the web, which led me to dive deep into modern frameworks and 
              best practices.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in building responsive, user-friendly interfaces using 
              React.js and creating robust backend systems. I believe in writing 
              clean, maintainable code and staying up-to-date with emerging technologies.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good book with a cup of coffee.
            </p>
          </div>
          
          <div className="glass-card1 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What I Do</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="p-3 rounded-full bg-purple/10">
                  <BookText className="w-6 h-6 text-purple" />
                </div>
                <h4 className="font-medium">Frontend</h4>
                <p className="text-sm opacity-80">Creating beautiful, responsive user interfaces</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="p-3 rounded-full bg-purple/10">
                  <BookOpen className="w-6 h-6 text-purple" />
                </div>
                <h4 className="font-medium">Backend</h4>
                <p className="text-sm opacity-80">Building scalable server-side applications</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="p-3 rounded-full bg-purple/10">
                  <Award className="w-6 h-6 text-purple" />
                </div>
                <h4 className="font-medium">UX/UI</h4>
                <p className="text-sm opacity-80">Designing intuitive user experiences</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="p-3 rounded-full bg-purple/10">
                  <Heart className="w-6 h-6 text-purple" />
                </div>
                <h4 className="font-medium">Performance</h4>
                <p className="text-sm opacity-80">Optimizing for speed and efficiency</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center items-center w-full">
  <div className="stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
    <div className="stat">
      <div className="text-4xl font-bold text-purple mb-2">1+</div>
      <div className="text-sm opacity-80">Years Experience</div>
    </div>
    <div className="stat">
      <div className="text-4xl font-bold text-purple mb-2">5+</div>
      <div className="text-sm opacity-80">Projects Completed</div>
    </div>
    <div className="stat">
      <div className="text-4xl font-bold text-purple mb-2">2+</div>
      <div className="text-sm opacity-80">Happy Clients</div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
