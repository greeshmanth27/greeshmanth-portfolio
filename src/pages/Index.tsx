
import React, { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
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
    
    // Create scroll indicator
    const createScrollIndicator = () => {
      // Only create on desktop
      if (window.innerWidth < 768) return;
      
      const scrollIndicator = document.createElement("div");
      scrollIndicator.className = "scroll-indicator";
      
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const dot = document.createElement("div");
        dot.className = "scroll-dot";
        dot.dataset.target = section.id;
        dot.addEventListener("click", () => {
          document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
        });
        scrollIndicator.appendChild(dot);
      });
      
      document.body.appendChild(scrollIndicator);
      
      // Update active dot on scroll
      const updateActiveDot = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll(".scroll-dot").forEach((dot) => {
              dot.classList.remove("active");
            });
            
            document.querySelector(`.scroll-dot[data-target="${section.id}"]`)?.classList.add("active");
          }
        });
      };
      
      window.addEventListener("scroll", updateActiveDot);
      updateActiveDot(); // Initialize
    };
    
    createScrollIndicator();

    return () => {
      observer.disconnect();
      const scrollIndicator = document.querySelector(".scroll-indicator");
      if (scrollIndicator) {
        scrollIndicator.remove();
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
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
