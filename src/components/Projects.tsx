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
      id: 1,
      title: "Task Management App",
      description: "A full-stack task management application with drag-and-drop functionality, user authentication, and real-time updates.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather data and forecasts for multiple locations.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["React", "Weather API", "Chart.js", "CSS Grid"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A feature-rich blog platform with markdown support, comment system, and user authentication.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["React", "Django", "PostgreSQL", "AWS S3"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout plans, progress charts, and nutrition logging.",
      image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3",
      tags: ["React Native", "Firebase", "Redux", "Health API"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      id: 6,
      title: "Real Estate Finder",
      description: "A property finder application with map integration, filters, and virtual tour capabilities.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1073&ixlib=rb-4.0.3",
      tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
      demoLink: "#",
      repoLink: "#",
    },
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
