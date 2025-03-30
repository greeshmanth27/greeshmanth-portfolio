
import React, { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Statistics from "@/components/Statistics";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Animate sections on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add fade-in animation
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            
            // Add section-active class for underline animation
            entry.target.classList.add("section-active");
            
            // Animate section titles
            const title = entry.target.querySelector(".section-title");
            if (title) {
              title.classList.add("animate-slide-in");
            }
          } else {
            // Remove section-active class when section is not in view
            entry.target.classList.remove("section-active");
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
    
    // Custom cursor functionality
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col custom-cursor">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Statistics />
          <Projects />
          <Resume />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
