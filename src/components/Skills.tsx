
import React from "react";

// Skill card component for reusability
interface SkillCardProps {
  icon: string;
  name: string;
  level: number;
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level, color = "#8A2BE2" }) => {
  return (
    <div className="skill-card">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{name}</h3>
      <div className="w-full bg-secondary/50 rounded-full h-2.5 mb-2">
        <div 
          className="h-2.5 rounded-full" 
          style={{ width: `${level}%`, backgroundColor: color }}
        ></div>
      </div>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { icon: "⚛️", name: "React.js & Next.js", level: 95, color: "#61DAFB" },
    { icon: "📱", name: "Responsive Design", level: 90, color: "#8A2BE2" },
    { icon: "🔄", name: "State Management (Redux, Zustand)", level: 90, color: "#8A2BE2" },
    { icon: "🎨", name: "UI/UX & Tailwind CSS", level: 85, color: "#38BDF8" },
  ];
  
  const backendSkills = [
    { icon: "☕", name: "Spring Boot & Microservices", level: 90, color: "#FFA500" },
    { icon: "🐍", name: "Django & Node.js", level: 85, color: "#092E20" },
    { icon: "📦", name: "REST & GraphQL APIs", level: 92, color: "#8A2BE2" },
    { icon: "🗄️", name: "SQL, PostgreSQL & MongoDB", level: 80, color: "#0078D7" },
  ];
  
  const devOpsSkills = [
    { icon: "☁️", name: "AWS & Cloud Computing", level: 75, color: "#FF9900" },
    { icon: "🚢", name: "CI/CD (GitHub Actions)", level: 80, color: "#8A2BE2" },
    { icon: "📊", name: "Performance Optimization", level: 85, color: "#8A2BE2" },
  ];
  

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">My Skills</h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Frontend Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={`frontend-${index}`}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Backend Development</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={`backend-${index}`}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">DevOps & Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {devOpsSkills.map((skill, index) => (
                <SkillCard
                  key={`devops-${index}`}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Other Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["TypeScript", "Redux", "Next.js", "GraphQL", "MongoDB", "PostgreSQL", "Git", "Tailwind CSS","Git and Github","MERN Stack"].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-purple hover:text-white transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
