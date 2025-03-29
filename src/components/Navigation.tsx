
import React, { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section for highlighting navigation
      const sections = document.querySelectorAll("section[id]");
      sections.forEach(section => {
        // Cast section to HTMLElement to access offsetTop and offsetHeight
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = sectionElement.getAttribute("id") || "";
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
      window.scrollTo({
        top: (section as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-lg shadow-md"
          : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold text-primary cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          <span className="text-purple">G</span>reeshmanth
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className={`nav-link ${activeSection === "about" ? "text-purple after:w-full" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className={`nav-link ${activeSection === "skills" ? "text-purple after:w-full" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`nav-link ${activeSection === "projects" ? "text-purple after:w-full" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#resume"
            className={`nav-link ${activeSection === "resume" ? "text-purple after:w-full" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("resume");
            }}
          >
            Resume
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === "experience" ? "text-purple after:w-full" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === "contact" ? "text-purple after:w-full" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors hover:rotate-12"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-4 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-purple" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 shadow-lg"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a
            href="#about"
            className={`nav-link block py-3 text-lg ${activeSection === "about" ? "text-purple" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className={`nav-link block py-3 text-lg ${activeSection === "skills" ? "text-purple" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`nav-link block py-3 text-lg ${activeSection === "projects" ? "text-purple" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#resume"
            className={`nav-link block py-3 text-lg ${activeSection === "resume" ? "text-purple" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("resume");
            }}
          >
            Resume
          </a>
          <a
            href="#experience"
            className={`nav-link block py-3 text-lg ${activeSection === "experience" ? "text-purple" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`nav-link block py-3 text-lg ${activeSection === "contact" ? "text-purple" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
