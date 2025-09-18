import React, { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {

  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D card effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsHovered(false);

    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };
  return (               
    
    <div ref={cardRef} className="glass-card group rounded-lg overflow-hidden group transform-gpu" onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}> 
       <div className="relative overflow-hidden h-48 sm:h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>

        <div className="absolute bottom-0 left-0 p-4 z-20">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className={`project-badge bg-purple-500 text-white`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-purple hover:text-purple-hover transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>

          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const projects: Project[] = [
    {
      "id": 1,
      "title": "Villa Booking Website",
      "description": "A responsive villa booking website built using HTML, CSS, and Bootstrap. Features an elegant UI, property listings, and user-friendly navigation.",
      "image": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316679440.jpg?k=deb39a46f5b90bdd83b556ff91d101d7130ff0ef88c086500b934c3aac0746f4&o=&hp=1",
      "tags": ["HTML", "CSS", "Bootstrap"],
      "demoLink": "https://greeshmanth27.github.io/Villa_project/",
      "repoLink": "https://github.com/greeshmanth27/Villa_project.git"
    },
    
    {
      "id": 2,
      "title": "Image Puzzle Game",
      "description": "An interactive image puzzle game built using HTML, CSS, Bootstrap, and JavaScript. Features drag-and-drop functionality and a timer-based challenge.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHGPpMxuX3_32rzOwfEh4t_7pVojsEPut6g&s",
      "tags": ["HTML", "CSS", "Bootstrap", "JavaScript"],
      "demoLink": "https://greeshmanth27.github.io/imagePuzzle/",
      "repoLink": "https://github.com/greeshmanth27/imagePuzzle.git"
    },
    
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather data and forecasts for multiple locations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["React", "Weather API", "CSS Grid"],
      demoLink: "https://v0-real-time-weather-app-eight.vercel.app/",
      repoLink: "#",
    },
    {
      id: 4,
      title: "Task Management App",
      description: "A full-stack task management application with  task creation, and real-time updates,Deadlines,Dashboard",
      image: "https://raw.githubusercontent.com/devatsrs/task-management-app/master/screenshot.jpg",
      tags: ["React", "Next js","Tailwind CSS"],
      demoLink: "https://task-management-application-five-theta.vercel.app/",
      repoLink: "https://github.com/greeshmanth27/Task-management-Application.git",
    },
    {
      id: 5,
      title: "Food Reels App",
      description: "A food recipe application that allows users to search for recipes, view detailed instructions, and save their favorite dishes.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Redux"],
      demoLink: "https://github.com/greeshmanth27/Food_Shorts.git",
      repoLink: "https://github.com/greeshmanth27/Food_Shorts.git"
    }
    
  ];

  // Get unique tags for the filter
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags)));

  const custom_tags = ["React", "Node.js", "MongoDB", "Redux","PostgreSQL",  "Next.js", "Django", "AWS S3"];

  // Filter projects based on the selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">My Projects</h2>

        {/* Breadcrumb-like filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${
              selectedTag === null ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setSelectedTag(null)}
          >
            All
          </button>
          {custom_tags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-lg ${
                selectedTag === tag ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground/80 mb-6">
            These are just a few examples of my work. I'm always working on new projects!
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
