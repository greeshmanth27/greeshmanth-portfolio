
import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-foreground/70">
              © {currentYear} Greeshmanth. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a 
              href="https://github.com/greeshmanth27"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/greeshmanth-pokuru-9774121aa/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/Greeshmanth27"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-purple transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-foreground/60">
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
