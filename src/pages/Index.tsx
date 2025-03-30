
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
import { useDynamicCursor } from "@/hooks/useDynamicCursor";

const Index = () => {
  // Use the dynamic cursor hook
  useDynamicCursor();
  
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

    return () => {
      observer.disconnect();
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
